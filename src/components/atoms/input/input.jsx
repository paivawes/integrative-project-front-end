import React from 'react';
import { InputStyles } from './input-styles';

export const Input = ({
    label,
    type,
    value,
    onChange,
    width
}) => {
    return (
        <InputStyles
            sx={{margin: '10px', width: width}}
            id="standard-basic"
            label={label}
            variant="standard"
            value={value}
            type={type}
            onChange={onChange}
        />
    )
}