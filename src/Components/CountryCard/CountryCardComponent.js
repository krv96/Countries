import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function CountryCardComponent(props) {

  return (
    <Card >
      <CardMedia
        sx={{ height: 140 }}
        image={props.data.flags.svg}
        alt={props.data.flags.alt}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.name.common}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Population: {props.data.population}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Region: {props.data.region}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Capital: {props.data.capital}
        </Typography>
      </CardContent>
    </Card>
    
  );
}

export default CountryCardComponent;
