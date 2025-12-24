/* React Imports */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

/* Icons */
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ContactSupport from "@mui/icons-material/ContactSupport";
import TipsAndUpdates from "@mui/icons-material/TipsAndUpdates";
import SchoolIcon from '@mui/icons-material/School';
import BadgeIcon from '@mui/icons-material/Badge';

/* Local Imports */
import "../../Styles/Components.css";
import Pages from "../../Data/Pages.json";

/* 
Steps to add a new page...
1) Add an entry into Data/Pages.json
2) Add import for the icon
3) Add an entry into the iconMap
4) Add an entry into the useEffect within the Navbar Component
*/

const iconStyles = {
  fontSize: {
    xs: "3.45rem",
    sm: "3.55rem",
    md: "3.65rem",
    lg: "3.75rem",
  },
};

const textStyles = {
  fontSize: {
    xs: "2.7rem",
    sm: "2.8rem",
    md: "2.9rem",
    lg: "3rem"
  }
}

const NavList = ({ drawerHandler, drawerState }) => {
  const iconMap = {
    HomeIcon: HomeIcon,
    SchoolIcon: SchoolIcon,
    BadgeIcon: BadgeIcon,
    TipsAndUpdates: TipsAndUpdates,
    ContactSupport: ContactSupport
  };
  const nav = useNavigate();

  const PageEntry = ({ name, icon }) => {
    const Icon = iconMap[icon] ?? HomeIcon;
    return (
      <ListItemButton
        onClick={() => (nav(`/${name}`), drawerHandler(!drawerState))}
        htmlFor={name}
      >
        <ListItemIcon
          sx={{ width: 1 / 4 }}
          children={<Icon sx={iconStyles} />}
        />

        <ListItemText
          primary={
            <Typography variant="body1" sx={textStyles} children={name} />
          }
        />
      </ListItemButton>
    )
  }

  const PageList = ({ data }) => {
    return (
      <List>
        {Object.entries(data).map(([name, icon]) => (
          <PageEntry key={name} name={name} icon={icon.icon} />
        ))}
      </List>
    )
  }
  return (
    <PageList data={Pages} />
  );
};

const NavDrawer = ({ drawerState, drawerHandler }) => {
  return (
    <Drawer
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: {
            xs: "20rem",
            sm: "25rem",
            md: "30rem",
            lg: "35rem",
          },
        },
      }}
      anchor="left"
      open={drawerState}
      onClose={() => drawerHandler(!drawerState)}
    >
      <div
        onClick={() => drawerHandler(!drawerState)}
        onKeyDown={() => drawerHandler(!drawerState)}
      ></div>
      <NavList drawerHandler={drawerHandler} drawerState={drawerState} />
    </Drawer>
  );
};

export const NavBar = ({ }) => {
  var [drawerState, toggleDrawer] = useState(false);
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/Home":
        setTitle("Home");
        break;
      case "/Education":
        setTitle("My Education & Skills");
        break;
      case "/Experience":
        setTitle("My Experience");
        break;
      case "/Contact":
        setTitle("Contact Me");
        break;
      case "/Projects":
        setTitle("My Projects");
        break;
      case "/Skills":
        setTitle("My Skills");
        break;
      default:
        setTitle("Welcome!");
    }
  });

  return (
    <Box position="fixed" sx={{}}>
      <AppBar>
        <Toolbar
          sx={{
            position: "static",
            height: 1,
            width: 1,
            backgroundColor: "#f26852",
            display: "flex",
            alignItems: "center",
            minHeight: {
              xs: "17rem",
              sm: "13rem",
              md: "9rem",
              lg: "5rem",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              textAlign: "center",
            }}
          >
            <Typography component="div" children={title} sx={iconStyles} />
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(!drawerState)}
            sx={{ pointerEvents: "auto" }}
          >
            <MenuIcon sx={iconStyles} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <NavDrawer drawerState={drawerState} drawerHandler={toggleDrawer} />
    </Box>
  );
};

export default NavBar;
