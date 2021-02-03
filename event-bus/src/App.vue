<template>
  <div id="app">
    <Counter></Counter>
    <Clicker></Clicker>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Counter from "@/components/Counter.vue";
import Clicker from "@/components/Clicker.vue";

export default Vue.extend({
  name: "App",
  components: {
    Counter,
    Clicker,
  },
});
</script>