import React, {useState, useEffect } from 'react'
import { FormControl,NativeSelect } from '@material-ui/core';

import { fetchCountries } from '../../api';
import classes from './CountryPicker.module.css';

//NOTE: instead of just passing props will destructure props to simplify code

const CountryPicker = ({ handleCountryChange }) => {

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
      <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((countryName, i)=><option key={i} value={countryName}>{countryName}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
