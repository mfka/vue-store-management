import Vue from 'vue';

export const state = Vue.observable({ counter: 0 });

export const increment = () => state.counter++;
export const decrement = () => state.counter--;
