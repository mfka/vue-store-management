import { ref } from "vue";

const counter = ref(0);

export const useStore = () => {

    const increment = () => ++counter.value;

    const decrement = () => --counter.value;

    return {
        increment,
        decrement,
        counter,
    }
}