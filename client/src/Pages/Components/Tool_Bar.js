import React from 'react'
import { AppBar, Toolbar, IconButton, Tooltip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../../Styles/Components.css'


const ToolBar = () => {
    return (
        <AppBar sx={{ 
            top: 'auto', 
            bottom: 0, 
            height: {
                xs: 60,
                sm: 65,
                md: 70,
                lg: 75
            }
            }}>
            <Toolbar 
                sx={{
                    justifyContent:'center', 
                    backgroundColor:'#f26852',
                    height: 1
                    }}>
                <Tooltip title='Visit Instagram'>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="Instagram"
                        href='https://www.instagram.com/brian_hockenjos/'
                        sx={{ 
                            marginRight:'5%'
                        }}
                    >
                        <InstagramIcon sx={{ 
                            fontSize: {
                                xs: '2rem',
                                sm: '2.25rem',
                                md: '2.5rem',
                                lg: '3rem' 
                                }
                            
                            }}/>
                    </IconButton>
                </Tooltip>

                <Tooltip title='Visit GitHub'>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="Instagram"
                        href='https://github.com/Bigimus'
                        sx={{
                            marginRight:'5%'
                        }}

                    >
                        <GitHubIcon sx={{                             
                            fontSize: {
                                xs: '2rem',
                                sm: '2.25rem',
                                md: '2.5rem',
                                lg: '3rem' 
                                }
                            
                            }}/>
                    </IconButton>
                </Tooltip>

                <Tooltip title='Visit X/Twitter'>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="Instagram"
                        href='https://x.com/brian_hockenjos'
                        sx={{
                            marginRight:'5%'
                        }}

                    >
                        <XIcon sx={{                             
                            fontSize: {
                                xs: '2rem',
                                sm: '2.25rem',
                                md: '2.5rem',
                                lg: '3rem' 
                                }
                            
                            }}/>
                    </IconButton>
                </Tooltip>

                <Tooltip title='Visit Facebook'>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="Instagram"
                        href='https://www.facebook.com/profile.php?id=100012095655385'
                        sx={{
                            marginRight:'5%'
                        }}

                    >
                        <FacebookIcon sx={{ 
                            fontSize: {
                                xs: '2rem',
                                sm: '2.25rem',
                                md: '2.5rem',
                                lg: '3rem' 
                                }
                            
                            }}/>
                    </IconButton>
                </Tooltip>

                <Tooltip title='Linkedin'>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label= "Visit LinkedIn"
                        href='https://www.linkedin.com/in/brian-hockenjos/'
                    >
                        <LinkedInIcon sx={{ 
                            fontSize: {
                                xs: '2rem',
                                sm: '2.25rem',
                                md: '2.5rem',
                                lg: '3rem' 
                                }
                            
                            }}/>
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}

export default ToolBar