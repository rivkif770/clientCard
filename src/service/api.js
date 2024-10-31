import { api } from './axios'

export const fetchCards = async () => {
    const response = await api.get();
    return response.data;
};

export const addCard = async (newCard) => {
    const response = await api.post('/', newCard);
    return response.data;
};

export const updateCard = async (id, updatedCard) => {
    const response = await api.patch(`/${id}`, { ...updatedCard });
    return response.data;
};

export const deleteCard = async (id) => {
    await api.delete(`/${id}`);
};
