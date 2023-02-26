<template>
      <v-toolbar
      dark
      prominent
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Todo</v-toolbar-title>
    </v-toolbar>
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
  todos.value.splice(todo.id, 1)
}
</script>

<style>

</style>