import { makeStyles } from '@material-ui/core/styles';
import {setDrawerWidth} from '../../constants/config'

const drawerWidth = setDrawerWidth;

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "black",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    listItem: {
        paddingTop: '15px',
    },
    image: {
        marginRight: "20px",
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomDrawer: {
        position: 'absolute',
        bottom: '5px',
        left: '40px',
        textDecoration: "none"
    },
    name: {
        textDecoration: "none",
        color: "brown"
    }
}));