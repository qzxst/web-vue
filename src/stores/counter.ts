import {computed, ref} from "vue";
import {defineStore} from "pinia";

export const useCounterStore = defineStore("counter", () => {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);

    function increment() {
        count.value++;
    }

    function decrement() {
        if (count.value > 0) {
            count.value--;
        }
    }

    function ng() {

    }

    return {count, doubleCount, increment, decrement};
});
