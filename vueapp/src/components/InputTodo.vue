<template>
  <v-row class="pa-4">
    <v-col cols="4">
      <v-text-field clearable label="入力してください" variant="outlined" v-model="todo"></v-text-field>
    </v-col>
    <v-btn @click="addTodo" rounded="lg" color="#3F51B5" style="color: #FFFFFF;">
      追加
    </v-btn>
  </v-row>
</template>

<script setup>
import { ref } from 'vue';
const todo = ref("")
const emit = defineEmits(['add'])

function addTodo(){
  //空の場合追加しない
  if(todo.value === "") return

  emit('add', todo.value)
  todo.value = ""

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
