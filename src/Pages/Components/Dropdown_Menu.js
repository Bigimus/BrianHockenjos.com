import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropdownMenu = ({label, menu_items, handler, value}) => {
    return (
        <FormControl fullWidth size="small">
            <InputLabel id="label">{label}</InputLabel>
            <Select
                labelId="label"
                defaultValue=''
                value={value}
                id="select"
                label={label}
                onChange={event => handler(event.target.value)}
            >
                {menu_items.map(menuItem => (
                    <MenuItem 
                    key={menuItem} 
                    value={menuItem}
                    children={menuItem}
                    />
                ))}

            </Select>
        </FormControl>
    )
}

export default DropdownMenu


