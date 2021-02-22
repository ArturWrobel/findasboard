import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, Typography, MenuItem, FormControl, Select, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function ControlledOpenSelect() {
    const classes = useStyles();
    const [city, setCity] = React.useState('Warsaw');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setCity(event.target.value);
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
                >
                    <MenuItem value="Warsaw">Warsaw</MenuItem>
                    <MenuItem value='Paris'>Paris</MenuItem>
                    <MenuItem value='Madrid'>Madrid</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}