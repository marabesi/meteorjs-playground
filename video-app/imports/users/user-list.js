import angularComponent from 'angular-component'
import template from './user-list.html'
import { Users } from '../api/users.js'

class UserListCtlr {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      users() {
        return Users.find();
      }
    });
  }
}

export default angular.module('userList', [
  angularMeteor
]).component('userList', {
  templateUrl: 'imports/users/user-list.html',
  controller: ['$scope', UserListCtlr]
});
