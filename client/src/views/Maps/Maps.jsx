import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper } from "@material-ui/core/"

import styles from './styles.js'
import CitySelect from './City'
import Map from './Map'
import Zones from './Zones'
import ArcLayer from './ArcLayers'

const useStyles = makeStyles(styles)

const Maps = () => {
    const [choice, setChoice] = useState()
    const classes = useStyles();
    function handleChildClick(city) {
        setChoice(city);
    }
    const data = [{
        inbound: 72633,
        outbound: 74735,
        from: {
            name: '19th St. Oakland (19TH)',
            coordinates: [-100.269029, 50.80787]
        },
        to: {
            name: '12th St. Oakland City Center (12TH)',
            coordinates: [-122.271604, 37.803664]
        }},
        {
            inbound: 72633,
            outbound: 74735,
            from: {
                name: '19th St. Oakland (19TH)',
                coordinates: [-88.269029, 11.80787]
            },
            to: {
                name: '12th St. Oakland City Center (12TH)',
                coordinates: [-122.271604, 37.803664]
            }}
    ]
    return (
        <>
        <Paper elevation={3}>
                <Grid container className={classes.map}>
                    <ArcLayer data = {data}/>
                </Grid>
            </Paper>



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
