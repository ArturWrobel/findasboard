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
                classes={{ tooltip: classes.calc }}
                placement="bottom-start"
                /* title="This report design is prepared with Material UI." */
                title={
                    <React.Fragment>
                        <Typography color="inherit">Leasing Calculator</Typography>
                        <div>
                            Calculate the required unknown with the cash flows table.
                                </div>
                        <div>
                            The finished table can be exported to Excel.
                                </div>

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
