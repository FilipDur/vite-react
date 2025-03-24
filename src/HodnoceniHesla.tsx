// HodnoceniHesla.tsx
import React from 'react';

interface HodnoceniHeslaProps {
    password: string;
    strength: string;
}

const HodnoceniHesla: React.FC<HodnoceniHeslaProps> = ({ password, strength }) => {
    const criteria = [
        { label: 'Minimálně 8 znaků', valid: password.length >= 8 },
        { label: 'Alespoň jedno velké písmeno', valid: /[A-Z]/.test(password) },
        { label: 'Alespoň jedno číslo', valid: /\d/.test(password) },
        { label: 'Alespoň jeden speciální znak (!@#$%^&*)', valid: /[!@#$%^&*]/.test(password) },
    ];

    let progressClass = 'bg-danger';
    let progressWidth = '33%';
    if (strength === 'Střední') {
        progressClass = 'bg-warning';
        progressWidth = '66%';
    } else if (strength === 'Silné') {
        progressClass = 'bg-success';
        progressWidth = '100%';
    }

    return (
        <div className="mb-3">
            <h4>Hodnocení hesla: {strength}</h4>
            <div className="progress mb-2">
                <div
                    className={`progress-bar ${progressClass}`}
                    role="progressbar"
                    style={{ width: progressWidth }}
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                />
            </div>
            <ul>
                {criteria.map((crit, index) => (
                    <li key={index} style={{ color: crit.valid ? 'green' : 'red' }}>
                        {crit.valid ? '✔' : '✖'} {crit.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HodnoceniHesla;
