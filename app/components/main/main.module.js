// main/main.module.js
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { MainComponent } from './main.component';

export const mainModule = angular
  .module('main', [
    uiRouter
  ])
  .component('main', MainComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('main', {
        url: '/main',
        component: 'main'
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;