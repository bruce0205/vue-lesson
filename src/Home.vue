<template>
  <div>
    <div class="menu">
      <router-link to="/about">About</router-link>
      <router-link to="/products">Products</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import Router from "vue-router";
import Products from "./Products.vue";
import About from "./About.vue";
import AboutMe from "./AboutMe.vue";
import AboutYou from "./AboutYou.vue";
import AboutHome from "./AboutHome.vue";

export default {
  router: new Router({
    routes: [
      { path: "/products/:id?", component: Products },
      {
        path: "/about",
        component: About,
        children: [
          { path: "", component: AboutHome },
          { path: "me", name: "me", component: AboutMe },
          { path: "you", component: AboutYou }
        ]
      }
    ]
  })
};
</script>

<style>

</style>

