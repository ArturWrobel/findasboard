import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper } from "@material-ui/core/"

import styles from './styles.js'
import Map from './Map'
import Navi from './Navi'
import ArcLayer from './ArcLayers'

import dataArcLayers from './dataArcLayars.js'

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
            <Paper elevation={3} className={classes.choice} >
                <Typography variant="h5" className={classes.test}>
                    Orange office locations
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <Grid container className={classes.map} >
                    <ArcLayer data={dataArcLayers} />
                </Grid>
            </Paper>
            <Paper elevation={3}>
                <Grid container className={classes.map1} >
                    <Map />
                </Grid>
            </Paper>
            <Paper elevation={3} className={classes.zones}>
                <Typography variant="h5" className={classes.test}>
                    Another style
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
