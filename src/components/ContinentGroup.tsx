import React from 'react';
import CountryCard from './CountryCard';
import './ContinentGroup.css';

interface Country {
  code: string;
  name: string;
  emoji: string;
  continent: {
    name: string;
  };
}

interface ContinentGroupProps {
  continent: string;
  countries: Country[];
}

const ContinentGroup: React.FC<ContinentGroupProps> = ({ continent, countries }) => {
  return (
    <div className="continent-group">
      <h2>{continent}</h2>
      <div className="country-cards">
        {countries.map((country) => (
          <CountryCard key={country.code} country={country} />
        ))}
      </div>
    </div>
  );
};

export default ContinentGroup;
