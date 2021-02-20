import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Paper, Typography, Grid, Slider, }
    from '@material-ui/core';

import { npv } from 'financial'

export default function Example(props) {
    const [value, setValue] = useState(0.02)

    function valuetext(value) {
        return `${value}°C`;
    }
    const rate = value
    const cashflows0 = [-props.data[0]['Investment'],
    props.data[0]['Flow I'], props.data[0]['Flow II'],
    props.data[0]['Flow III'], props.data[0]['Flow IV'], props.data[0]['Flow V']]
    const cashflows1 = [-props.data[1]['Investment'],
    props.data[1]['Flow I'], props.data[1]['Flow II'],
    props.data[1]['Flow III'], props.data[1]['Flow IV'], props.data[1]['Flow V']]
    const cashflows2 = [-props.data[2]['Investment'],
    props.data[2]['Flow I'], props.data[2]['Flow II'],
    props.data[2]['Flow III'], props.data[2]['Flow IV'], props.data[2]['Flow V']]
    const cashflows3 = [-props.data[3]['Investment'],
    props.data[3]['Flow I'], props.data[3]['Flow II'],
    props.data[3]['Flow III'], props.data[3]['Flow IV'], props.data[3]['Flow V']]

    const data = [
        {
            name: props.data[0]['Project'],
            uv: npv(rate, cashflows0),
        },
        {
            name: props.data[1]['Project'],
            uv: npv(rate, cashflows1),
        },
        {
            name: props.data[2]['Project'],
            uv: npv(rate, cashflows2),
        },
        {
            name: props.data[3]['Project'],
            uv: npv(rate, cashflows3),
        }
    ];

    const gradientOffset = () => {
        const dataMax = Math.max(...data.map((i) => i.uv));
        const dataMin = Math.min(...data.map((i) => i.uv));

        if (dataMax <= 0) {
            return 0;
        }
        if (dataMin >= 0) {
            return 1;
        }

        return dataMax / (dataMax - dataMin);
    };

    const off = gradientOffset();

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        console.log(value);
      };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <Grid style={{ 'padding': '20px' }}>
                
                <Typography variant="h6">
                    Net Present Value
                </Typography>

                <Paper>

                    <AreaChart
                        width={400}
                        height={350}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <defs>
                            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset={off} stopColor="green" stopOpacity={1} />
                                <stop offset={off} stopColor="red" stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
                    </AreaChart>
                </Paper>
                <Grid>
                <Grid style= {{'margin': '10px'}}>
                    <Typography variant="h6" >
                        Slide to set interest rate here:
                    </Typography>
                </Grid>                    
                    <Slider
                    key = {`slider - ${value}`}
                    defaultValue={value}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="on"
                    step={0.01}
                    marks
                    min={0.01}
                    max={0.12}
                    onChange={handleSliderChange}
                />
                </Grid>
                
            </Grid>
        </ResponsiveContainer>
    );

}