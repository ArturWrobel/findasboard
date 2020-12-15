const dashboardStyle = {
    containerBars : {
        marginTop: 75,
        color: 'yellow',
        justifyContent: 'space-between',
    },
    containerCharts : {
        marginTop: 50,
        color: 'yellow',
        justifyContent: 'center',
    },
    containerTables : {
        marginTop: 50,
        color: 'yellow',
        justifyContent: 'space-between',
    },
    routes: {
        backgroundColor: 'grey',
        color: 'brown',
        padding: "0 15px !important",
        margin: "10px !important"

    },
    routes1: {
        backgroundColor: 'blue',
        color: 'white',
        padding: "0 15px !important",
        margin: "10px !important"

    },
    successText: {
        color: 'blue'
    },
    upArrowCardCategory: {
        width: "16px",
        height: "16px"
    },
    stats: {
        color: 'grey',
        display: "inline-flex",
        fontSize: "12px",
        lineHeight: "22px",
        "& svg": {
            top: "4px",
            width: "16px",
            height: "16px",
            position: "relative",
            marginRight: "3px",
            marginLeft: "3px"
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            top: "4px",
            fontSize: "16px",
            position: "relative",
            marginRight: "3px",
            marginLeft: "3px"
        }
    },
    cardCategory: {
        color: 'grey',
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        paddingTop: "10px",
        marginBottom: "0"
    },
    cardCategoryWhite: {
        color: "rgba('grey',.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitle: {
        color: 'grey',
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: 'grey',
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    cardTitleWhite: {
        color: "white",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: 'grey',
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

export default dashboardStyle;