import { makeStyles } from '@material-ui/core/styles';

import {setDrawerWidth} from './constants/config'

export default makeStyles((theme) => ({
    content: {
        backgroundColor: 'red',
        marginLeft: setDrawerWidth,
        padding: theme.spacing(2)
    },
}));