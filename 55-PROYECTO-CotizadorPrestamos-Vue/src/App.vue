<script setup>
    import { computed, ref, watch } from 'vue'; // la forma de manejar el estado en vue ref maneja los primitivos y reactive los objetos
    import Header from './components/Header.vue';
    import Button from './components/Button.vue';
    import { calcularTotalPagar, formatearDinero } from './helpers';

    const cantidad = ref(10000);
    const meses = ref(6);
    const total = ref(0);

    const MIN = 0;
    const MAX = 20000;
    const STEP = 100;

    watch([cantidad, meses], () => {
        total.value = calcularTotalPagar(cantidad.value, meses.value);
    }, { immediate: true });

    const pagoMensual = computed(() => {
        return total.value / meses.value;
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

            <p class="text-center my-10 text-5xl font-extrabold text-indigo-600">
                {{ formatearDinero(cantidad) }}
            </p>

            <h2 class="text-2xl font-extrabold text-gray-500 text-center">
                Elige un <span class="text-indigo-600">Plazo</span> a pagar
            </h2>

            <select 
                class="w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500 mt-5"
                :value="meses"
                v-model.number="meses">
                <option value="6">6 Meses</option>
                <option value="12">12 Meses</option>
                <option value="24">24 Meses</option>
                <option value="48">48 Meses</option>
            </select>
        </div>

        <div class="my-5 space-y-3 bg-gray-50 p-5">
            <h2 class="text-2xl font-extrabold text-gray-600 text-center">
                Resumen <span class="text-indigo-600">de pagos</span>
            </h2>

            <p class="text-xl text-gray-500 text-center font-bold">{{ meses }} Meses</p>
            <p class="text-xl text-gray-500 text-center font-bold">{{ formatearDinero(total) }} Total a pagar</p>
            <p class="text-xl text-gray-500 text-center font-bold">{{ formatearDinero(pagoMensual) }} Mensuales</p>
        </div>
    </div>
</template>
