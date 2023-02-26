<template>
    <h3>未完了リスト</h3>
    <v-sheet rounded :height="200" :width="auto" color="info">
        <ul>
            <li v-for="todo in manageTodos" :key="todo.id">
                <p v-if="todo.done == false">
                    {{ "・" + todo.text }}
                    <v-btn @click = "completeTodo(todo)" rounded="lg" color="#3F51B5" style="color: #FFFFFF;">完了</v-btn>
                    <v-btn @click = "deleteTodo(todo)" rounded="lg" color="#3F51B5" style="color: #FFFFFF;">削除</v-btn>
                </p>
            </li>
        </ul>
    </v-sheet>
    <h3>完了リスト</h3>
    <v-sheet rounded :height="200" :width="auto" color="info">
        <ul>
            <li v-for="todo in manageTodos" :key="todo.id">
                <p v-if="todo.done == true">
                    {{ "・" + todo.text }}
                    <v-btn @click = "backTodo(todo)" rounded="lg" color="#3F51B5" style="color: #FFFFFF;">戻す</v-btn>
                    <v-btn @click = "deleteTodo(todo)" rounded="lg" color="#3F51B5" style="color: #FFFFFF;">削除</v-btn>
                </p>
            </li>
        </ul>
    </v-sheet>
</template>

<script setup>
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
    emit('delete', todo)
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
