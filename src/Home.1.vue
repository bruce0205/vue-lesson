<template>
  <div>
    <div class="menu">
      <router-link to="/about">About1</router-link>
      <router-link to="/products">Products1</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import routers from "./routers.js";

export default {
  router: routers
};
</script>

<style>

</style>

