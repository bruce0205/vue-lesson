<template>
  <div>
    <h1>Products</h1>
    <h2>{{id}}</h2>
    <h2>{{product}}</h2>
  </div>
</template>

<script>
const products = {
  1: "shoes",
  2: "t-shirts",
  3: "sox"
};
export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
    product() {
      return products[this.$route.params.id];
    }
  }
};
</script>
