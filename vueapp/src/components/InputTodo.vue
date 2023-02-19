<template>
  <div>
    <v-row>
      <v-col cols="4">
        <v-text-field clearable label="入力してください" variant="outlined" v-model="todo"></v-text-field>
      </v-col>
      <v-btn @click="addTodo" rounded="lg" color="primary" >
        追加
      </v-btn>
    </v-row>
  
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
