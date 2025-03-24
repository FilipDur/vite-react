// HesloVstup.tsx
import React, { useState } from 'react';

interface HesloVstupProps {
    password: string;  // Stav pro uchování hesla
    setPassword: React.Dispatch<React.SetStateAction<string>>;  // Funkce pro nastavení hesla
}

const HesloVstup: React.FC<HesloVstupProps> = ({ password, setPassword }) => {
    const [showPassword, setShowPassword] = useState(false);  // Stav pro zobrazení/skrytí hesla

    // Funkce pro změnu hodnoty hesla
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Zadejte heslo:</label>
            <div className="input-group">
                <input
                    type={showPassword ? "text" : "password"}  // Změní typ pole podle stavu (text nebo password)
                    id="passwordInput"
                    className="form-control"
                    value={password}  // Zobrazuje aktuální hodnotu hesla
                    onChange={handleChange}  // Aktualizuje heslo při změně
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}  // Přepne zobrazení hesla
                >
                    {showPassword ? "Skrýt" : "Zobrazit"}  {/* Text tlačítka podle stavu */}
                </button>
            </div>
        </div>
    );
};

export default HesloVstup;
