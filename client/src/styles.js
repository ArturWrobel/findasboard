import { makeStyles } from '@material-ui/core/styles';

import {setDrawerWidth} from './constants/config'

export default makeStyles((theme) => ({
    content: {
        backgroundColor: '#eeeee7',
        marginLeft: setDrawerWidth,
        padding: theme.spacing(2),
        minHeight: '100vh'
    },
}));