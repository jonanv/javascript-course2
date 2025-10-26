import './style.css'
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";

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

    const result = generateText({
        model: openrouter('deepseek/deepseek-chat-v3.1:free'),
        model: openrouter('openai/gpt-oss-20b:free'),
        model: openrouter('google/gemma-3n-e2b-it:free'),
        model: openrouter('deepseek/deepseek-r1-0528-qwen3-8b:free'),
        model: openrouter('qwen/qwen3-coder:free'),
        model: openrouter('meta-llama/llama-3.3-8b-instruct:free'),
        prompt
    });
});