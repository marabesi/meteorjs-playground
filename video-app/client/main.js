import angularMeteor from 'angular-meteor'
import userList from '../imports/users/user-list.js'

angular.module('video-app', [
  angularMeteor,
  userList.name
])
