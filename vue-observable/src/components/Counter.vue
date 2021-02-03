<template>
  <h1>{{ counter }}</h1>
</template>

<script>
import { state } from "@/store";

export default {
  name: "Counter",
  computed: {
    counter() {
      return state.counter;
    },
  },
};
</script>

<style>
</style>