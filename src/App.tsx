import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from './graphql/queries';
import ContinentGroup from './components/ContinentGroup';
import './styles/App.css';

interface Country {
  code: string;
  name: string;
  emoji: string;
  continent: {
    name: string;
  };
}

function App() {
  const { loading, error, data } = useQuery<{ countries: Country[] }>(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data?.countries);

  const groupedCountries = data?.countries.reduce((acc: Record<string, Country[]>, country) => {
    const continent = country.continent.name;
    if (!acc[continent]) {
      acc[continent] = [];
    }
    acc[continent].push(country);
    return acc;
  }, {});

  return (
    <div className="App">
      {groupedCountries && Object.keys(groupedCountries).map((continent) => (
        <ContinentGroup key={continent} continent={continent} countries={groupedCountries[continent]} />
      ))}
    </div>
  );
}

export default App;
