// footer/footer.module.js
import angular from 'angular';
import { FooterComponent } from './footer.component';

export const footerModule = angular
  .module('footer', [])
  .component('footer', FooterComponent)
  .name;