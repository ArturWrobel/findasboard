import React, { useState, useEffect } from 'react'
import { TextField, Typography, Grid } from "@material-ui/core/"
import { makeStyles } from "@material-ui/core/styles";

import styles from './styles.js'

const useStyles = makeStyles(styles)

export default function Input(props) {
    const [amount, setAmount] = useState(0)
    const [payment, setPayment] = useState(0)
    const [interest, setInterest] = useState(0)
    const [months, setMonths] = useState(0)
    const [score, setScore] = useState(0)

    const classes = useStyles();

    const calculateScore = (amount, payment, interest, months) => {
        let out = amount + payment + interest + months
        setScore(out)
        console.log('------------')
        console.log(amount, payment, interest, months, 'hhhh', score)
    }

    useEffect((amount, payment, interest, months) => {
        calculateScore(amount, payment, interest, months)
        console.log('+++')
        console.log(amount, payment, interest, months, 'zzz', score)
    }, [calculateScore])

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

    const handleAmount = (event) => {
        setAmount(event.target.value)
    }
    const handlePayment = (event) => {
        setPayment(event.target.value)

    }
    const handleInterest = (event) => {
        setInterest(event.target.value)
    }
    const handleMonths = (event) => {
        setMonths(event.target.value)
    }

    return (
        <>
            <form noValidate autoComplete="off" className={classes.data}>
                <TextField disabled={amt} id="amount" label="Leasing Amount" variant="outlined" type="number"
                    onChange={handleAmount} />
                <TextField disabled={pay} id="payment" label="Monthly Payment" variant="outlined" type="number"
                    onChange={handlePayment} />
                <TextField disabled={int} id="interest" label="Interest Rate" variant="outlined" type="number"
                    onChange={handleInterest} />
                <TextField id="months" label="Number of Payments" variant="outlined" type="number"
                    onChange={handleMonths} />
            </form>
            <Grid className={classes.result}>
                <Typography variant="h6">
                    {result}: {' '}
                    <span className={classes.score}> {score} </span>
                    {amount}{' '} {payment} {' '} {interest} {' '} {months}
                </Typography>
            </Grid>

        </>
    )
}
