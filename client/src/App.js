import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Navbar, Chart, Chart1, Nivo, DialogSelect } from './components';
import { getChartData } from './store/actions/charts';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChartData());
    }, [dispatch]);

    const xxx = useSelector(state => state.charts[0])

    console.log('...........to tu')
    console.log(xxx)
    console.log('...........')

    return (
        <Router>

            <Navbar />
            <Switch>
                <Route exact path="/" >
                    <DialogSelect/>
                    <Chart />
                    <Typography>
                        {xxx.dates}
                    </Typography>
                </Route>
                <Route exact path="/chart1" >
                    <Chart1 />
                </Route>
                <Route exact path="/nivo" >
                    <Nivo />
                </Route>
            </Switch>

        </Router>
    )
}

export default App
