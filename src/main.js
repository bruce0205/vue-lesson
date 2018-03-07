import Vue from 'vue'
import App from './App.vue'
import Outer from './Outer.vue'
import TodoList from './TodoList.vue'
import Router from 'vue-router'
import Home from './Home.vue'

Vue.use(Router);

new Vue({
  el: '#app',
  render: h => h(Home)
})
