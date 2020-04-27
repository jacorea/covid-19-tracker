import React, { useEffect, useState } from 'react'
import { fetchedDailyData } from '../../api';

//packages
import { Line, Bar } from 'react-chartjs-2';

import classes from './Chart.module.css';


const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  //USED TO SET STATE
  const [dailyData, setDailyData] = useState([]);

  useEffect(()=> {
    const fetchedAPI = async () => {
      // const dailyData = await fetchedDailyData();
      //used to set the state sort of like this.setState({})
      setDailyData(await fetchedDailyData());
    }
    fetchedAPI(); //calling our function populates our dailyData
  }, [])

  const lineChart = (
    dailyData.length ? (<Line 
      data={{
        labels: dailyData.map(({ date }) => date ),
        datasets: [{
          data: dailyData.map(({ confirmed}) => confirmed),
          label: 'Infected',
          borderColor: '#3333ff',
          fill: true,
        },
        {
          data: dailyData.map(({ deaths }) => deaths ),
          label: 'Deaths',
          borderColor: 'rgba(255,0,0,1.0)',
          backgroundColor: 'rgba(255,0,0,0.50)',
          fill: true,
        }]
      }}
    />) : null
  )

  //display for country specific}
  const barChart = (
    confirmed && (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [{
            label: 'People',
            backgroundColor: [
              'rgba(0,0,255,0.5)',
              'rgba(0,255,0,0.5)',
              'rgba(255,0,0,0.5)',
              ],
            data: [ confirmed.value, recovered.value, deaths.value]
          }]
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `current state in ${country}`}
        }}
      />
    )
  )

  return (
    <div className={classes.container}>
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart
