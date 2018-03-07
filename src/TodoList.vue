<template>
  <div>
  <todo-input @input="addTodo"></todo-input>
  <ul>
    <todo-item v-for="(todo,idx) in todos" v-bind:label="todo" @click.native="removeTodo(idx)"></todo-item>
  </ul>
  </div>
</template>

<script>
import TodoInput from "./TodoInput.vue";
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoInput,
    TodoItem
  },
  data() {
    return {
      todos: ["a", "b", "c"]
    };
  },
  methods: {
    addTodo(text) {
      this.todos.push(text);
    },
    removeTodo(idx) {
      this.todos.splice(idx, 1);
    }
  }
};
</script>
