import React, { useState, useRef, useEffect } from 'react';
import styles from './Card.module.css';
import { FaTrash, FaPalette } from 'react-icons/fa';
import ColorPalette from '../ColorPalette/ColorPalette';

const Card = ({ card, onUpdate, onDelete }) => {
  const [text, setText] = useState(card.text);
  const [color, setColor] = useState(card.color);
  const [showPalette, setShowPalette] = useState(false);
  const cardRef = useRef();

  const handleTextBlur = () => onUpdate(card.id, { text });

  const handleColorChange = (newColor) => {
    onUpdate(card.id, { color: newColor });
    setColor(newColor);
    setShowPalette(false); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (cardRef.current && !cardRef.current.contains(event.target)) {
            setShowPalette(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);


  return (
    <div ref={cardRef} className={styles.Card} style={{ backgroundColor: color }}>
      <textarea
        className={styles.CardText}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleTextBlur}
      />
      <div className={styles.CardControls}>
        <FaTrash className={styles.deleteIcon} onClick={() => onDelete(card.id)} />
        <FaPalette
          className={styles.paletteIcon}
          onClick={() => setShowPalette((prev) => !prev)}
        />
      </div>
      {showPalette && (
        <div className={styles.paletteContainer}>
          <ColorPalette onSelectColor={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default Card;
