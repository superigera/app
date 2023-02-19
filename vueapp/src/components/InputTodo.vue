<template>
  <div>
    <input type="text" placeholder="入力してください" v-model="todo">
    <button @click="addTodo">
      追加
    </button>
  </div>
</template>

<script>



export default {
  name: 'InputTodo',

  data: () => ({
    todo: ""
  }),

  methods:{
    addTodo: function(){
      //空の場合追加しない
      if(this.todo === "") return

      //IncompleteTodoに追加
      this.$emit('add', this.todo)
      this.todo = ""
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
