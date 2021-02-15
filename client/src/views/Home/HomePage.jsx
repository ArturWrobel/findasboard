import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Divider, Paper, Avatar } from "@material-ui/core/"

import styles from './styles.js'
import reactLogo from '../../assets/reactLogo.png'

const useStyles = makeStyles(styles)

const Home = () => {

    const classes = useStyles();

    return (
        <>

            <Paper className={classes.page} elevation={3}>

                <Grid className={classes.top}>
                    <Grid>
                        <Typography variant="h6">
                            Do we want to build solid tools and automate Finances?
                    </Typography>
                        <Typography variant="h6">
                            Are we ready to go mobile?
                    </Typography>
                    </Grid>
                </Grid>
                <Divider />

                <Grid className={classes.mid}>
                    <Grid container className={classes.title}>
                        <img alt="Artur Wróbel" src={reactLogo} className={classes.logo} />
                        <Grid>
                            <Typography variant="h5">
                                Let's try something new:
                        </Typography>
                            <Typography variant="h2">
                                REACT
                        </Typography>
                            <Typography variant="h5">
                                A JavaScript library for building user interfaces
                        </Typography>
                        </Grid>
                        <img alt="Artur Wróbel" src={reactLogo} className={classes.logo} />
                    </Grid>

                </Grid>

                <Grid className={classes.bottom}>
                    <Grid>
                        <Typography variant="p">
                            My aim is to show what can be done and encourage you to build new tools with React.{' '}
                    </Typography>
                        <Typography variant="p">
                            "It helps us create the most engaging web apps efficiently and fast with minimal coding."
                    </Typography>
                        <Typography variant="p">
                        {' '}REACT is most convenient for user interface (UI) development.
                    </Typography>
                        <Typography variant="p">
                        {' '}It will make jobs easier and faster (mobile tools with REACT Native).
                    </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default Home
