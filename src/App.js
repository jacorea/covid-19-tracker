import React, { Component } from 'react'

//components
import { CountryPicker, Chart, Cards } from './components';
import styles from './App.module.css';

//api
import { fetchData } from './api/index';

export class App extends Component {
  
  async componentDidMount() {
    const data  = await fetchData();
    console.log(data);
  }


  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App
