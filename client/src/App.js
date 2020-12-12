import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Products, Cart, Checkout } from './components';
import Chart from './components/Chart/Chart'

import * as api from './api/index.js'
import axios from 'axios';

const App = () => {
    const [state, setState] = useState({})

    useEffect(() => {
        axios.get('https://fin-dashboard-react.herokuapp.com/data')
            .then(res => {
                const persons = res.data;
                setState({ persons });
                console.log(persons)
                console.log('..........................................')
            })
    }, [])

    console.log(state)

    return (
        <Router>
            <Navbar />

            <Chart style={{ height: '600', width: '600' }} />
        </Router>
    )
}

export default App
