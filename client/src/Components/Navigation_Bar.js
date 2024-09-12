import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

const NavDrawer = ({ drawerState, drawerHandler, pageHandler }) => {
    const nav = useNavigate();
    return (
        <Drawer
            sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 200 } }}
            anchor="left"
            open={drawerState}
            onClose={() => drawerHandler(!drawerState)}
        >
            <div
                onClick={() => drawerHandler(!drawerState)}
                onKeyDown={() => drawerHandler(!drawerState)}
            ></div>
            <List key='drawer'>
                <ListItem key='home'>
                    <ListItemButton onClick={() => nav('/Home')} htmlFor='home' sx={{ textAlign: 'left' }}>
                        <ListItemText primary='Home' />
                    </ListItemButton>
                </ListItem>
                <ListItem key='report_form'>
                    <ListItemButton onClick={() => nav('/IRP')} htmlFor='report_form' sx={{ textAlign: 'left' }}>
                        <ListItemText primary='Report Form' />
                    </ListItemButton>
                </ListItem>
                <ListItem key='order'>
                    <ListItemButton onClick={() => nav('/Order')} htmlFor='order' sx={{ textAlign: 'left' }}>
                        <ListItemText primary='Order Form' />
                    </ListItemButton>
                </ListItem>
                <ListItem key='schedule'>
                    <ListItemButton onClick={() => nav('/Schedule')} htmlFor='schedule' sx={{ textAlign: 'left' }}>
                        <ListItemText primary='Schedule' />
                    </ListItemButton>
                </ListItem>

            </List>
        </Drawer>
    )
}

export const NavBar = ({ logoutHandler }) => {
    var [drawerState, toggleDrawer] = useState(false);

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => toggleDrawer(!drawerState)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} children='Inventory Manager' />
                        <Button color='inherit' onClick={logoutHandler} children='Logout' />


                    </Toolbar>
                </AppBar>
                <NavDrawer
                    drawerState={drawerState}
                    drawerHandler={toggleDrawer}
                />
            </Box>
        </div>
    )
}

export default NavBar;