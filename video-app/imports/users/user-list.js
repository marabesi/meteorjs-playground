import angularComponent from 'angular-component'
import template from './user-list.html'
import { Users } from '../api/users.js'
import uiRouter from 'angular-ui-router'

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
  angularMeteor,
  uiRouter,
]).component('userList', {
  templateUrl: 'imports/users/user-list.html',
  controller: ['$scope', UserListCtlr]
}).config(function($stateProvider) {
    $stateProvider.state('users', {
        url: '/users',
        template: '<user-list><user-list/>'
    })
});
