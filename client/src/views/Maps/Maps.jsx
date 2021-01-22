import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core/"

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
        </>
    )
}

export default Maps
