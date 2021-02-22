import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Avatar } from "@material-ui/core/"

import styles from './styles.js'
import mePicture from '../../assets/me.jpg'
import MyForm from "./myForm"

const useStyles = makeStyles(styles)

const Contact = () => {

    const classes = useStyles();
    const email = "artur.wrobel@orange.com"
    return (
        <>
            <Grid container className={classes.test}>
                <Typography variant="h3">
                    Contact me
                </Typography>
            </Grid>

            <Grid container className={classes.subtitle}>
                <Avatar alt="Artur Wróbel" src={mePicture} className={classes.mePicture} />
                <Grid>
                    <Typography variant="h6">
                        My name is:
                    <a className={classes.name} href={`mailto:${email}`}> Artur Wróbel </a>
                    </Typography>
                    <Typography variant="h6">
                        I work for Orange in Poland (Finance Team)
                    </Typography>
                    <Typography variant="h6" className={classes.subtitle}>
                        You can reach me here:
                        <a className={classes.name} href={`mailto:${email}`}> artur.wrobel@orange.com </a>
                    </Typography>
                    <Typography>
                        or fill form below
                    </Typography>
                </Grid>
            </Grid>
            <Grid >

            </Grid>
            <Grid className={classes.form}>
                <MyForm />
            </Grid>
            <Grid className={classes.bottomText}>
                <Typography>
                    Created and supported by
                    <a className={classes.name} href={`mailto:${email}`}> Artur Wróbel</a>
                    <sup>©</sup> . All mistakes are mine.
                </Typography>
            </Grid>
        </>
    )
}

export default Contact
