<template>
  <h1>{{ counter }}</h1>
</template>

<script>
import { EventBus, Events } from "@/eventBus";

export default {
  name: "Counter",
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {
    EventBus.$on(Events.CLICKED, (data) => {
      this.counter = data;
    });
  },
};
</script>

<style>
</style>