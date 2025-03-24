import React, { useState } from 'react';
import { calcAge } from './utils';

export default function AgeCalculator() {
    // Stav pro uchování roku narození a věku
    const [birthYear, setBirthYear] = useState('');
    const [age, setAge] = useState<number | null>(null);

    // Funkce pro změnu hodnoty roku narození a výpočet věku
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setBirthYear(value);  // Aktualizuje rok narození
        if (value && !isNaN(Number(value))) {
            setAge(calcAge(Number(value)));  // Pokud je rok validní, vypočítá věk
        } else {
            setAge(null);  // Pokud není validní, věk nastaví na null
        }
    };

    return (
        <div>
            <label>
                Zadej rok narození:
                <input type="number" value={birthYear} onChange={handleChange} />
            </label>
            {age !== null && <p>Tvůj věk je: {age}</p>}  {/* Zobrazí věk, pokud není null */}
        </div>
    );
}
