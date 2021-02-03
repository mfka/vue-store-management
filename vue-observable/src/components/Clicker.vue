<template>
  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
import { increment, decrement } from '@/store';

export default {
  name: "Clicker",
  methods: {
    increase: function () {
      increment();
    },
    decrease: function () {
      decrement();
    },
  },
};
</script>