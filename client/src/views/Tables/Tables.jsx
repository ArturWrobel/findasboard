import React, { useState, useCallback } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper } from "@material-ui/core/"
import { useDropzone } from 'react-dropzone'
import * as XLSX from "xlsx"

import Data from "./Data"
import styles from './styles.js'


const useStyles = makeStyles(styles)

const Tables = () => {
    const classes = useStyles();
    const [data, setData] = useState([])

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

    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop }, {accept: 'image/jpeg, image/png'})

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
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
                <Typography variant="h4" >
                    Read and analyze table
                    </Typography>
            </Paper>
            <Paper elevation={3} className={classes.drag}
                {...getRootProps({ className: ['dropzone', classes.drag] })}
            >
                {isDragActive ? "Drop it like it's hot!" : 'Click me or drag a file to upload!'}
                <input {...getInputProps()}
                />
                <Typography variant="h5" >
                    Drag and drop here
                    </Typography>
                <Typography variant="h6" >
                    or click to chose file
                    </Typography>
                {files}
            </Paper>

            <Paper elevation={3}>
                {!data ? <Data/> : <Typography variant="h4"> Import Data from file </Typography>}
                
            </Paper>
        </>
    )
}

export default Tables
