import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Divider, Paper, Hidden, Popover } from "@material-ui/core/"

import styles from './styles.js'
import reactLogo from '../../assets/reactLogo.png'
import InfoTooltipHome from '../../components/Tooltips/InfoHome'
import ReactTooltip from '../../components/Tooltips/ReactTooltip'


const useStyles = makeStyles(styles)

const Home = () => {
    const classes = useStyles();

    return (
        <>
            <InfoTooltipHome />

            <ReactTooltip
                top="Yes, we can build a mobile app"
                comment="with nearly the same features">
                <Grid className={classes.top}>
                    <Grid>
                        <Typography variant="h6">
                            Looking for <span className={classes.orange}>solid</span>  tools and <span className={classes.orange}>automate</span>  Finances?
                        </Typography>
                        <Typography variant="h6">
                            <span className={classes.orange}>Interactive</span> {' '}
                            and {' '}
                            <span className={classes.orange}>animated</span> dashboards?
                        </Typography>
                        <Typography variant="h6">
                            Ready to go <span className={classes.orange}>mobile</span>?
                        </Typography>
                    </Grid>
                </Grid>
            </ReactTooltip>
            <Paper className={classes.page} elevation={3}>

                <Divider />
                <ReactTooltip
                    top="Reactify your work and build"
                    comment='"the most engaging web apps with minimal coding"'>
                    <Grid className={classes.mid}
                    >
                        <Grid container className={classes.title}>
                            <Hidden smDown>
                                <img alt="Artur Wróbel" src={reactLogo} className={classes.logo} />
                            </Hidden>
                            <Grid>
                                <Typography variant="h2">
                                    REACT
                        </Typography>
                                <Typography variant="h5">
                                    A JavaScript library for building user interfaces
                        </Typography>
                            </Grid>
                            <Hidden smDown>
                                <img alt="React Logo" src={reactLogo} className={classes.logo} />
                            </Hidden>
                        </Grid>
                    </Grid>
                </ReactTooltip>

                <ReactTooltip
                    top="Please play with it"
                    comment="and wonder, if you could simplify workflow for your convenience">
                    <Grid className={classes.bottom}>
                        <Grid className={classes.center}>
                            <Typography variant="h6">
                                Have a look
                        </Typography>
                            <Typography variant="h6">
                                what <span className={classes.orange}>we can </span>do
                        </Typography>
                            <Typography variant="h6">
                                together
                        </Typography>
                        </Grid>
                    </Grid>
                </ReactTooltip>
            </Paper>
        </>
    )
}

export default Home
