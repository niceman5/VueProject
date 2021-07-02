<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo :todos="todos"></CompletedTodo>

    <AddTodo @add-todo="addTodo"></AddTodo>
    <hr>
    
    
    <TodoList :todos="todos" @toggle-checkbox="togglecheckbox" @click-delete="deleteTodo">      
    </TodoList>

    {{ todos }}

  </div>
</template>

<script >

import TodoList from '@/components/todolist.vue'
import AddTodo from '@/components/AddTodo.vue'
import CompletedTodo from '@/components/CompletedTodo.vue'

export default {
  components : {
    TodoList,
    AddTodo,
    CompletedTodo
  },
  data() {
    return {
      
      todos : [
          {id:1, text:'buy a car', checked:false},
          {id:2, text:'play game', checked:false}
        ]
    }
  },
  methods: {
    addTodo(value) {
      console.log(value);
      this.todos.push({
          id: Math.random(),
          text : value,
          checked : false
      });
        this.todoText = '';
    },
    //togglecheckbox({id, checked}) 구조 분해 할당
    togglecheckbox({id, checked}){
      console.log(id, checked);
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });

      this.todos[index].checked = checked;
    },
    deleteTodo(id) {
      // 방법1
      // const index = this.todos.findIndex(todo => {
      //   return todo.id === id;
      // });
      // this.todos.splice(index, 1);

      //배열자체 필터링
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  },
}
</script>
