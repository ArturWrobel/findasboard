import { makeStyles } from '@material-ui/core/styles';

import { setDrawerWidth } from './constants/config'

export default makeStyles((theme) => ({

    content: {
        backgroundColor: '#eeeee1',
        marginLeft: setDrawerWidth,
        padding: theme.spacing(1),
        minHeight: '92vh'
    },
}));