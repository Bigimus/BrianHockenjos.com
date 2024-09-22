import React from 'react'
import { AppBar, Toolbar, IconButton, Tooltip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'

const ToolBar = () => {
    return (
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar sx={{ bgcolor: '#eb4634', justifyContent: 'center' }}>
                <Tooltip title='Visit Instagram'>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="Instagram"
                        href='https://www.instagram.com/brian_hockenjos/'
                        sx={{ mr: 5 }}
                    >
                        <InstagramIcon sx={{ fontSize: '48px' }} />
                    </IconButton>
                </Tooltip>

                <Tooltip title='Visit GitHub'>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="Instagram"
                        href='https://github.com/Bigimus'
                        sx={{ mr: 5 }}
                    >
                        <GitHubIcon sx={{ fontSize: '48px' }} />
                    </IconButton>
                </Tooltip>

                <Tooltip title='Visit X/Twitter'>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="Instagram"
                        href='https://x.com/brian_hockenjos'
                    >
                        <XIcon sx={{ fontSize: '48px' }} />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}

export default ToolBar