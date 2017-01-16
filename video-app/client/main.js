import angularMeteor from 'angular-meteor'
import userList from '../imports/users/user-list.js'
import uiRouter from 'angular-ui-router'
import navigation from '../imports/components/ui/navigation/navigation.js'

angular.module('video-app', [
  angularMeteor,
  userList.name,
  navigation.name,
  uiRouter,
]).config(function ($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
});
