import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function FormControlLabelPlacement(props) {
    const [value, setValue] = useState("nothing");

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        props.handleChange(event.target.value);
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup
                row aria-label="position"
                name="choice"
                value={value}
                onChange={handleRadioChange}
            >
                <FormControlLabel
                    checked={value === 'amount'}
                    value="amount"
                    control={<Radio color="primary" />}
                    label="Leasing Amount"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    checked={value === 'payment'}
                    value="payment"
                    control={<Radio color="primary" />}
                    label="Monthly Payment"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    checked={value === 'interest'}
                    value="interest"
                    control={<Radio color="primary" />}
                    label="Interest Rate"
                    labelPlacement="bottom"
                />
            </RadioGroup>
        </FormControl>
    );
}


