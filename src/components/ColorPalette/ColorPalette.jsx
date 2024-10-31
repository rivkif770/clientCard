import React from 'react';
import styles from './ColorPalette.module.css';

const colorPalette = ['#ff4081', '#81c784', '#64b5f6', '#ba68c8'];

const ColorPalette = ({ onSelectColor }) => {
    return (
        <div className={styles.paletteContainer}>
            {colorPalette.map((color) => (
                <div
                    key={color}
                    className={styles.colorOption}
                    style={{ backgroundColor: color }}
                    onClick={() => onSelectColor(color)}
                />
            ))}
        </div>
    );
};

export default ColorPalette;
