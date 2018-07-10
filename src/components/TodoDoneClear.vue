<template>
  <div>
    <button v-on:click="clear">done todo clear!</button>
  </div>
</template>
<script>
export default {
  methods: {
    clear: function() {
      const doneItemIds = this.$store.getters.getDoneItem.map((elm) => elm.id);
      console.log(doneItemIds);
      this.$store.dispatch('clearDoneTodoItem', {tgtIds: doneItemIds}).then((resp) => {
        console.log(resp);
      });
    }
  }
}
</script>

