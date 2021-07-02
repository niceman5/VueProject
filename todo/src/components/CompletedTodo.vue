<template>
    <div>
        완료된 Todo : {{ numberOfCompletedTodo }}
    </div>
</template>

<script>
export default {
    props: {
        todos : {
            type : Array,
            required : true
        }
    },
    computed: {
        numberOfCompletedTodo() {
            return this.todos.filter(todo => todo.checked).length;
        }
    },
}
</script>

<style lang="">
    
</style>