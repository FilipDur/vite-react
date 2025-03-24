// ValidatorCasu.tsx
import React from 'react';

interface ValidatorCasuProps {
    password: string;  // Heslo, které se hodnotí
    createdAt: number | null;  // Čas, kdy bylo heslo zadáno (timestamp)
}

const ValidatorCasu: React.FC<ValidatorCasuProps> = ({ password, createdAt }) => {
    let message = '';  // Zpráva pro uživatele

    // Pokud je heslo a čas zadání platný, pokračuj v validaci
    if (password && createdAt) {
        const elapsed = Date.now() - createdAt;  // Vypočítá uplynulý čas od zadání hesla
        if (elapsed < 5000) {  // Pokud je čas zadání menší než 5 sekund
            message = 'Heslo bylo zadáno příliš rychle!';  // Příliš rychlé zadání hesla
        } else {
            message = 'Čas zadání hesla je v pořádku.';  // Čas zadání je přijatelný
        }
    }

    return (
        <div className="mb-3">
            <h5>Časová validace hesla:</h5>
            {/* Zobrazení zprávy s příslušnou barvou */}
            <p style={{ color: message.includes('příliš rychle') ? 'red' : 'green' }}>{message}</p>
        </div>
    );
};

export default ValidatorCasu;
