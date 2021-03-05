import React from 'react'
import { Typography, Tooltip, Button } from "@material-ui/core/"
import { makeStyles } from "@material-ui/core/styles";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

import styles from "./styles.js";

const useStyles = makeStyles(styles)

export default function Info() {
    const classes = useStyles();

    return (
        <div className={classes.info}>
                <Tooltip
                    classes={{ tooltip: classes.customWidth }}
                    placement="bottom-start"
                    /* title="This report design is prepared with Material UI." */
                    title={
                        <React.Fragment>
                            <Typography color="inherit">More interactive visualizations</Typography>
                            Move your mouse over to watch effects.
                        </React.Fragment>
                    }
                >
                    <Button>
                        {/* <CardIcon> */}
                            <ContactSupportIcon
                                color="primary"
                                style={{ fontSize: 50 }}
                            />
                        {/* </CardIcon> */}
                    </Button>
                </Tooltip>
            </div>
    )
}
