import React from 'react'
import Card from '../Card'
import { Typography, Avatar, CardHeader, CardContent, Divider } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import styles from './styles.js'
import logo  from '../../../assets/logo.png'
const useStyles = makeStyles(styles)

const CardBar = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Card>
                <div className={classes.root} >
                    <CardHeader
                        title="Shrimp and Chorizo Paella"
                    />
                    <Typography>
                        Karta
                </Typography>
                    <Divider className={styles.divider} />
                    <Typography>
                        Footer
                </Typography>
                </div>
            </Card>
            <div className ={classes.sec}>
                <Typography>
                    sec
                </Typography>
            </div>

        </div>
    )
}

export default CardBar
