import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid } from "@material-ui/core/"
import Radio from './Radio'
import Input from './Input'

import styles from './styles.js'

const useStyles = makeStyles(styles)

const Calculator = () => {
    const [show, setShow] = useState('nothing')
    const classes = useStyles();

    const handleChange = radioButtonValue => {
        setShow(radioButtonValue)
    };

    return (
        <>
            <Paper elevation={3} className={classes.title}>
                <Typography variant="h4" >
                    Leasing Calculator
                    </Typography>
            </Paper>
            <Paper className={classes.subtitle}>
                <Typography variant="h6" >
                    What do you want to calculate?
                </Typography>
                <Radio value={show} handleChange={handleChange} />
            </Paper>
            {show === "nothing" ? <Typography variant="h5" className={classes.waiting}>
                Waiting for your choice
            </Typography> :
                <Grid>
                    <Paper className={classes.inputs}>
                        <Input name={show} />
                    </Paper>
                    <Typography>
                        Use only positive numbers
                </Typography>
                </Grid>
            }
        </>
    )
}

export default Calculator