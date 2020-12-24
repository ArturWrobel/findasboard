import React, { useEffect } from 'react';
import { Typography, CircularProgress, Container, Paper } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Chart, Sidebar } from './components';
import { Dashboard } from './views'
import { getChartData } from './store/actions/charts';

import useStyles from './styles';

const App = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChartData());
    }, [dispatch]);

    const xxx = useSelector(state => state.charts)

    console.log('...........to tu')
    console.log(xxx)
    console.log('...........')

    return (
        <Router className={classes.root}>
            <Sidebar />
            <Switch>
                <Route exact path={["/", "/Home"]} className={classes.content}>
                    <div className={classes.content}>
                        <Typography>Home Page</Typography>
                        <Chart />
                    </div>
                </Route>
                <Route exact path="/Chart" className={classes.content}>
                    <div className={classes.content}>
                        <Dashboard />
                    </div>
                </Route>
                <Route exact path="/Tables" >
                    <div className={classes.content}>
                        <Typography>Tables</Typography>
                    </div>
                </Route>
                <Route exact path="/Dashboard" >
                    <div className={classes.content}>
                        <Typography>Dashboard</Typography>
                    </div>
                </Route>
                <Route exact path="/Maps" >
                    <div className={classes.content}>
                        <Typography>Maps</Typography>
                    </div>
                </Route>
                <Route exact path="/Calculator" >
                    <div className={classes.content}>
                        <Typography>Calculator</Typography>
                    </div>
                </Route>
                <Route exact path="/Contact" >
                    <div className={classes.content}>
                        <Typography>Contact</Typography>
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
