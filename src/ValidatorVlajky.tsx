// ValidatorVlajky.tsx
import React, { useState, useEffect } from 'react';

interface ValidatorVlajkyProps {
    password: string;  // Heslo, které se validuje
}

// Seznam všech zkratek zemí
const countries = [
    "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW",
    "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN",
    "ZA", "ZM", "ZW"
];

const ValidatorVlajky: React.FC<ValidatorVlajkyProps> = ({ password }) => {
    const [selectedCountry, setSelectedCountry] = useState<string>('');  // Stavy pro náhodně vybranou zemi

    // Použití useEffect pro náhodný výběr země při načtení komponenty
    useEffect(() => {
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];  // Vybere náhodnou zemi
        setSelectedCountry(randomCountry);  // Nastaví vybranou zemi
    }, []);

    // Zkontroluje, zda heslo obsahuje zkratku vybrané země
    const isValid = password.toLowerCase().includes(selectedCountry.toLowerCase());

    return (
        <div className="mb-3">
            <h5>Validace zkratky země:</h5>
            {selectedCountry && (  // Pokud je vybraná země
                <div>
                    <p>Zadané heslo musí obsahovat zkratku země</p>
                    {/* Zobrazení vlajky země */}
                    <img
                        src={`https://flagsapi.com/${selectedCountry}/flat/64.png`}  // URL pro vlajku
                        alt={`Vlajka ${selectedCountry}`}
                        style={{ width: '50px', height: 'auto' }}
                    />
                    {/* Zobrazení výsledku validace */}
                    <p style={{ color: isValid ? 'green' : 'red' }}>
                        {isValid ? 'Zkratka obsažena!' : 'Heslo neobsahuje požadovanou zkratku.'}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ValidatorVlajky;
