import Vue from 'vue';
import VueRouter from "vue-router";
import Products from "./Products.vue";
import About from "./About.vue";
import AboutMe from "./AboutMe.vue";
import AboutYou from "./AboutYou.vue";
import AboutHome from "./AboutHome.vue";
import Home1 from './Home.1.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/", component: Home1, children: [
        {
          path: "about",
          component: About,
          children: [
            { path: "", component: AboutHome },
            { path: "me", name: "me", component: AboutMe },
            { path: "you", component: AboutYou },
            { path: "both", components: { 'default': AboutMe, 'another': AboutYou } }
          ]
        },
        { path: "products/:id?", name: "prod", component: Products },
      ]
    },
  ]
});