import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core/"

import styles from './styles.js'
import Bump from './charts/Bump'
import BumpyLine from './charts/BumpyLine'

const useStyles = makeStyles(styles)

const Charts = () => {

  const classes = useStyles();

  return (
    <>
      <Paper elevation={3} className={classes.title}>
        <Typography variant="h2">
          Charts examples
            </Typography>
      </Paper>
      <Paper elevation={3}>
        <Grid container className={classes.chart}>
          <Paper elevation={3}>
            
          </Paper>
          <Grid style={{ 'width': '50%', 'height' : '100%'}}>
            <Bump />
          </Grid>
          <Grid style={{ 'width': '50%', 'height' : '100%'}}>
            <BumpyLine />
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={3}>
        <Grid container className={classes.chart}>
          <Typography variant="h1" container>
            xxx
                    </Typography>
        </Grid>
      </Paper>
      <Paper elevation={3}>
        <Grid container className={classes.chart}>
          <Typography variant="h1" container>
            xxx
                    </Typography>
        </Grid>
      </Paper>
    </>
  )
}

export default Charts
