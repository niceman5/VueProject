<template>
  <div>
    <label for="todo-input"></label>
    <input id="todo-input" type="text" :value="item" @input="handleInput" />
    <button @click="addTodo" type="button">add</button>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  props: ["item"],
  methods: {
    addTodo() {
      console.log("add");
    },
    hadleInput(event) {
      // event.target.value;
      this.$emit("input", event.target.value);
    },
  },
  // setup(props) {
  //   return {};
  // },
};
</script>

<style scoped></style>
