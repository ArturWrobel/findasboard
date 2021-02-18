import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography }
    from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(project, Investment, I, II, III, IV, V) {
    return { project, Investment, I, II, III, IV, V };
}



const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables(props) {
    const classes = useStyles();
const rows = [
    createData(props.data[0]['Project'], props.data[0]['Investment'], props.data[0]['Flow I'], props.data[0]['Flow II'],
    props.data[0]['Flow III'], props.data[0]['Flow IV'], props.data[0]['Flow V']),
    createData(props.data[1]['Project'], props.data[1]['Investment'], props.data[1]['Flow I'], props.data[1]['Flow II'],
    props.data[1]['Flow III'], props.data[1]['Flow IV'], props.data[1]['Flow V']),
    createData(props.data[2]['Project'], props.data[2]['Investment'], props.data[2]['Flow I'], props.data[2]['Flow II'],
    props.data[2]['Flow III'], props.data[2]['Flow IV'], props.data[2]['Flow V']),
    createData(props.data[3]['Project'], props.data[3]['Investment'], props.data[3]['Flow I'], props.data[3]['Flow II'],
    props.data[3]['Flow III'], props.data[3]['Flow IV'], props.data[3]['Flow V']),
];
    return (
        <TableContainer component={Paper}>
            <Typography variant="h1">
                {props.data[0]['Inwestment']}
            </Typography>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Project</StyledTableCell>
                        <StyledTableCell align="right">Investment</StyledTableCell>
                        <StyledTableCell align="right">Flow I</StyledTableCell>
                        <StyledTableCell align="right">Flow II</StyledTableCell>
                        <StyledTableCell align="right">Flow III</StyledTableCell>
                        <StyledTableCell align="right">Flow IV</StyledTableCell>
                        <StyledTableCell align="right">Flow V</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.project}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.Investment}</StyledTableCell>
                            <StyledTableCell align="right">{row.I}</StyledTableCell>
                            <StyledTableCell align="right">{row.II}</StyledTableCell>
                            <StyledTableCell align="right">{row.III}</StyledTableCell>
                            <StyledTableCell align="right">{row.IV}</StyledTableCell>
                            <StyledTableCell align="right">{row.V}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}