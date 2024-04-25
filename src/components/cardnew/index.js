import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  // const response = await axios.get("https://restcountries.com/v3.1/all");
  // setCountries(response.data);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    
    fetchCountries();
  }, []);

  return (
    <div>
      <h2>List of Countries</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
