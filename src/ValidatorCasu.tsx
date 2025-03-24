// ValidatorCasu.tsx
import React from 'react';

interface ValidatorCasuProps {
    password: string;
    createdAt: number | null;
}

const ValidatorCasu: React.FC<ValidatorCasuProps> = ({ password, createdAt }) => {
    let message = '';
    if (password && createdAt) {
        const elapsed = Date.now() - createdAt;
        if (elapsed < 5000) {
            message = 'Heslo bylo zadáno příliš rychle!';
        } else {
            message = 'Čas zadání hesla je v pořádku.';
        }
    }
    return (
        <div className="mb-3">
            <h5>Časová validace hesla:</h5>
            <p style={{ color: message.includes('příliš rychle') ? 'red' : 'green' }}>{message}</p>
        </div>
    );
};

export default ValidatorCasu;
