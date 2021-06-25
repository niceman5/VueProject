<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <input v-model="todoText" type="text" class="w-100 p-2" placeholder="Type todo" @keyup.enter="addTodo">
    <hr>
    
    <todo v-for="todo in todos" :key="todo.id" :todo="todo" @toggle-checkbox="togglecheckbox" @click-delete="deleteTodo"/>
    {{ todos }}
  </div>
</template>

<script >
import todo from '@/components/todo.vue'

export default {
  components : {
    todo
  },
  data() {
    return {
      todoText : '',
      todos : [
          {id:1, text:'buy a car', checked:false},
          {id:2, text:'play game', checked:false}
        ]
    }
  },
  methods: {
    addTodo(e) {
      console.log(e.target.value);
      this.todos.push({
          id: Math.random(),
          text : e.target.value,
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
