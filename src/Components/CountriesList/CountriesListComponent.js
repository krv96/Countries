import React, { useState, useEffect } from 'react';
import CountryCardComponent from '../CountryCard/CountryCardComponent';

import { Grid } from '@mui/material'; // Import the Grid component


function CountriesListComponent(props) {
  const [countries, setCountries] = useState([]); 
  
  useEffect(() => {
    return () => {

        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data));
    };
  }, []);
  return (
    <Grid container spacing={6}> 
      {countries.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={3}>
          <CountryCardComponent data={item}/>
        </Grid>
      ))}
      
    </Grid>
    
  );
}

export default CountriesListComponent;
