// header/header.module.js
import angular from 'angular';
import { HeaderComponent } from './header.component';

export const headerModule = angular
  .module('header', [])
  .component('header', HeaderComponent)
  .name;