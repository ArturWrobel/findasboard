import React, { useState, useEffect } from 'react';
import { Typography, CircularProgress, Container, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Navbar, Chart, Chart1, Nivo, Sidebar } from './components';
import { Dashboard } from './views'
import { getChartData } from './store/actions/charts';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChartData());
    }, [dispatch]);

    const xxx = useSelector(state => state.charts)

    console.log('...........to tu')
    console.log(xxx)
    console.log('...........')

    return (
        <Router>

            <Navbar />
            <Sidebar />
            <Switch>
                <Route exact path="/" >
                    <div>
                        <Typography> Działa?</Typography>
                    {!xxx ? <CircularProgress /> : (<Container>
                        <Typography> Działa?</Typography>
                    </Container>)

                    }
                    </div>

                    <Chart />
                </Route>
                <Route exact path="/chart1" >
                <Dashboard/>
                    {/* <Chart1 /> */}
                </Route>
                <Route exact path="/nivo" >
                    <Nivo />
                </Route>
            </Switch>

        </Router>
    )
}

export default App
