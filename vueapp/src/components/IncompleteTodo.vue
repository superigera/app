<!-- <template>
    <div>
        <h3>未完了リスト</h3>
        <ul>
          <li v-for="(todo, index) in incompleteTodos" :key="todo">
            {{ todo }}
            <button @click="moveCompleteTodo(index, todo)">完了</button>
            <button @click="deleteTodo(index)">削除</button>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'incomplete',
  props: {
    incompleteTodos: [],
  },

  methods:{
    moveCompleteTodo: function(index,todo){
      //CompleteTodoに追加
      this.$emit('add', todo)

      //IncompleteTodoから削除
      this.$emit('delete', index)
    },

    deleteTodo: function(index){
      
      //IncompleteTodoから削除
      this.$emit('delete', index)
    }
  },

  data: ()=> ({
    completeTodo: []
  })
}
</script>

<style scope>
</style> -->