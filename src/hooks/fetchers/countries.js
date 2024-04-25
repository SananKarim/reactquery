import axios from "axios";
import { useQuery } from "react-query";

export const getallCountries = async (page) => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response.data;
};

export const useAllCountries = (page) => {
  return useQuery(["Country"], () => getallCountries(page), { refetchInterval: 5000});
};

// export const getallCountries = async (page) => {
//   const response = await axios.get("https://restcountries.com/v3.1/all");
//   return response.data;
// };

// export const useAllCountries = (page) => {
//   return useQuery(["Country"], () => getallCountries(page));
// };
