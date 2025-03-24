import React, { useState } from 'react';
import { calcAge } from './utils';

export default function AgeCalculator() {
    const [birthYear, setBirthYear] = useState('');
    const [age, setAge] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setBirthYear(value);
        if (value && !isNaN(Number(value))) {
            setAge(calcAge(Number(value)));
        } else {
            setAge(null);
        }
    };

    return (
        <div>
            <label>
                Zadej rok narození:
                <input type="number" value={birthYear} onChange={handleChange} />
            </label>
            {age !== null && <p>Tvůj věk je: {age}</p>}
        </div>
    );
}
