import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper } from "@material-ui/core/"
import { useDropzone } from 'react-dropzone'
import * as XLSX from "xlsx"

import styles from './styles.js'

const useStyles = makeStyles(styles)

const Tables = () => {

    const classes = useStyles();
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ))

    const [items, setItems] = useState([]);

    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray, { type: "buffer" });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);
                resolve(data);
                console.log(data);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });

        promise.then((d) => {
            setItems(d);
        });
    };

    return (
        <>
            <Paper elevation={3} className={classes.title}>
                <Typography variant="h4" >
                    Leasing Calculator
                    </Typography>
            </Paper>
            <Paper elevation={3} className={classes.drag}
                {...getRootProps({ className: ['dropzone', classes.drag] })}
            >
                <input {...getInputProps()}
                    type="file"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        readExcel(file);
                    }}
                />
                <Typography variant="h5" >
                    Drag and drop here
                    </Typography>
                <Typography variant="h6" >
                    or click to chose file
                    </Typography>
                {files}
            </Paper>
            <Typography variant="h6">
                {items}
            </Typography>
        </>
    )
}

export default Tables
