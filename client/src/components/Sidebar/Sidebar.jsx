import React from 'react';
import {
    Drawer, AppBar, CssBaseline, Toolbar, List,
    Typography, Divider, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import TableChartIcon from '@material-ui/icons/TableChart';
import MapIcon from '@material-ui/icons/Map';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DialpadIcon from '@material-ui/icons/Dialpad';
import InfoIcon from '@material-ui/icons/Info';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import useStyles from './styles';


export default function ClippedDrawer() {
    const classes = useStyles();
    const email = "artur.wrobel@orange.com"
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Link to="/" >
                        <img src={logo}
                            alt="logo"
                            height="50px"
                            className={classes.image} />
                    </Link>
                    <Typography variant="h5" noWrap className={classes.titleSidebar}>
                        Orange Finance Team
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {['Home', 'Dashboard', 'Calculator', 'Tables', 'Maps', 'Visualizations', 'MoreMaps'].map((text, index) => (
                            <ListItem
                                button key={text}
                                component={Link} to={`/${text}`}
                                className={classes.listItem}
                            >
                                <ListItemIcon>
                                    {text === 'Home' && <HomeIcon />}
                                    {text === 'Tables' && <TableChartIcon />}
                                    {text === 'Visualizations' && <AssessmentIcon />}
                                    {text === 'Maps' && <MapIcon />}
                                    {text === 'MoreMaps' && <MapIcon />}
                                    {text === 'Dashboard' && <DashboardIcon />}
                                    {text === 'Calculator' && <DialpadIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider style={{"margin-top": '50px'}}/>
                    <List>
                    <ListItem button component={Link} to={'/About'}>
                            <ListItemIcon><InfoIcon /></ListItemIcon>
                            <ListItemText primary={'About'} />
                        </ListItem>
                        <ListItem button component={Link} to={'/Contact'}>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary={'Contact me'} />
                        </ListItem>
                    </List>
                    <div className={classes.bottomDrawer}>
                        <Typography>
                            <a className={classes.name} href={`mailto:${email}`}>Artur Wróbel<sup>©</sup></a>
                        </Typography>
                    </div>
                </div>
            </Drawer>

            <main className={classes.content}>
                <Toolbar />
            </main>
        </div>
    );
}
