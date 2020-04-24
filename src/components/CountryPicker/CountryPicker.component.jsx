import React, {useState, useEffect } from 'react'
import { FormControl,NativeSelect } from '@material-ui/core';

import { fetchCountries } from '../../api';
import classes from './CountryPicker.module.css';

const CountryPicker = () => {

  //initializing and setting state
  const [fetchedCountries, setFetchedCountries] = useState([]);
  
  //useEffect
  useEffect(() => {
    const fetchedAPI = async () => {
      setFetchedCountries(await fetchCountries());
    }
    fetchedAPI();
  }, [setFetchedCountries])

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect>
        <option value="global">Global</option>
        {fetchedCountries.map((countryName, i)=><option key={i} value={countryName}>{countryName}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
