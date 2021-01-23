import React, { useState, useEffect } from 'react'
import { TextField, Typography, Grid } from "@material-ui/core/"
import { makeStyles } from "@material-ui/core/styles";

import { irr, rate } from 'financial'

import styles from './styles.js'

const useStyles = makeStyles(styles)

export default function Input(props) {
    const classes = useStyles();

    const [values, setValues] = useState({
        amount: 0,
        payment: 0,
        interest: 0,
        months: 0
    })
    const [total, set_total] = useState(0);

    const values_handler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setValues({ ...values, [name]: value })

        // Calling the method to sum the value
        calcTotal(values)
    }

    useEffect(() => { calcTotal(values) }, [values])

    const calcTotal = (values) => {
        let aux = 0
        /* for (var key in values) {
            parseInt(values, 10)
            aux += values[key]
        } */
        let amount = parseFloat(values.amount, 10)
        let payment = parseFloat(values.payment, 10)
        let interest = (parseFloat(values.interest, 10)/100)
        let months = parseFloat(values.months, 10)
        switch (props.name) {
            case 'amount':
                aux = payment * [ (1-[1/Math.pow((1+(interest/12)), months)])/(interest/12) ]
                break
            case 'interest':
                aux = [rate(months,(-1*payment) ,amount,0, 'end')*100*12]
                break
            case 'payment':
                aux = [amount] / [ (1 - ( [1 / (Math.pow ((1+ interest/12), months))])) / (interest/12)]
                break
            default:
                aux = 0
        }
        set_total(aux)
    }


    let amt, pay, int, result
    if (props.name === 'amount') {
        amt = true
        result = "Leasing Amount"
    } else if (props.name === 'payment') {
        pay = true
        result = "Monthly Payment"
    } else if (props.name === 'interest') {
        int = true
        result = "Interest Rate"
    }

    return (
        <>
            <form noValidate autoComplete="off" className={classes.data}>
                <TextField 
                    disabled={amt}
                    id="amount"
                    name="amount"
                    label="Leasing Amount"
                    variant="outlined"
                    type="number"
                    placeholder="0.00"
                    onChange={values_handler} />
                <TextField 
                    disabled={pay}
                    id="payment"
                    name="payment"
                    label="Monthly Payment"
                    variant="outlined"
                    type="number"
                    placeholder="0.00"
                    onChange={values_handler} />
                <TextField 
                    disabled={int}
                    id="interest"
                    name="interest"
                    label="Interest Rate"
                    variant="outlined"
                    type="number" step="0.01"
                    placeholder="0.00 %"
                    onChange={values_handler} />
                <TextField
                    id="months"
                    name="months"
                    label="Number of Payments"
                    variant="outlined"
                    type="number"
                    placeholder="0"
                    onChange={values_handler} />
            </form>
            <Grid className={classes.result}>
                <Typography variant="h6">
                    {result}: {' '}
                    <span className={classes.score}> {total.toLocaleString('en-US', {maximumFractionDigits:2})} </span>
                </Typography>
            </Grid>

        </>
    )
}
