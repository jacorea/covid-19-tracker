import React, { Component } from 'react'

//components
import { CountryPicker, Chart, Cards } from './components';
import styles from './App.module.css';

//api
import { fetchData } from './api/index';

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
    console.log(fetchedData);
    //setState
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    )
  }
}

export default App
