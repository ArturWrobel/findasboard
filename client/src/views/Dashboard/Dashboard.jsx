import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core/"

import { CardBar } from '../../components'
import styles from './styles.js'

const useStyles = makeStyles(styles)

const Dashboard = () => {

    const classes = useStyles();

    return (
        <>
        <Grid container className={classes.containerBars}>
        <Grid container className={classes.containerCharts}>

            <Grid item xs={12} sm={6} md={3}
            className={classes.routes}
            >
                <CardBar/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}
            className={classes.routes1}
            >
                                <CardBar/>
            </Grid>
            </Grid>

            <Grid container className={classes.containerCharts}>

            <Grid item xs={12} sm={6} md={3}
            className={classes.routes}
            >
                <Typography variant="h3">
                    Component
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}
            className={classes.routes1}
            >
                <Typography variant="h3">
                    Component
                </Typography>
            </Grid>
            </Grid>
        </Grid>

        <Grid container className={classes.containerCharts}>
            <Grid item xs={12} sm={6} md={3}
            className={classes.routes}
            >
                <Typography variant="h3">
                    Component
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}
            className={classes.routes1}
            >
                <Typography variant="h3">
                    Component
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}
            className={classes.routes}
            >
                <Typography variant="h3">
                    Component
                </Typography>
            </Grid>
            
        </Grid>
        
        <Grid container className={classes.containerTables}>
            <Grid item xs={12} sm={6} md={3}
            className={classes.routes}
            >
                <Typography variant="h3">
                    Component
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}
            className={classes.routes1}
            >
                <Typography variant="h3">
                    Component
                </Typography>
            </Grid>            
        </Grid>
        </>
    )
}

export default Dashboard
