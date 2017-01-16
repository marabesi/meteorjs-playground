import angularMeteor from 'angular-meteor'
import template from './navigation.html'

const name = 'navigation';

class Navigation {

}

export default angular.module(name, [
    angularMeteor
]).component(name, {
    templateUrl: template,
    controller: [Navigation]
});
