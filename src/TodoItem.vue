<template>
  <li class="todo-item">{{label}}</li>
</template>

<script>
export default {
  props: ["label"]
};
</script>

<style>
.todo-item {
  font: size 1.2em;
  background-color: #fed;
  margin: 6px 0;
  padding: 2px 8px;
  cursor: pointer;
}
.todo-item:hover {
  background-color: aquamarine;
}
</style>

