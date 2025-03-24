// ValidatorSekvenceZnaku.tsx
import React from 'react';

interface ValidatorSekvenceZnakuProps {
    password: string;
}

const ValidatorSekvenceZnaku: React.FC<ValidatorSekvenceZnakuProps> = ({ password }) => {
    const isValidSequence = (seq: string): boolean => {
        return /[a-z]/.test(seq) && /[A-Z]/.test(seq) && /\d/.test(seq) && /[!@#$%^&*]/.test(seq);
    };

    let validCount = 0;
    for (let i = 0; i <= password.length - 4; i++) {
        const sub = password.substring(i, i + 4);
        if (isValidSequence(sub)) {
            validCount++;
        }
    }

    return (
        <div className="mb-3">
            <h5>Validace sekvence znaků:</h5>
            {validCount > 0 ? (
                <p style={{ color: 'green' }}>Nalezeno {validCount} validních sekvencí!</p>
            ) : (
                <p style={{ color: 'red' }}>Nebyly nalezeny validní sekvence (alespoň 1 malý, 1 velký, 1 číslo a 1 speciální znak za sebou).</p>
            )}
        </div>
    );
};

export default ValidatorSekvenceZnaku;
