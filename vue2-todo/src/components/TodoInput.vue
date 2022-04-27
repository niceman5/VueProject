<template>
  <div>
    <label for="todo-input">오늘 할 일 : </label>
    <input type="text" id="todo-input" :value="item" @input="handleInput" />
    <button type="button" @click="addTodo">추가</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  // props: ["item"],
  props: {
    item: {
      type: String,
      required: true,
    },
  },
  methods: {
    addTodo() {
      this.$emit("add");
    },
    // handleInput(event: any) {
    handleInput(event: InputEvent) {
      // console.log(event);
      //event.target이 null이 아니라는 보장 event.target!
      // non-null assertion type
      // event.target이 null이면 종료처리...이게 안전한 방법
      // if (!event.target) {
      //   return;
      // }

      //강사 추천방법. 안전하지 않을수 있음....
      const eventTarget = event.target as HTMLInputElement;
      this.$emit("input", eventTarget.value);
    },
  },
});
</script>

<style scoped></style>
