<template>
  <h1>{{ counter }}</h1>
</template>

<script>
import { useStore } from "@/useStore";

export default {
  name: "Counter",
  setup() {
    const { counter } = useStore();
    return {
      counter,
    };
  },
};
</script>

<style>
</style>