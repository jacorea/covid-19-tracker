import React from 'react'
import CountUp from 'react-countup';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

//styling
import classes from './Cards.module.css';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }, data }) => {
    let newData = [];

    for (let [key] of Object.entries(data)) {
        const message = (msg) => {
            switch (key) {
                case('confirmed'):
                    return 'Number of active cases of COVID-19';
                    break;
                case('recovered'):
                    return 'Number of recoveries from COVID-19';
                    break;
                case('deaths'):
                    return 'Number of deaths caused by COVID-19';
                    break;
                default:
                    return null;
            }
        };
        
        if(key !== "lastUpdate") {
            newData.push({
                "status": key.charAt(0).toUpperCase() + key.slice(1),
                "value": data[key].value,
                "message": message(key),
                "updatedDate": new Date(lastUpdate).toDateString(),

            })
        } 
    }


    if(!confirmed) {
        return 'loading...'
    }
  return (
    <div>
    {/* <div className={classes.container}>
        <Grid container spacing={3} justify="center">
            {newData.map((item, index) => {
                return (

                    <Grid key={index} item component={Card} xs={12} md={3} className={cx(classes.card, classes.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>{item.status}</Typography>
                            <Typography color="textSecondary" gutterBottom>
                                <CountUp start={0} end={item.value} duration={2.5} separator="," />
                            </Typography>
                            <Typography color="textSecondary">{item.updatedDate}</Typography>
                            <Typography variant="body2">{item.message}</Typography>
                        </CardContent>
                    </Grid>
                )
            })}
        </Grid>
    </div> */}
    <div className= {classes.container}>
      <Grid container spacing={3} justify="center" >
        <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.infected)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Infected</Typography>
                <Typography color="textSecondary" gutterBottom>
                    <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of active cases of COVID-19</Typography>
            </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.recovered)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                <Typography color="textSecondary" gutterBottom>
                    <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of recoveries from COVID-19</Typography>
            </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.deaths)}>
            <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                <Typography color="textSecondary" gutterBottom>
                    <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
            </CardContent>
        </Grid>
      </Grid>
    </div>
    </div>
  )
}

export default Cards

//39:57
