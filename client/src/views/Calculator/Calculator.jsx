import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid } from "@material-ui/core/"
import Radio from './Radio'
import Input from './Input'
import Flows from './Flows'

import styles from './styles.js'

const useStyles = makeStyles(styles)

const Calculator = () => {
    const [show, setShow] = useState('nothing')
    const initialTable = {
        amount: 0,
        payment: 0,
        interest: 0,
        months: 0
    }
    const [table, setTable] = useState(initialTable)
    const classes = useStyles();

    const handleChangeRadio = radioButtonValue => {
        setShow(radioButtonValue)
    };

    const handleChangeInput = inputValue => {
        setTable(inputValue)
    };

    const createTable = (table) => {
        return (
            <Flows
                        amount={table.amount}
                        payment={table.payment}
                        interest={table.interest}
                        months={table.months}
                    />
        )
    }

    useEffect( () =>{
            createTable(table)
    }, [table])   

    return (
        <>
            <Paper elevation={3} className={classes.title}>
                <Typography variant="h4" >
                    Leasing Calculator
                    </Typography>
            </Paper>
            <Paper className={classes.subtitle} elevation={3}>
                <Typography variant="h6" >
                    What do you want to calculate?
                </Typography>
                <Radio value={show} handleChange={handleChangeRadio} />
            </Paper>
            {show === "nothing" ? <Typography variant="h5" className={classes.waiting}>
                Waiting for your choice
            </Typography> :
                <Grid>
                    <Paper className={classes.inputs} elevation={3}>
                        <Input name={show} handleChange={handleChangeInput}/>
                    </Paper>
                    <Typography>
                        Use only positive numbers
                </Typography>
                </Grid>
            }
            {table.amount === 0 ? <Typography variant="5"></Typography> :
                <Grid className={classes.flows}>
                <Paper elevation={3}>
                    {createTable(table)}
                </Paper>
            </Grid>
            }            
        </>
    )
}

export default Calculator
