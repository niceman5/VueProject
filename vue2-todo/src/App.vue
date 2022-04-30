<template>
  <div>
    <header><h1>Vue2 Todo with Typescript</h1></header>
    <main>
      <!-- v-model의 입력방식을 풀어서 입력하는 방식 -->
      <TodoInput
        :item="todoText"
        @input="updateTodoText"
        @add="addTodoItem"
      ></TodoInput>
    </main>
    <div>
      <ul>
        <TodoListItem
          v-for="(todoItem, index) in todoItems"
          :key="index"
          :index="index"
          :todoItem="todoItem"
          @delete="removeTodoItem"
          @toggle="toggleTodoItem"
        >
        </TodoListItem>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoListItem from "./components/TodoListItem.vue";

//객체를 위한 타입
//export해야 다른 vue파일에서 사용가능함
export interface Todo {
  title: string;
  done: boolean;
}

const STORAGE_KEY = "vue-todo-ts-v1";
const storage = {
  //메서드 생성
  //fetch의 리턴타입을 정의
  fetch(): Todo[] {
    //값을 읽거나 없으면 빈배열을 리턴하게 한다.
    //읽었는데 null이면 뒤가 실행되게 하는 코드
    //type이 안 맞는 오류가 나는데 값이 null일때 초기화 하는 방식문제로 오류가 남.
    //JSON.parse에는 string만 와야 하는데 array가 올수있음으로 [] -> "[]" 만듬.
    //JSON.parse로 빈배열이 됨
    const todoItems = localStorage.getItem(STORAGE_KEY) || "[]";
    const result = JSON.parse(todoItems);
    return result;
  },
  save(todoItems: Todo[]) {
    const parsed = JSON.stringify(todoItems);
    localStorage.setItem(STORAGE_KEY, parsed);
  },
};

export default Vue.extend({
  components: { TodoInput, TodoListItem },
  data() {
    return {
      todoText: "",
      todoItems: [] as Todo[],
    };
  },
  methods: {
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      const todo: Todo = {
        title: value,
        done: false,
      };
      this.todoItems.push(todo);
      // this.todoItems.push({
      //   title: value,
      //   done: false,
      // });

      //localStorage.setItem(value, value);
      storage.save(this.todoItems);

      this.initTodoText();
    },
    initTodoText() {
      this.todoText = "";
    },
    fetchTodoItems() {
      this.todoItems = storage.fetch().sort((a, b) => {
        //a가 b보다 작을때는 -1
        //a가 클때는 1
        //같을때는 0
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    },
    removeTodoItem(index: number) {
      console.log("removeTodoItem", index);
      // 삭제
      this.todoItems.splice(index, 1);

      storage.save(this.todoItems);
    },
    toggleTodoItem(todoItem: Todo, index: number) {
      this.todoItems.splice(index, 1, {
        //모든 값을 적는 방법이 있는데 입력이 힘듬
        // title: todoItem.title,
        // done: !todoItem.done,

        //...todoItem하면 모든 요소를 풀어서 입력하는 것과 같고 아래 변경되는 부분만 추가코딩
        ...todoItem,
        done: !todoItem.done,
      });
      storage.save(this.todoItems);
    },
  },
  created() {
    this.fetchTodoItems();
  },
});
</script>

<style scoped></style>
