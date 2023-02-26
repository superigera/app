<template>
    <h3>未完了リスト</h3>
    <ul>
        <li v-for="todo in manageTodos" :key="todo">
        <p v-if="todo.done == false">
            {{ todo.text }}
            <button @click = "completeTodo(todo)">完了</button>
            <button @click = "deleteTodo(todo)">削除</button>
        </p>
        </li>
    </ul>

    <ul>
        <h3>完了リスト</h3>
        <li v-for="todo in manageTodos" :key="todo">
        <p v-if="todo.done == true">
            {{ todo.text }}
            <button @click = "backTodo(todo)">戻す</button>
            <button @click = "deleteTodo(todo)">削除</button>
        </p>
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['delete'])

const props = defineProps({
    manageTodos: []
})

//完了ボタン
function completeTodo(todo){
    todo.done = true
}

//戻すボタン
function backTodo(todo){
    todo.done = false
}

//削除ボタン
function deleteTodo(todo){
    emit('delete', todo.id)
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
