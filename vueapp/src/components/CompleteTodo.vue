<!-- <template>
    <div>
        <h3>完了リスト</h3>
        <ul>
          <li v-for="(todo, index) in completeTodos" :key="todo">
            {{ todo }}
            <button @click="backTodo(index, todo)">戻す</button>
            <button @click="deleteTodo(index)">削除</button>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'CompleteTodo',
  props: {
    completeTodos: []
  },

  methods: {
    backTodo: function(index, todo){
      //IncompleteTodoに追加
      this.$emit('back', todo)

      //CompleteTodoから削除
      this.$emit('delete', index)
    },

    deleteTodo: function(index){
      //CompleteTodoから削除
      this.$emit('delete', index)
    },
  }
}
</script>

<style scope>

</style> -->