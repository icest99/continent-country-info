import React from 'react';
import './CountryCard.css';

interface Country {
  code: string;
  name: string;
  emoji: string;
}

const CountryCard: React.FC<{ country: Country }> = ({ country }) => {
  return (
    <div className="country-card">
      <h3>{country.name}</h3>
      <span className="country-emoji">{country.emoji}</span>
    </div>
  );
};

export default CountryCard;
