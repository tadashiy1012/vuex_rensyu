<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <span>{{ item.text }}</span>
        <span>{{ ' ' }}</span>
        <span v-on:click="switchTodoDone(item.id)">
          {{ item.done ? '☑' : '□' }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    items: function() {
      return this.$store.getters.getTodoItems
    }
  },
  methods: {
    switchTodoDone: function(idx) {
      this.$store.dispatch('switchTodoDone', {
        tgtId: idx
      }).then((resp) => {
        console.log(resp);
      });
    }
  }
}
</script>