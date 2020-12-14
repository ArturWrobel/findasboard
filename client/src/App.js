import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Chart, Chart1, Nivo } from './components';

import * as api from './api/index.js'
import axios from 'axios';

const App = () => {
    const [state, setState] = useState()

    useEffect(() => {
        /* axios.get('https://fin-dashboard-react.herokuapp.com/data')
            .then(res => {
                const persons = res.data;
                setState(res.data);
                console.log(persons)
                console.log('..........................................')
            }) */
            console.log('lllllllllllllllllllllllllllllllllll')
            const xxx = api.fetchPosts()
            console.log(xxx)
            console.log('lllllllllllllllllllllllllllllllllll')
    }, [])

    //console.log(state[0].data)

    return (
        <Router>
            
            <Navbar />
            <Switch>
                <Route exact path="/" >

                <Chart />
                <Typography>
                 xxx
            </Typography>
                </Route>
                <Route exact path="/chart1" >
                <Chart1 />                
                </Route>
                <Route exact path="/nivo" >
                    <Nivo/>
                </Route>
            </Switch>

        </Router>
    )
}

export default App
