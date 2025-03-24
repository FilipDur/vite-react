// HesloVstup.tsx
import React, { useState } from 'react';

interface HesloVstupProps {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const HesloVstup: React.FC<HesloVstupProps> = ({ password, setPassword }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Zadejte heslo:</label>
            <div className="input-group">
                <input
                    type={showPassword ? "text" : "password"}
                    id="passwordInput"
                    className="form-control"
                    value={password}
                    onChange={handleChange}
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? "Skrýt" : "Zobrazit"}
                </button>
            </div>
        </div>
    );
};

export default HesloVstup;
