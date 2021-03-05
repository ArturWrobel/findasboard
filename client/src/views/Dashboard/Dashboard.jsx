import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Button, Grid, Icon } from "@material-ui/core/"
import GridContainer from './components/GridContainer.js'
import GridItem from './components/GridItem'
import Card from "./components/Card.js"
import CardHeader from "./components/CardHeader.js"
import CardFooter from "./components/CardFooter.js"
import CardIcon from "./components/CardIcon.js"
import CardBody from "./components/CardBody.js"
import CustomTabs from "./components/CustomTabs.js"
import Tasks from "./components/Tasks.js";
import Table from "./components/Table.js";
import PrintButton from "./components/pdf/PrintButton"
import Tooltip from '@material-ui/core/Tooltip'

import DateRange from "@material-ui/icons/DateRange";
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
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

import { SalesChart, BarChart, BreakDown } from '../../components/'
import { bugs, website, server } from "./components/variables/general.js"
import InfoDashboard from '../../components/Tooltips/InfoDashboard'

import styles from "./components/dashboardStyle.js";

const useStyles = makeStyles(styles)

const Dashboard = () => {

    const classes = useStyles();

    return (
        <>
            <Tooltip
                classes={{ tooltip: classes.customWidth }}
                placement="bottom"
                title="Open and save customized PDF report.">
                <div className={classes.pdf}>
                    <PrintButton />
                </div>
            </Tooltip>

            <InfoDashboard/>

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
                                <span style={{ 'color': 'red' }}>
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
                <GridItem xs={12} sm={12} md={4} >
                    <Card chart >
                        <CardHeader color="rose" id="divIdToPrint">
                            <SalesChart />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Monthly Sales</h4>
                            <p className={classes.cardCategory}>
                                <span className={classes.successText}>
                                    <ArrowUpward className={classes.upArrowCardCategory} /> 23%
                </span>{" "}
                increase since QIV previous year
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
                        <CardHeader color="rose">
                            <BarChart />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Flows vs costs</h4>
                            <p className={classes.cardCategory}>is anyone reading</p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime /> updated 2 days ago
                </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="rose">
                            <BreakDown />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Sales breakdown</h4>
                            <p className={classes.cardCategory}>by sector</p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime /> sent 2 days ago
                </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomTabs
                        title="Tasks:"
                        headerColor="info"
                        tabs={[
                            {
                                tabName: "Bugs",
                                tabIcon: BugReport,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0, 3]}
                                        tasksIndexes={[0, 1, 2, 3]}
                                        tasks={bugs}
                                    />
                                )
                            },
                            {
                                tabName: "Website",
                                tabIcon: Code,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0]}
                                        tasksIndexes={[0, 1]}
                                        tasks={website}
                                    />
                                )
                            },
                            {
                                tabName: "Cloud",
                                tabIcon: Cloud,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[1]}
                                        tasksIndexes={[0, 1, 2]}
                                        tasks={server}
                                    />
                                )
                            }
                        ]}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="warning">
                            <h4 className={classes.cardTitleWhite}>Stats QIV</h4>
                            <p className={classes.cardCategoryWhite}>
                                New team results
                            </p>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="warning"
                                tableHead={["ID", "Name", "Reve", "Country"]}
                                tableData={[
                                    ["1", "Regina Bold", "$36,738", "Poland"],
                                    ["2", "Krzysztof Kostomłot", "$23,789", "Zimbawe"],
                                    ["3", "Blady Filip", "$56,142", "Netherlands"],
                                    ["4", "Błekitnooka Karla", "$38,735", "Dominikana"],
                                    ["5", "Roman Bratny", "$44,552", "Reunion"],
                                ]}
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </>
    )
}

export default Dashboard
