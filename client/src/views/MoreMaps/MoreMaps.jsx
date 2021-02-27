import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper } from "@material-ui/core/"

import styles from './styles.js'
import Map from './Map'
import Navi from './Navi'

const useStyles = makeStyles(styles)

const MoreMaps = () => {

    const classes = useStyles();

    return (
        <>
            <Paper elevation={3} className={classes.title}>
                <Typography variant="h3" >
                    More custom maps
                </Typography>
            </Paper>
            <Paper elevation={3} className={classes.choice}>
                <Typography variant="h5" className={classes.test}>
                    Orange office locations
                </Typography>
                <Grid className={classes.button}>
                    {/* <CitySelect onChildClick={handleChildClick} /> */}
                </Grid>
            </Paper>
            <Paper elevation={3}>
                <Grid container className={classes.map}>
                    {/* <Map city={choice} /> */}
                    <Map />
                </Grid>
            </Paper>
            <Paper elevation={3} className={classes.zones}>
                <Typography variant="h5" className={classes.test}>
                    Another (Navigation) style
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <Grid container className={classes.map1}>
                    <Navi />
                </Grid>
            </Paper>
        </>
    )
}

export default MoreMaps
