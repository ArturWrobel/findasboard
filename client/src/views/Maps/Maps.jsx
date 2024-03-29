import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper } from "@material-ui/core/"

import styles from './styles.js'
import CitySelect from './City'
import Map from './Map'
import Zones from './Zones'
import InfoMaps from '../../components/Tooltips/InfoMaps'

const useStyles = makeStyles(styles)

const Maps = () => {
    const [choice, setChoice] = useState()
    const classes = useStyles();
    function handleChildClick(city) {
        setChoice(city);
    }

    return (
        <>
        <InfoMaps/>
            <Paper elevation={3} className={classes.title}>
                <Typography variant="h2" >
                    Maps
                </Typography>
            </Paper>
            <Paper elevation={3} className={classes.choice}>
                <Typography variant="h5" className={classes.test}>
                    Click below to choose
                </Typography>
                <Grid className={classes.button}>
                    <CitySelect onChildClick={handleChildClick} />
                </Grid>
            </Paper>
            <Paper elevation={3}>
                <Grid container className={classes.map}>
                    <Map city={choice} />
                </Grid>
            </Paper>
            <Paper elevation={3} className={classes.zones}>
                <Typography variant="h5" className={classes.test}>
                    Visualize zones
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <Grid container className={classes.map1}>
                    <Zones />
                </Grid>
            </Paper>
        </>
    )
}

export default Maps
