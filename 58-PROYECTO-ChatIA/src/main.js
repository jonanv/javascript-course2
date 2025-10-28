import './style.css'
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";

const openrouter = createOpenRouter({
    apiKey: import.meta.env.VITE_OPENROUTER_KEY
});

const form = document.querySelector('#prompt-form');
const app = document.querySelector('#app');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const prompt = document.querySelector('#prompt').value;
    
    if (prompt.trim() === '') {
        alert('La consulta no puede ir vacía');
        return;
    }

    const result = streamText({
        model: openrouter('google/gemma-3n-e4b-it:free'),
        // model: openrouter('deepseek/deepseek-chat-v3.1:free'),
        // model: openrouter('openai/gpt-oss-20b:free'),
        // model: openrouter('google/gemma-3n-e2b-it:free'),
        // model: openrouter('deepseek/deepseek-r1-0528-qwen3-8b:free'),
        // model: openrouter('qwen/qwen3-coder:free'),
        // model: openrouter('meta-llama/llama-3.3-8b-instruct:free'),
        prompt
    });

    while (app.firstChild) {
        app.removeChild(app.firstChild)    
    }

    for await (const text of result.textStream) {
        app.append(text);
    }
});