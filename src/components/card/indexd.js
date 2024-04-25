import React from "react";
import { useAllCountries } from "../../hooks/fetchers/countries";

const indexd = () => {
 const{data,isLoading,error}= useAllCountries(0);
  return <div>
    
  </div>;
};

export default indexd;
