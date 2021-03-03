import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core/"

import styles from './styles.js'
import Bump from './charts/Bump/Bump'
import BumpyLine from './charts/Bump/BumpyLine'
import Calendar from './charts/Calendar/Calendar'
import HeatMap from './charts/Calendar/HeatMap'
import Chord from './charts/Chord/Chord'
import Funnel from './charts/Chord/Funnel'

const useStyles = makeStyles(styles)

const Charts = () => {

  const classes = useStyles();

  return (
    <>
      <Paper elevation={3} className={classes.title} >
        <Typography variant="h2">
          Data visualizations
            </Typography>
      </Paper>
      <Paper elevation={3} className={classes.subTitle} >
        <Typography variant="h4">
          Rankings
            </Typography>
      </Paper>
      <Grid container className={classes.chart} >
        <Paper elevation={3} className={classes.subChart}
          xs={12} sm={6} md={3}>
          <Bump />
        </Paper>
        <Paper elevation={3} className={classes.subChart}
          xs={12} sm={6} md={3}>
          <BumpyLine />
        </Paper>
      </Grid>
      <Paper elevation={3} className={classes.subTitle} >
        <Typography variant="h4">
          Relationships
            </Typography>
      </Paper>
      <Grid container className={classes.chart} >
        <Paper elevation={3} className={classes.subChart}
          xs={12} sm={6} md={3}>
          <Chord />
        </Paper>
        <Paper elevation={3} className={classes.subChart}
          xs={12} sm={6} md={3}>
          <Funnel />
        </Paper>
      </Grid>
      <Paper elevation={3} className={classes.subTitle} >
        <Typography variant="h4">
          Calendars & HeatMaps
            </Typography>
      </Paper>
      <Grid container className={classes.chart} >
        <Paper elevation={3} className={classes.subChart}
          xs={12} sm={6} md={3}>
          <Calendar />
        </Paper>
        <Paper elevation={3} className={classes.subChart}
          xs={12} sm={6} md={3}>
          <HeatMap />
        </Paper>
      </Grid>
    </>
  )
}

export default Charts
