import React from 'react';
import { InputStyles } from './input-styles';

export const Input = ({
    label,
    type,
    value,
    onChange
}) => {
    return (
        <InputStyles
            sx={{margin: '10px'}}
            id="standard-basic"
            label={label}
            variant="standard"
            value={value}
            type={type}
            onChange={onChange}
        />
    )
}