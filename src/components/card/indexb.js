import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://rest-countries.com/v3.1/all");
        setCountries(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <h2>List of Countries</h2>
      {loading ? (
        <p>Loading...</p>
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
