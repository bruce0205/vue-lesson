<template>
  <form @submit.prevent="submit">
    <input type="text" v-model="text">
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    submit() {
      this.$emit("input", this.text);
      this.text = "";
    }
  }
};
</script>
