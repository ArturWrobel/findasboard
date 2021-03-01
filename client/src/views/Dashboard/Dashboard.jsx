import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core/"
import ChartistGraph from "react-chartist";
import Icon from "@material-ui/core/Icon"
import GridContainer from './components/GridContainer.js'
import GridItem from './components/GridItem'
import Card from "./components/Card.js"
import CardHeader from "./components/CardHeader.js"
import CardFooter from "./components/CardFooter.js"
import CardIcon from "./components/CardIcon.js"
import CardBody from "./components/CardBody.js"

import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import Zones from '../../views/Maps/Zones'

import styles from "./components/dashboardStyle.js";
import { dailySalesChart, emailsSubscriptionChart, completedTasksChart } from "./components/variables/charts.js";

const useStyles = makeStyles(styles)


const Dashboard = () => {

    const classes = useStyles();

    return (
        <>
            <Paper elevation={3} className={classes.title}>
                <Typography variant="h2">
                    Finance dashboard
            </Typography>
            </Paper>
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="success">
                                <ThumbUpIcon />
                            </CardIcon>
                            <p className={classes.cardCategory}>Revenues</p>
                            <h3 className={classes.cardTitle}>
                                2.5M <small>EUR</small>
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                            <span className={classes.successText}>
                            <ArrowUpward />
                            </span>
                                    Substantial increase
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="warning">
                                <Cloud />
                            </CardIcon>
                            <p className={classes.cardCategory}>Volatility</p>
                            <h3 className={classes.cardTitle}>10,55%</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange />
                This month
                </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="danger" stats icon>
                            <CardIcon color="danger">
                                <ErrorOutlineIcon />
                            </CardIcon>
                            <p className={classes.cardCategory}>Cash collection</p>
                            <h3 className={classes.cardTitle}>177k <small>EUR</small></h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <span style={{'color': 'danger'}}>
                                <AccessAlarmIcon />
                                </span>
                Alarming spike
                </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                                <Accessibility />
                            </CardIcon>
                            <p className={classes.cardCategory}>Team rotation</p>
                            <h3 className={classes.cardTitle}>+7</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Update />
                Just Updated
                </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="success">
                            <ChartistGraph
                                className="ct-chart"
                                data={dailySalesChart.data}
                                type="Line"
                                options={dailySalesChart.options}
                                listener={dailySalesChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Daily Sales</h4>
                            <p className={classes.cardCategory}>
                                <span className={classes.successText}>
                                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
                </p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime /> updated 4 minutes ago
                </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="warning">
                            <ChartistGraph
                                className="ct-chart"
                                data={emailsSubscriptionChart.data}
                                type="Bar"
                                options={emailsSubscriptionChart.options}
                                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                                listener={emailsSubscriptionChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                            <p className={classes.cardCategory}>Last Campaign Performance</p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                {/* <AccessTime />  */}campaign sent 2 days ago
                </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="danger">
                            <ChartistGraph
                                className="ct-chart"
                                data={completedTasksChart.data}
                                type="Line"
                                options={completedTasksChart.options}
                                listener={completedTasksChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Completed Tasks</h4>
                            <p className={classes.cardCategory}>Last Campaign Performance</p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                {/* <AccessTime /> */} campaign sent 2 days ago
                </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </>
    )
}

export default Dashboard
