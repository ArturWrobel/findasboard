import React, { useState, useCallback } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper } from "@material-ui/core/"
import { useDropzone } from 'react-dropzone'
import * as XLSX from "xlsx"

import Data from "./Data"
import { Chart, Chart1, Example, Nivo } from "../../components"
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
                console.log(data);
                console.log(typeof (data))
                console.log(data[0]['Project'])
            };
        })
    }, [])

    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const files = acceptedFiles.map(file => (
        <p key={file.path}>
            {file.path} - {file.size} bytes
        </p>
    ))
    console.log(acceptedFiles.length)
    console.log('accepted')
    //const xxx = reader.readAsArrayBuffer(acceptedFiles[0])
    console.log('after')
    console.log(acceptedFiles[0])
    console.log(typeof (files[0]))
    console.log('state')
    //console.log(data[0]['Project'])
    console.log('state')

    return (
        <>
            <Paper elevation={3} className={classes.title}>
                <Typography variant="h4">
                    Read and analyze table
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
                {data ? <Data data={data} /> : <Typography variant="h6"> Import data from file </Typography>}
            </Paper>

            <Paper elevation={3} className={classes.table}>
                <Grid container className={classes.charts}>
                    <Grid className={classes.nivo}>
                        <Paper elevation={2}>
                            <Nivo />
                        </Paper>
                    </Grid>
                    <Grid className={classes.nivo}>
                        <Paper elevation={2}>
                            <Chart />
                        </Paper>
                    </Grid>
                    <Example />

                </Grid>

            </Paper>
        </>
    )
}

export default Tables
