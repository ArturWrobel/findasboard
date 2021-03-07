import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import { Sidebar } from './components';
import { Contact, Dashboard, Calculator, Charts, HomePage, Maps, MoreMaps, Tables, About } from './views'
import { getChartData } from './store/actions/charts';
import useStyles from './styles';
import ReactGA from 'react-ga'
const trackingId = "UA-191515957-1"

const App = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        ReactGA.initialize(trackingId)
        ReactGA.pageview(window.location.pathname + window.location.search)
        dispatch(getChartData());
    }, [dispatch]);


    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route exact path={["/", "/Home"]}>
                    <div className={classes.content}>
                        <HomePage />
                    </div>
                </Route>
                <Route exact path="/Visualizations">
                    <div className={classes.content}>
                        <Charts />
                    </div>
                </Route>
                <Route exact path="/Tables" >
                    <div className={classes.content}>
                        <Tables />
                    </div>
                </Route>
                <Route exact path="/Dashboard" >
                    <div className={classes.content}>
                        <Dashboard />
                    </div>
                </Route>
                <Route exact path="/Maps" >
                    <div className={classes.content}>
                        <Maps />
                    </div>
                </Route>
                <Route exact path="/MoreMaps" >
                    <div className={classes.content}>
                        <MoreMaps />
                    </div>
                </Route>
                <Route exact path="/Calculator" >
                    <div className={classes.content}>
                        <Calculator />
                    </div>
                </Route>
                <Route exact path="/About" >
                    <div className={classes.content}>
                        <About />
                    </div>
                </Route>
                <Route exact path="/Contact" >
                    <div className={classes.content}>
                        <Contact />
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
