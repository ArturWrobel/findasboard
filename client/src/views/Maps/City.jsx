import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, Typography, MenuItem, FormControl, Select, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
    },
    formControl: {
        marginTop: '100px',
        minWidth: 120,
    },
}));

export default function ControlledOpenSelect({ onChildClick }) {
    const classes = useStyles();
    const [city, setCity] = useState('Warsaw');
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setCity(event.target.value);
        onChildClick(event.target.value)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Button className={classes.button} onClick={handleOpen} variant="contained" color="primary">
                <Grid container>
                    <Typography variant="h6">
                        City:
                </Typography>
                    <Typography color="primary">
                        {"..."}
                    </Typography>
                    <Typography variant="h6">
                        {city}
                    </Typography>
                </Grid>
            </Button>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label"></InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    onChange={handleChange}
                    value = {'xxx'}
                >
                    <MenuItem key={1} value="Warsaw">Warsaw</MenuItem>
                    <MenuItem key={2} value='Paris'>Paris</MenuItem>
                    <MenuItem key={3} value='Madrid'>Madrid</MenuItem>
                    <MenuItem key={4} value='Cairo'>Cairo</MenuItem>
                    <MenuItem key={5} value='Brussels'>Brussels</MenuItem>
                    <MenuItem key={6} value='Bucharest'>Bucharest</MenuItem>
                    <MenuItem key={7} value='Bratislava'>Bratislava</MenuItem>
                    <MenuItem key={0} value='Tunis'>Tunis</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}