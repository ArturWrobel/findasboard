import React from 'react'
import { Typography, Tooltip } from "@material-ui/core/"
import { makeStyles } from "@material-ui/core/styles";

import styles from "./styles.js";

const useStyles = makeStyles(styles)

export default function Info(props) {
    const classes = useStyles();

    return (
                <Tooltip
                    classes={{ tooltip: classes.home }}
                    /* placement="bottom" */
                    title={
                        <React.Fragment>
                            <Typography color="inherit">{props.top}</Typography>
                            {props.comment}
                        </React.Fragment>
                    }
                >
                    {props.children}
                </Tooltip>
    )
}
