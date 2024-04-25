import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
                await new Promise(resolve => setTimeout(resolve, 4000));
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setError("Error fetching countries. Please try again later.");
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchCountries();
    }, 4000);
  }, []);

  return (
    <div>
      <h2>List of Countries</h2>
      {loading ? (
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
  );
};

export default CountryList;
