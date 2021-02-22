import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper } from "@material-ui/core/"

import styles from './styles.js'
import CitySelect from './City'
import Map from './Map'


const useStyles = makeStyles(styles)

const data = {
    'Paris': {
        position: [48.83337461170715, 2.293775616200383],
        address: 'Paseo Club Deportivo 12'

    },
    'Warsaw': {
        position: [52.20876739031568, 20.94590095676287],
        address: 'Warszawa aleje'
    },
    'Madrid': {
        position: [40.41997355199679, -3.8004563630874704],
        address: 'Madryckie aleje'
    }
}

const Maps = () => {
    const [city, setCity] = useState("Warsaw")
    const classes = useStyles();
    function handleChildClick(city) {
        setCity(city);
      }
    return (
        <>
            <Paper elevation={3} className={classes.title}>
                <Typography variant="h2" >
                    Maps 
                    </Typography>
            </Paper>
            <Paper elevation={3} className={classes.choice}>
                <Typography variant="h5" className={classes.test}>
                    Click below to chose
                </Typography>
                <Grid className={classes.button}>
                <CitySelect city = {city}  onChildClick={handleChildClick}/>
                </Grid>
            </Paper>
            <Paper elevation={3}>
                <Grid container className={classes.map}>
                    <Map data={data} />
                </Grid>
            </Paper>
        </>
    )
}

export default Maps
