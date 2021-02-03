<template>
  <h1>{{ count }}</h1>
  <button @click="setCount(count - 1)">
    Decrement
  </button>
  <button @click="setCount(count + 1)">
    Increment
  </button>
</template>

<script>
import { useState } from '@/useStore';

export default {
  setup() {
    const [count, setCount] = useState(0);
    return {
      count,
      setCount,
    };
  },
};
</script>
