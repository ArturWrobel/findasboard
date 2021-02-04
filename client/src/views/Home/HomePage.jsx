import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Divider } from "@material-ui/core/"

import styles from './styles.js'
import reactLogo from '../../assets/reactLogo.jpg'

const useStyles = makeStyles(styles)

const Home = () => {

    const classes = useStyles();

    return (
        <>
            <Grid className={classes.top}>

                <Grid container className={classes.test}>
                    <Typography variant="h3">
                        Welcome to React
                </Typography>

                </Grid>
                <Grid>
                    <Typography variant="h4">
                        DNA demo
                </Typography>
                </Grid>
                <Grid>
                    <Typography variant="h6">
                        We face quickly changing environment.
                </Typography>
                    <Typography variant="h6">
                        Our organization needs tools to keep up and automate to focus on more value adding areas.
                </Typography>
                    <Typography variant="h6">
                        We have great Python experts, Power BI and Data Scientists.
                </Typography>
                </Grid>

            </Grid>
<Divider/>
            <Grid className={classes.mid}>
                <Grid>
                    <Typography variant="h5">
                        Let's try something more:
            </Typography>
                    <Typography variant="h3">
                        REACT
            </Typography>
                    <Typography variant="h5">
                        A JavaScript library for building user interfaces
            </Typography>
                </Grid>
            </Grid>


<Divider/>

            <Grid className={classes.bottom}>
                <Grid>
                    <Typography variant="h5">
                        My aim is to show You what can be done and encourage you to build new tools with React.
            </Typography>
                    <Typography variant="h5">
                        "It helps us create the most engaging web apps efficiently and fast with minimal coding."
            </Typography>
                    <Typography variant="h5">
                        REACT is most convenient for user interface (UI) development.
            </Typography>
                    <Typography variant="h5">
                        It will make jobs easier and faster.
            </Typography>
                </Grid>
            </Grid>


        </>
    )
}

export default Home
