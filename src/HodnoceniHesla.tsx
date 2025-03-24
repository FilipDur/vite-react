// HodnoceniHesla.tsx
import React from 'react';

interface HodnoceniHeslaProps {
    password: string;  // Heslo, které se hodnotí
    strength: string;  // Síla hesla (např. 'Slabé', 'Střední', 'Silné')
}

const HodnoceniHesla: React.FC<HodnoceniHeslaProps> = ({ password, strength }) => {
    // Kritéria pro hodnocení hesla
    const criteria = [
        { label: 'Minimálně 8 znaků', valid: password.length >= 8 },  // Délka hesla
        { label: 'Alespoň jedno velké písmeno', valid: /[A-Z]/.test(password) },  // Velká písmena
        { label: 'Alespoň jedno číslo', valid: /\d/.test(password) },  // Číslice
        { label: 'Alespoň jeden speciální znak (!@#$%^&*)', valid: /[!@#$%^&*]/.test(password) },  // Speciální znak
    ];

    // Nastavení třídy a šířky pro indikátor síly hesla
    let progressClass = 'bg-danger';
    let progressWidth = '33%';
    if (strength === 'Střední') {
        progressClass = 'bg-warning';  // Střední síla - žlutá
        progressWidth = '66%';
    } else if (strength === 'Silné') {
        progressClass = 'bg-success';  // Silné heslo - zelené
        progressWidth = '100%';
    }

    return (
        <div className="mb-3">
            <h4>Hodnocení hesla: {strength}</h4>
            {/* Zobrazení progress baru podle síly hesla */}
            <div className="progress mb-2">
                <div
                    className={`progress-bar ${progressClass}`}  // Třída podle síly hesla
                    role="progressbar"
                    style={{ width: progressWidth }}  // Šířka progress baru
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                />
            </div>
            {/* Seznam kritérií pro hodnocení */}
            <ul>
                {criteria.map((crit, index) => (
                    <li key={index} style={{ color: crit.valid ? 'green' : 'red' }}>
                        {crit.valid ? '✔' : '✖'} {crit.label}  {/* ✔ pro splněné, ✖ pro nesplněné */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HodnoceniHesla;
