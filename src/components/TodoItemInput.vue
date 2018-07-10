<template>
  <div>
    <input type="text" v-model="inputText" placeholder="todo text" />
    <br />
    <button v-on:click="addTodo">add todo!</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      inputText: ''
    }
  },
  methods: {
    addTodo: function() {
      const item = {text: this.inputText, done: false};
      this.$store.dispatch('addTodoItem', {
        newItem: item
      }).then((resp) => {
        console.log(resp);
      });
    }
  }
}
</script>
