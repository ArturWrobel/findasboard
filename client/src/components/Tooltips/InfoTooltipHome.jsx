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
                    classes={{ tooltip: classes.home }}
                    placement="bottom-start"
                    /* title="This report design is prepared with Material UI." */
                    title={
                        <React.Fragment>
                            <Typography color="inherit">Info Indicator</Typography>
                            Yo can always find additional information/guidance here.
                        </React.Fragment>
                    }
                >
                    <Button>
                        {/* <CardIcon> */}
                            <ContactSupportIcon
                                color="secondary"
                                style={{ fontSize: 60 }}
                            />
                        {/* </CardIcon> */}
                    </Button>
                </Tooltip>
            </div>
    )
}
