import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core/"

import styles from './styles.js'

const useStyles = makeStyles(styles)

const About = () => {

    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.test}>
                <Typography variant="h2">
                    Project mission
                </Typography>
            </Grid>

            <Grid container className={classes.subtitle}>
                <Grid>
                    <Typography variant="h4">
                        Help to <span className={classes.orange}>understand</span>  and lead to <span className={classes.orange}>change</span>
                    </Typography>
                    <Typography variant="h6" className={classes.subtitle}>
                        Digitalization can be <strong>dynamic</strong>  and <strong>interactive</strong>.
                    </Typography>
                    <Typography variant="h6">
                        We can show you how to do it.
                    </Typography>
                    <Grid className={classes.grid}>
                        <Typography variant="h6" className={classes.text}>
                            In this demo, we show what can be done to make our life easier.
                            New tools (like REACT or REACT Native for mobile apps) could help solve problems,
                            digitalize our processes or just make things more engaging, look prettier.
                            Some of us wonder where to start. Here you go! We presented here some dashboards, visualizations,
                            or functions which can apply to your area. There is lots more to show. Let's discuss it and start refreshing our processes,
                            presentations, or make our life easier with repetitive things.
                    </Typography>
                    </Grid>
                    <Grid className={classes.grid1}>
                        <Typography>
                            REACT is "a JavaScript library for building user interfaces".
                    </Typography>
                    <Typography>
                            It was created and implemented initially on Facebook.
                    </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid >

            </Grid>
        </>
    )
}

export default About
