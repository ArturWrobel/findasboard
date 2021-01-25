import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography }
    from '@material-ui/core'

import styles from './stylesFlows.js'
const useStyles = makeStyles(styles)

export default function StickyHeadTable(props) {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const columns = [
        { id: 'no', label: 'No.' },
        { id: 'date', label: 'Date', minWidth: 170 },
        {
            id: 'instalment', label: 'Instalment', minWidth: 100, align: 'right',
            format: (value) => value.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
        },
        {
            id: 'residual', label: 'Residual', minWidth: 170, align: 'right',
            format: (value) => value.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
        },
        {
            id: 'capital', label: 'Capital', minWidth: 170, align: 'right',
            format: (value) => value.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
        },
        {
            id: 'interest', label: 'Interest', minWidth: 170, align: 'right',
            format: (value) => value.toFixed(2),
        },
    ];
    
    function createData(no, date, instalment, residual, capital, interest) {
        return { no, date, instalment, residual, capital, interest };
    }
    
    let months = props.months
    let amount = props.amount
    let instalment = props.payment
    let interest = props.interest/100

    let today = new Date()
    today.setMonth(today.getMonth() - 1)
    let i, capital
    let rows = []
    
    for (i = 0; i <= months; i++) {
        let residual = amount - instalment * i
        let date = today
        date.setMonth(date.getMonth() + 1)
        let int = residual* interest
        capital = instalment - int
        /* console.log("Number", i, "Data", date.toISOString().slice(0, 10), "instalment", instalment,
            "Amount", residual, "Capital", capital, "Interest", 10) */
        rows.push(createData(i, date.toISOString().slice(0, 10), instalment, residual, capital, int))
    }
    return (
        <Paper className={classes.root}>
            <Typography variant="h5">
                {props.amount} {" "}
                {props.payment}{" "}
                {props.months}{" "}
            </Typography>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
