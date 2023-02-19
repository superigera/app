<template>
  <div>
    <InputTodo @add="addIncomTodo"></InputTodo>
    <IncompleteTodo :incompleteTodos=incomTodos @delete="deleteIncomTodo" @add="addCompleteTodo"></IncompleteTodo>
    <CompleteTodo :completeTodos=comTodos @delete="deletecomTodo" @back="addIncomTodo"></CompleteTodo>

    
  </div>
</template>

<script>
import InputTodo from './components/InputTodo.vue'
import IncompleteTodo from './components/IncompleteTodo.vue'
import CompleteTodo from './components/CompleteTodo.vue'

export default {
  name: 'App',
  components: {
    InputTodo,
    IncompleteTodo,
    CompleteTodo
  },

  methods: {
    addIncomTodo(value){

      //IncompleteTodoに追加する
      this.incomTodos.push(value)
    },

    deleteIncomTodo(value){

      //IncompleteTodoから削除する
      this.incomTodos.splice(value, 1)
    },

    addCompleteTodo(value){

      //completeTodoに追加する
      this.comTodos.push(value)
    },

    deletecomTodo(value){

      //completeTodoから削除する
      this.comTodos.splice(value, 1)
    }

  },

  data: () => ({
    incomTodos: [],
    comTodos: []
  }),

}
</script>

<style>

</style>
