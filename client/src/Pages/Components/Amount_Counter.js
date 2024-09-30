import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { TextField, IconButton } from '@mui/material';


const AmountCounter = ({amountHandler, amount, removeHandler, negative = false, min_value = 0}) => {

    return (
        
        <Stack direction='row' style={{justifyContent:'center', width: '100%'}} >
            <TextField
                label='Amount'
                value={amount}
                variant='outlined'
                size='small'
                inputProps={{
                    min: 0, 
                    style: { textAlign: 'center'},
                    maxLength: 3
                }}
                style ={{width: '100%', textAlign: 'center'}}
             />

            <IconButton aria-label='add' onClick={() => amountHandler(amount + 1)} children={<AddIcon />} />

            <IconButton aria-label='remove' onClick={() => amountHandler(amount - 1)} children={<RemoveIcon />} />

            <IconButton aria-label='reset' onClick={() => amountHandler(min_value)} children={<RestartAltIcon />} />

        </Stack>

    )
}

export default AmountCounter