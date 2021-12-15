import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CountUp from 'react-countup';
import cx from 'classnames'
import styles from "./Cards.module.css";


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed){
        return 'Loading.....'
    }
//   console.log(lastupdate);
  return (
    <div className={styles.container}>
      <Grid container spacing={1} justify="center">
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.confirmed)}>
          <CardContent>
            <Typography color="textSecondary" gutterbottom>
              Confirmed
            </Typography>
            <Typography variant="h6">
            <CountUp
                 start={0}
                 end={confirmed.value}
                 duration={2.0}
                 separator=','
            />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterbottom>
              Reacovered
            </Typography>
            <Typography variant="h6"><CountUp
                 start={0}
                 end={recovered.value}
                 duration={2.0}
                 separator=','
            /></Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of Reacovered cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterbottom>
              Deaths
            </Typography>
            <Typography variant="h5"><Typography variant="h6"><CountUp
                 start={0}
                 end={deaths.value}
                 duration={2.0}
                 separator=','
            /></Typography></Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of Deaths cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
