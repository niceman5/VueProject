<template>
  <div>
    <h1>Vue Todo with Typescript !!</h1>
    <TodoInput :item="todoText" @input="updateTodoText"></TodoInput>
    {{ todoText }}
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";

export default {
  name: "App",
  components: {
    TodoInput,
  },
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    updateTodoText(value) {
      this.todoText = value;
    },
  },
  // setup() {
  //   const todoText = "";
  //   return {
  //     todoText,
  //   };
  // },
};
</script>

<style scoped></style>
