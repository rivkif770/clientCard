import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3001/flashcards',
    headers: {
        'Content-Type': 'application/json',
    },
});

