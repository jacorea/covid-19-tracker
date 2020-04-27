import React, { Component } from 'react'

//api
import { fetchData } from './api/index';

//components
import { CountryPicker, Chart, Cards } from './components';
import styles from './App.module.css';

//images
import CovidImage from './images/covid.png';

export class App extends Component {
  //don't need constructor anymore
  state = {
    data: {},
    country: '',
  }
  
  async componentDidMount() {
    const fetchedData  = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (countryName) => {
    //fetch data
    const fetchedData = await fetchData(countryName);
    //setState
    this.setState({ data: fetchedData, country: countryName });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={CovidImage} className={styles.image} alt="covid-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App
