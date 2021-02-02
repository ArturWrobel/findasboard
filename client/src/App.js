import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Sidebar } from './components';
import { Contact, Dashboard, Calculator, Charts, HomePage, Maps, Tables } from './views'
import { getChartData } from './store/actions/charts';

import useStyles from './styles';

const App = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChartData());
    }, [dispatch]);

    const xxx = useSelector(state => state.charts)

    console.log('...........')
    console.log(xxx)

    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route exact path={["/", "/Home"]}>
                    <div className={classes.content}>
                        <HomePage/>
                    </div>
                </Route>
                <Route exact path="/Charts">
                    <div className={classes.content}>
                        <Typography>
                            Chart
                        </Typography> 
                        <Charts/>
                    </div>
                </Route>
                <Route exact path="/Tables" >
                    <div className={classes.content}>
                        <Typography>Tables</Typography>
                        <Tables/>
                    </div>
                </Route>
                <Route exact path="/Dashboard" >
                    <div className={classes.content}>
                        <Typography>Dashboard</Typography>
                        <Dashboard/>
                    </div>
                </Route>
                <Route exact path="/Maps" >
                    <div className={classes.content}>
                        <Typography>Maps</Typography>
                        <Maps/>
                    </div>
                </Route>
                <Route exact path="/Calculator" >
                    <div className={classes.content}>
                        <Calculator/>
                    </div>
                </Route>
                <Route exact path="/Contact" >
                    <div className={classes.content}>
                        <Typography>Contact</Typography>
                        <Contact/>
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
