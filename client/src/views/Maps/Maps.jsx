import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core/"
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import styles from './styles.js'

const useStyles = makeStyles(styles)

const Maps = () => {

    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.test}>
                <Typography variant="h3">
                    Maps...
                </Typography>
            </Grid>
            {/* <div id="mapid"></div>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
                </Marker>
            </MapContainer> */}
        </>
    )
}

export default Maps
