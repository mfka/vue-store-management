<template>
  <Counter></Counter>
  <Clicker></Clicker>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Counter from "./components/Counter.vue";
import Clicker from "./components/Clicker.vue";

export default defineComponent({
  name: "App",
  components: {
    Counter,
    Clicker,
  },
});
</script>