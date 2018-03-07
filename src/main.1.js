import Vue from 'vue'
import routers from './routers';

new Vue({
  el: '#app',
  router: routers,
  template: "<router-view/>"
});
