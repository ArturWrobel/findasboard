import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow }
    from '@material-ui/core'

const columns = [
    { id: 'no', label: 'No.' },
    { id: 'name', label: 'Date', minWidth: 170 },
    { id: 'code', label: 'Instalment', minWidth: 100 },
    {
        id: 'population',
        label: 'Residual',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Capital',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Interest',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(no, name, code, population, size) {
    const density = population / size;
    return { no, name, code, population, size, density };
}
let months = 15
let amount = 1000
let instalment = amount / months
let today = new Date()
today.setMonth(today.getMonth() - 1)
let i;
let rows = []

for (i = 0; i <= months; i++) {
    let residual = amount - instalment * i
    let date = today
    date.setMonth(date.getMonth() + 1)
    console.log("Number", i, "Data", date.toISOString().slice(0, 10), "instalment", instalment,
        "Amount", residual, "Capital", 100, "Interest", 10)
        rows.push(createData(i,date.toISOString().slice(0, 10),amount,4,5))
}
/* console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
console.log (11) */

const rowss = [
    createData(1, 'India', 'IN', 1324171354, 3287263),
    createData(2, 'China', 'CN', 1403500365, 9596961),
    createData(3, 'Italy', 'IT', 60483973, 301340),
    createData(4, 'United States', 'US', 327167434, 9833520),
    createData(5, 'Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
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
