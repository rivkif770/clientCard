import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { fetchCards, addCard, updateCard, deleteCard } from '../../service/api';
import styles from './CardList.module.css';

const CardList = () => {
    const [cards, setCards] = useState([]);

    const loadCards = async () => {
        const data = await fetchCards();
        setCards(data);
    };

    useEffect(() => {
        loadCards();
    }, []);

    const handleAddCard = async () => {
        const addedCard = await addCard({ text: 'New Card', color: '#ff4081' });
        setCards((prevCards) => [...prevCards, addedCard]);
    };

    const handleUpdateCard = async (id, updatedCard) => {
        await updateCard(id, updatedCard);
    };

    const handleDeleteCard = async (id) => {
        await deleteCard(id);
        setCards((prevCards) => prevCards.filter(card => card.id !== id));
    };

    return (
        <div className={styles.cards_list}>
            {cards.map(card => (
                <Card
                    key={card.id}
                    card={card}
                    onUpdate={handleUpdateCard}
                    onDelete={() => handleDeleteCard(card.id)}
                />
            ))}
            <div>
                <button onClick={handleAddCard} className={styles.add_card}>+</button>
            </div>
        </div>
    );

};

export default CardList;
