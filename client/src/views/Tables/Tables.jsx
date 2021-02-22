import React, { useState, useCallback } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper } from "@material-ui/core/"
import { useDropzone } from 'react-dropzone'
import * as XLSX from "xlsx"

import Data from "./Data"
import { WeightsChart, FlowsChart, NPVChart } from "../../components"
import styles from './styles.js'


const useStyles = makeStyles(styles)

const Tables = () => {
    const classes = useStyles();
    const [data, setData] = useState()

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.readAsArrayBuffer(file)

            reader.onload = (e) => {
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray, { type: "buffer" });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);
                setData(data)
            };
        })
    }, [])

    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone(
        { onDrop,  maxFiles:1,
            accept: 'application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })

    const files = acceptedFiles.map(file => (
        <p key={file.path}>
            {file.path} - {file.size} bytes
        </p>
    ))

    return (
        <>
            <Paper elevation={3} className={classes.title}>
                <Typography variant="h2">
                    Analyze investments
                    </Typography>
            </Paper>
            <Paper elevation={3}
                {...getRootProps({ className: ['dropzone', classes.drag] })}
            >
                {isDragActive ? <Typography variant="h5" className={classes.loader}>Drop it like it's hot!</Typography>
                    :
                    <Paper className={classes.loader}>
                        <Typography variant="h5" >
                            Drag and drop here
                    </Typography>
                        <Typography variant="h6" >
                            or click to chose file
                    </Typography>
                        {files}
                    </Paper>
                }
                <input {...getInputProps()} />
            </Paper>

            <Paper elevation={3} className={classes.table}>
                {data ? <Data data={data} /> : <Grid className={classes.import}>
                <Typography variant="h6" className={classes.importText}> To access analysis </Typography>
                    <Typography variant="h5" > Import data from attached file </Typography>
                    <Typography variant="h6"> (only one file at a time) </Typography>
                </Grid>
                }
            </Paper>

            {data ?
                (<Paper elevation={3} className={classes.table}>
                    <Grid container className={classes.charts}>
                        <Grid className={classes.nivo}>
                            <Paper elevation={2}>
                                <FlowsChart data={data} />
                            </Paper>
                        </Grid>
                        <Grid className={classes.nivo}>
                            <Paper elevation={2}>
                                <NPVChart data={data} />
                            </Paper>
                        </Grid>
                        <Grid className={classes.nivo}>
                            <Paper elevation={2}>
                                <WeightsChart data={data} />
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>)
                : ""}
        </>
    )
}

export default Tables
