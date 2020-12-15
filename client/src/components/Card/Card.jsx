import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import styles from "./styles.js"

const useStyles = makeStyles(styles);

const Card = props => {

    const classes = useStyles();
    const {children} = props;
    
    return (
        <div className = { classes.card }>
            <Typography>
                {children}
            </Typography>
        </div>
    )
}

export default Card
