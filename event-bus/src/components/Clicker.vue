<template>
  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
import { EventBus, Events } from "@/eventBus";

export default {
  name: "Clicker",
  data() {
    return {
      clicked: 0,
    };
  },
  methods: {
    increase: function () {
      EventBus.$emit(Events.CLICKED, ++this.clicked);
    },
    decrease: function () {
      EventBus.$emit(Events.CLICKED, --this.clicked);
    },
  },
};
</script>