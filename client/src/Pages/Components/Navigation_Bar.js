import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home'
import ContactSupport from '@mui/icons-material/ContactSupport'
import TipsAndUpdates from '@mui/icons-material/TipsAndUpdates'
import Person from '@mui/icons-material/Person'

const NavList = ({drawerHandler, drawerState}) => {
    const nav = useNavigate();

    return (
    <List key='drawer'>
    
        <ListItemButton onClick={() => (nav('/'), drawerHandler(!drawerState))} htmlFor='home'>
            <ListItemIcon sx={{ width: 1/3}} children={<HomeIcon sx={{ fontSize: '48px'}}/>} />

            <ListItemText 
                primary = {
                    <Typography variant = "body1" sx = {{ fontSize: '48px' }} children = 'Home' />
                }/>
        </ListItemButton>

        <ListItemButton onClick={() => (nav('/About'), drawerHandler(!drawerState))} htmlFor='about'>
            <ListItemIcon sx={{ width: 1/3}} children = {<Person sx={{ fontSize: '48px'}} />} />
        
            <ListItemText 
                primary = {
                    <Typography variant="body1" sx={{ fontSize: '48px'}} children = 'About' />
            } />
        </ListItemButton>

        <ListItemButton onClick={() => (nav('/Projects'), drawerHandler(!drawerState))} htmlFor='projects'>
            <ListItemIcon sx={{ width: 1/3}} children = {<TipsAndUpdates sx={{ fontSize: '48px'}} />} />
        
            <ListItemText 
                primary = {
                    <Typography variant="body1" sx={{ fontSize: '48px'}} children = 'Projects' />
            } />
        </ListItemButton>

        <ListItemButton onClick={() => (nav('/Contact'), drawerHandler(!drawerState))} htmlFor='contact'>
            <ListItemIcon sx={{ width: 1/3}} children = {<ContactSupport sx={{ fontSize: '48px'}} />} />

            <ListItemText 
                primary={
                <Typography variant="body1" sx={{ fontSize: '48px' }} children = 'Contact' />
            } />
        </ListItemButton>
    </List>
    )
}
const NavDrawer = ({ drawerState, drawerHandler }) => {
    return (
        <Drawer
            sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 1/4 } }}
            anchor="left"
            open={drawerState}
            onClose={() => drawerHandler(!drawerState)}
        >
            <div
                onClick={() => drawerHandler(!drawerState)}
                onKeyDown={() => drawerHandler(!drawerState)}
            ></div>
            <NavList drawerHandler={drawerHandler} drawerState={drawerState}/>
        </Drawer>
    )
}

export const NavBar = ({ }) => {
    var [drawerState, toggleDrawer] = useState(false);

    return (
            <Box sx={{ height: 125, width: 1 }}>
                <AppBar position="static" sx={{ bgcolor: '#eb4634', height: 1, justifyContent: 'center'}}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => toggleDrawer(!drawerState)}
                        >
                            <MenuIcon sx={{ fontSize: '48px'}}/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '44px', ml: 2.5 }} children='Brian Hockenjos' />
                    </Toolbar>
                </AppBar>
                <NavDrawer
                    drawerState={drawerState}
                    drawerHandler={toggleDrawer}
                />
            </Box>
    )
}

export default NavBar;