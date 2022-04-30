<template>
  <li>
    <span class="item" :class="todoItemClass" @click="toggleItem">{{
      todoItem.title
    }}</span>
    <!-- 버튼에 직접 emit을 걸수있음. 테스트시 어려움 -->
    <!-- <button @click="$emit('delete')"></button> -->
    <button @click="removeItem">삭제</button>
  </li>
</template>

<script lang="ts">
import { Todo } from "@/App.vue";
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    //넘겨받은 object를 형을 정의해서 사용할수 있음
    //interface를 모아서 별도 파일로 만들고 export선언하고 사용하면 자료형으로 사용할수 있을듯
    todoItem: Object as PropType<Todo>,
    index: Number,
  },
  computed: {
    //return값을 정의해야 한다. string이거나 null
    //이걸 사용하면 코딩이 깔끔해진다. 이렇게 안하면 각 요소별 개별 코딩이 필요함
    todoItemClass(): string | null {
      return this.todoItem.done ? "complete" : null;
    },
  },
  methods: {
    toggleItem() {
      this.$emit("toggle", this.todoItem, this.index);
    },
    removeItem() {
      this.$emit("delete", this.index);
    },
  },
});
</script>

<style scoped>
.item {
  cursor: pointer;
}
.complete {
  text-decoration: line-through;
}
</style>
