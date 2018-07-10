<template>
  <div>
    <todo-item-list />
    <todo-item-input />
    <todo-done-clear />
  </div>
</template>
<script>
import TodoItemList from './TodoItemList.vue';
import TodoItemInput from './TodoItemInput.vue';
import TodoDoneClear from './TodoDoneClear.vue';
export default {
  components: {
    TodoItemList,
    TodoItemInput,
    TodoDoneClear
  }
}
</script>

