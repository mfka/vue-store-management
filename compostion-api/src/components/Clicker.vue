<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import { useStore } from "@/useStore";

export default {
  name: "Clicker",
  setup() {
    const { increment, decrement } = useStore();

    return {
      increment,
      decrement,
    };
  },
};
</script>