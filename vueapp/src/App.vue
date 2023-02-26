<template>
  <InputTodo @add="addTodo" />
  <managementTodo @delete = "deleteTodo" :manageTodos=todos />
</template>

<script setup>
import { ref } from 'vue'
import InputTodo from './components/InputTodo.vue'
import managementTodo from './components/managementTodo.vue';

const todos = ref([])
let id = 0

function addTodo(todo){
  todos.value.push({id: id++, text:todo, done:false})
}

function deleteTodo(todo){
  todos.value.splice(todo, 1)
}
</script>

<style>

</style>