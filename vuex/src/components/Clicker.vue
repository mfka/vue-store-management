<template>
  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
import { incrementAction } from '@/store';

export default {
  name: "Clicker",
  methods: {
    increase: function () {
      this.$store.dispatch(incrementAction);
    },
    decrease: function () {
      this.$store.dispatch('decrementAction');
    },
  },
};
</script>