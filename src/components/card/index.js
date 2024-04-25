import React from "react";
import {
  getallCountries,
  useAllCountries,
} from "../../hooks/fetchers/countries";

const Card = () => {
  const page = 0;
  const { error, isLoading, data: countries } = useAllCountries(page);

  return (
    <div>
      <div>
        <h2>List of Countries</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul>
            {countries.map((country) => (
              <li key={country.cca3}>{country.name.common}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
