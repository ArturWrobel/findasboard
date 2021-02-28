import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core/"

import styles from './styles.js'

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
    </>
  )
}

export default Charts
