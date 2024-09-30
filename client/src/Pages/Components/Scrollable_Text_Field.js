import React from 'react'
import { TextField } from '@mui/material'

const ScrollableTextField = ({ data, handler, disabled, rows }) => {
    var value = data.map(({ resource, amount }) => `${resource}\nAmount: x${amount}\nLink:\n`)
    value = value.toString().replace(/,/g, '\n')

  return (
    <TextField
        multiline
        rows={rows}
        fullWidth
        style={{ overflow: 'auto' }}
        value={value}
        disabled={disabled}
        onChange={e => handler(e.target.value)}
    />
  )
}

export default ScrollableTextField