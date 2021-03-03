import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Divider, Paper, Hidden, Popover, useTheme, useMediaQuery } from "@material-ui/core/"

import styles from './styles.js'
import reactLogo from '../../assets/reactLogo.png'

const useStyles = makeStyles(styles)

const Home = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [on, setOn] = useState(null)
    const [onMobile, setOnMobile] = useState(null)
    const classes = useStyles();

    const theme = useTheme();
    const smallPage = useMediaQuery(theme.breakpoints.up('md'))
    const smallerPage = useMediaQuery(theme.breakpoints.up('sm'))
    let footer = {
        position: 'fixed',
        bottom: '1%',
        right: '5%',
    }
    if (smallPage) {
        footer = {
            position: 'fixed',
            right: '2%',
            bottom: '2%'
        }
    }
    let top = {
        display: 'none'
    }
    if (smallerPage) {
        top = {
        }
    }

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };


    const handlePopoverOpenMobile = (event) => {
        setOnMobile(event.currentTarget);
    };

    const handlePopoverCloseMobile = () => {
        setOnMobile(null);
    };

    const open = Boolean(anchorEl);
    const openMobile = Boolean(onMobile)

    return (
        <>

            <Paper className={classes.page} elevation={3}>

                <Grid className={classes.top}
                    style={top}
                    aria-owns={open ? 'mobile' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpenMobile}
                    onMouseLeave={handlePopoverCloseMobile}>
                    <Grid>
                        <Typography variant="h6">
                            Looking for <span className={classes.orange}>solid</span>  tools and <span className={classes.orange}>automate</span>  Finances?
                        </Typography>
                        <Typography variant="h6">
                            <span className={classes.orange}>Responsive</span> {' '}
                            and {' '}
                            <span className={classes.orange}>animated</span> dashboards?
                        </Typography>
                        <Typography variant="h6">
                            Ready to go <span className={classes.orange}>mobile</span>?
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />

                <Grid className={classes.mid}
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
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
                            <img alt="Artur Wróbel" src={reactLogo} className={classes.logo} />
                        </Hidden>
                    </Grid>
                </Grid>

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
            </Paper>
            <div>
                <Popover
                    id="mouse-over-popover"
                    className={classes.popover}
                    classes={{
                        paper: classes.paper,
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography variant="h6" className={classes.center}>
                        REACT is great for user
                    </Typography>
                    <Typography variant="h6" className={classes.center}>
                        interface (UI) development.
                    </Typography>
                    <Typography>
                        {'.'}
                    </Typography>
                    <Typography variant="h6" className={classes.center}>
                        "the most engaging web apps
                    </Typography>
                    <Typography variant="h6" className={classes.center}>
                        with minimal coding"
                    </Typography>
                </Popover>
            </div>
            
            <div>
                <Popover
                    id="mobile"
                    className={classes.popover}
                    classes={{
                        paper: classes.paper,
                    }}
                    open={openMobile}
                    anchorEl={onMobile}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    onClose={handlePopoverCloseMobile}
                    disableRestoreFocus
                >
                    <Typography variant="h6">
                        Yes, we can go mobile with REACT Native.
                    </Typography>
                </Popover>
            </div>
        </>
    )
}

export default Home
