import React, { useState, useEffect } from 'react'
import { TextField, Typography, Grid, Paper} from "@material-ui/core/"
import { makeStyles } from "@material-ui/core/styles";
import Flows from './Flows'

import { rate } from 'financial'

import styles from './styles.js'

const useStyles = makeStyles(styles)

export default function Input(props) {
    const classes = useStyles();

    const initialState = {
        amount: 0,
        payment: 0,
        interest: 0,
        months: 0
    }
    const [values, setValues] = useState(initialState)
    const [total, set_total] = useState(0);
    const [choice, newChoice] = useState(props.name)

    const values_handler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setValues({ ...values, [name]: value })
        props.handleChange(values)
        // Calling the method to sum the value
        calcTotal(values)
    }

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

    useEffect(() => { 
        // handle change of radio choice
        if (props.name !== choice) {
            setValues(initialState)
            newChoice(props.name)
            const aaa = document.getElementById("amount")
            aaa.value = ''
            const bbb = document.getElementById("interest")
            bbb.value = ''
            const ccc = document.getElementById("payment")
            ccc.value = ''
            const ddd = document.getElementById("months")
            ddd.value = ''
        }
        calcTotal(values) }, [values, props.name, set_total])

    const calcTotal = (values) => { 
        let aux = 0
        /* for (var key in values) {
            parseInt(values, 10)
            aux += values[key]
        } */
        let amount = parseFloat(values.amount, 10)
        let payment = parseFloat(values.payment, 10)
        let interest = (parseFloat(values.interest, 10) / 100)
        let months = parseFloat(values.months, 10)
        switch (props.name) {
            case 'amount':
                if (payment === 0 || interest === 0 || months === 0) {
                    aux = 0
                } else {
                    aux = payment * [(1 - [1 / Math.pow((1 + (interest / 12)), months)]) / (interest / 12)]
                }    
                break
            case 'interest':
                if (payment === 0 || amount === 0 || months === 0) {
                    aux = 0
                } else {
                    aux = [rate(months, (-1 * payment), amount, 0, 'end') * 100 * 12]
                }
                break
            case 'payment':
                if (interest === 0 || amount === 0 || months === 0) {
                    aux = 0
                } else {
                    aux = [amount] / [(1 - ([1 / (Math.pow((1 + interest / 12), months))])) / (interest / 12)]
                }
                break
            default:
                aux = 0
        }
        set_total(aux)
        console.log(" to wychodzi z Input")
        console.log(aux, values)
    }


    let amt, pay, int, result, after
    if (props.name === 'amount') {
        amt = true
        result = "Leasing Amount"
        after = "EUR"
    } else if (props.name === 'payment') {
        pay = true
        result = "Monthly Payment"
        after = "EUR"
    } else if (props.name === 'interest') {
        int = true
        result = "Interest Rate"
        after = "%"
    }

    return (
        <>
            <form noValidate autoComplete="off" className={classes.data}>
                <TextField
                    className={classes.textField}
                    disabled={amt}
                    id="amount"
                    name="amount"
                    label="Leasing Amount*"
                    variant="outlined"
                    type="number"
                    placeholder="0.00 EUR"
                    onChange={values_handler} />
                <TextField
                    className={classes.textField}
                    disabled={pay}
                    id="payment"
                    name="payment"
                    label="Monthly Payment*"
                    variant="outlined"
                    type="number"
                    placeholder="0.00 EUR"
                    onChange={values_handler} />
                <TextField
                    className={classes.textField}
                    disabled={int}
                    id="interest"
                    name="interest"
                    label="Interest Rate*"
                    variant="outlined"
                    type="number" step="0.01"
                    placeholder="0.00 %"
                    onChange={values_handler} />
                <TextField
                    className={classes.textField}
                    id="months"
                    name="months"
                    label="Number of Payments*"
                    variant="outlined"
                    type="number"
                    placeholder="0"
                    onChange={values_handler} />
            </form>
            <Grid className={classes.result}>
                <Typography variant="h6">
                    {result}:
                    <span className={classes.score}> {total.toLocaleString('en-US', 
                    { maximumFractionDigits: 2 })} </span>
                    {after}
                </Typography>
                
            </Grid>           
            {values.amount === 0 ? <Typography variant="5"></Typography> : 
                <Grid className={classes.flows}>
                <Paper elevation={3}>
                    {createTable(values)}
                </Paper>
            </Grid>
            } 
            </>
    )
}
