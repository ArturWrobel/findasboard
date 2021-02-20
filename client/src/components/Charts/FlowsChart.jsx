import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Paper, Typography, Grid } from '@material-ui/core';

export default function Example(props) {
    const newData = [
        {
            name: 'Invested',
            [props.data[0]['Project']]: props.data[0]['Investment'],
            [props.data[1]['Project']]: props.data[1]['Investment'],
            [props.data[2]['Project']]: props.data[2]['Investment'],
            [props.data[3]['Project']]: props.data[3]['Investment'],
        },
        {
            name: 'Flow I',
            [props.data[0]['Project']]: props.data[0]['Flow I'],
            [props.data[1]['Project']]: props.data[1]['Flow I'],
            [props.data[2]['Project']]: props.data[2]['Flow I'],
            [props.data[3]['Project']]: props.data[3]['Flow I'],
        },
        {
            name: 'Flow II',
            [props.data[0]['Project']]: props.data[0]['Flow II'],
            [props.data[1]['Project']]: props.data[1]['Flow II'],
            [props.data[2]['Project']]: props.data[2]['Flow II'],
            [props.data[3]['Project']]: props.data[3]['Flow II'],
        },
        {
            name: 'Flow III',
            [props.data[0]['Project']]: props.data[0]['Flow III'],
            [props.data[1]['Project']]: props.data[1]['Flow III'],
            [props.data[2]['Project']]: props.data[2]['Flow III'],
            [props.data[3]['Project']]: props.data[3]['Flow III'],
        },
        {
            name: 'Flow IV',
            [props.data[0]['Project']]: props.data[0]['Flow IV'],
            [props.data[1]['Project']]: props.data[1]['Flow IV'],
            [props.data[2]['Project']]: props.data[2]['Flow IV'],
            [props.data[3]['Project']]: props.data[3]['Flow IV'],
        },
        {
            name: 'Flow V',
            [props.data[0]['Project']]: props.data[0]['Flow V'],
            [props.data[1]['Project']]: props.data[1]['Flow V'],
            [props.data[2]['Project']]: props.data[2]['Flow III'],
            [props.data[3]['Project']]: props.data[3]['Flow V'],
        },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <Paper>
                <Grid style={{ 'padding': '20px' }}>
                    <Typography variant="h6">
                        Cashflow during project life
                </Typography>
                    <BarChart
                        width={800}
                        height={430}
                        data={newData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={props.data[0]['Project']} fill="#FF8E72" background={{ fill: '#eee' }} />
                        <Bar dataKey={props.data[1]['Project']} fill="#4CE0B3" />
                        <Bar dataKey={props.data[2]['Project']} fill="#F4B266" background={{ fill: '#eee' }} />
                        <Bar dataKey={props.data[3]['Project']} fill="#648DE5" />
                    </BarChart>
                </Grid>
            </Paper>

        </ResponsiveContainer>
    );

}
