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

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import useStyles from './styles';


export default function ClippedDrawer() {
    const classes = useStyles();

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
                    <Typography variant="h5" noWrap>
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
                        {['Home', 'Chart', 'Tables', 'Dashboard', 'Maps', 'Calculator'].map((text, index) => (
                            <ListItem
                                button key={text}
                                component={Link} to={`/${text}`}
                                className={classes.listItem}
                            >
                                <ListItemIcon>
                                    {text === 'Home' && <HomeIcon />}
                                    {text === 'Tables' && <TableChartIcon />}
                                    {text === 'Chart' && <AssessmentIcon />}
                                    {text === 'Maps' && <MapIcon />}
                                    {text === 'Dashboard' && <DashboardIcon />}
                                    {text === 'Calculator' && <DialpadIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        <ListItem button component={Link} to={'/Contact'}>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary={'Contact me'} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            
            <main className={classes.content}>
                <Toolbar />
            </main>
        </div>
    );
}
