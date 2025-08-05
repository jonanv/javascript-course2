<script setup>
    import { computed, ref } from 'vue'; // la forma de manejar el estado en vue ref maneja los primitivos y reactive los objetos
    import Header from './components/Header.vue';
    import Button from './components/Button.vue';

    const MIN = 0;
    const MAX = 20000;
    const STEP = 100;
    const cantidad = ref(10000);

    const formatearDinero = computed(() => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        return formatter.format(cantidad.value);
    });

    const handleChangeDecremento = () => {
        cantidad.value = Math.max(cantidad.value - STEP, MIN);
    }

    const handleChangeIncremento = () => {
        cantidad.value = Math.min(cantidad.value + STEP, MAX);
    }
</script>

<template>
    <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
        <Header />

        <div class="flex justify-between mt-10">
            <Button 
                :operator="'-'"
                @handleClick="handleChangeDecremento"
            />
            <Button 
                :operator="'+'"
                @handleClick="handleChangeIncremento"
            />
        </div>

        <div class="my-5">
            <input 
                type="range"
                class="w-full bg-gray-500 accent-lime-500 hover:accent-lime-600"
                :min="MIN"
                :max="MAX"
                :step="STEP"
                v-model.number="cantidad"
            />

            <p class="text-center my-10 text-5xl font-extrabold text-indigo-600">{{ formatearDinero }}</p>
        </div>
    </div>
</template>
