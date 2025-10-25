import './style.css'
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

const openrouter = createOpenRouter({
    apiKey: import.meta.env.VITE_OPENROUTER_KEY
});

const form = document.querySelector('#prompt-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const prompt = document.querySelector('#prompt').value;
    
    if (prompt.trim() === '') {
        alert('La consulta no puede ir vacía');
        return;
    }

    console.log(prompt);
});