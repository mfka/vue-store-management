<template>
  <h1>{{ counter }}</h1>
</template>

<script>
export default {
  name: "Counter",
  computed: {
    counter() {
      return this.$store.getters.counter;
    },
  },
};
</script>

<style>
</style>