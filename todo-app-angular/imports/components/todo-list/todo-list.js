import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todo-list.html';
import { Tasks } from '../../api/tasks.js';

class TodoListCtrl {
  constructor($scope) {
    $scope.viewModel(this);
    this.helpers({
      tasks() {
        return Tasks.find({}, {
          sort: {
            createdAt: -1
          }
        });
      }
    });
  }

  addTask(newTask) {
   Tasks.insert({
     text: newTask,
     createdAt: new Date
   });

   this.newTask = '';
 }

 setChecked(task) {
    // Set the checked property to the opposite of its current value
    Tasks.update(task._id, {
      $set: {
        checked: !task.checked
      },
    });
  }

  removeTask(task) {
    Tasks.remove(task._id);
  }
}

export default angular.module('todoList', [
  angularMeteor
])
  .component('todoList', {
    templateUrl: 'imports/components/todo-list/todo-list.html',
    controller: ['$scope', TodoListCtrl]
  });
