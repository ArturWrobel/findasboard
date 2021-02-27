import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core/"

import styles from './styles.js'

const useStyles = makeStyles(styles)

const Dashboard = () => {

    const classes = useStyles();

    return (
        <>
        <Paper elevation={3} className={classes.title}>
            <Typography variant="h2">
                Test
            </Typography>
        </Paper>
        </>
    )
}

export default Dashboard
