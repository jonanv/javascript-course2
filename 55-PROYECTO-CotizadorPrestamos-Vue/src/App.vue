<script setup>
    import { ref, reactive } from 'vue'; // la forma de manejar el estado en vue ref maneja los primitivos y reactive los objetos
    import Header from './components/Header.vue';

    const cantidad = ref(10000);
    const state = reactive({
        cantidad: 0
    });

    console.log(cantidad.value);
    console.log(state.cantidad);
    
    

    function handleChange(e) {
        cantidad.value = Number(e.target.value);
    }
</script>

<template>
    <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
        <Header />

        <div class="my-5">
            <input 
                type="range"
                class="w-full bg-gray-500 accent-lime-500 hover:accent-lime-600"
                v-on:input="handleChange"
                min="0"
                max="20000"
                step="100"
                value="10000"
            />

            {{ cantidad }}
        </div>
    </div>
</template>
