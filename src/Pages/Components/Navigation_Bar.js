import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ContactSupport from "@mui/icons-material/ContactSupport";
import TipsAndUpdates from "@mui/icons-material/TipsAndUpdates";
import Person from "@mui/icons-material/Person";
import "../../Styles/Components.css";

const iconStyles = {
  fontSize: {
    xs: "2rem",
    sm: "2.25rem",
    md: "2.5rem",
    lg: "2.75rem",
  },
};
const NavList = ({ drawerHandler, drawerState }) => {
  const nav = useNavigate();

  return (
    <List key="drawer">
      <ListItemButton
        onClick={() => (nav("/"), drawerHandler(!drawerState))}
        htmlFor="home"
      >
        <ListItemIcon
          sx={{ width: 1 / 3 }}
          children={
            <HomeIcon
              sx={iconStyles}
            />
          }
        />

        <ListItemText
          primary={
            <Typography
              variant="body1"
              sx={iconStyles}
              children="Home"
            />
          }
        />
      </ListItemButton>

      <ListItemButton
        onClick={() => (nav("/About"), drawerHandler(!drawerState))}
        htmlFor="about"
      >
        <ListItemIcon
          sx={{ width: 1 / 3 }}
          children={
            <Person
              sx={iconStyles}
            />
          }
        />

        <ListItemText
          primary={
            <Typography
              variant="body1"
              sx={iconStyles}
              children="About"
            />
          }
        />
      </ListItemButton>

      <ListItemButton
        onClick={() => (nav("/Projects"), drawerHandler(!drawerState))}
        htmlFor="projects"
      >
        <ListItemIcon
          sx={{ width: 1 / 3 }}
          children={
            <TipsAndUpdates
              sx={iconStyles}
            />
          }
        />

        <ListItemText
          primary={
            <Typography
              variant="body1"
              sx={iconStyles}
              children="Projects"
            />
          }
        />
      </ListItemButton>

      <ListItemButton
        onClick={() => (nav("/Contact"), drawerHandler(!drawerState))}
        htmlFor="contact"
      >
        <ListItemIcon
          sx={{ width: 1 / 3 }}
          children={
            <ContactSupport
              sx={iconStyles}
            />
          }
        />

        <ListItemText
          primary={
            <Typography
              variant="body1"
              sx={iconStyles}
              children="Contact"
            />
          }
        />
      </ListItemButton>
    </List>
  );
};
const NavDrawer = ({ drawerState, drawerHandler }) => {
  return (
    <Drawer
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: {
            xs: 250,
            sm: 275,
            md: 300,
            lg: 325,
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

export const NavBar = ({}) => {
  var [drawerState, toggleDrawer] = useState(false);
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/Home":
        setTitle("Home");
        break;
      case "/About":
        setTitle("About Me");
        break;
      case "/Contact":
        setTitle("Contact Me");
        break;
      case "/Projects":
        setTitle("My Projects");
        break;
      default:
        setTitle("Welcome!");
    }
  });

  return (
    <Box
      position="fixed"
      sx={{
        height: {
          xs: 85,
          sm: 90,
          md: 95,
          lg: 100,
        },
      }}
    >
      <AppBar>
        <Toolbar
          sx={{
            position: "static",
            height: 1,
            width: 1,
            backgroundColor: "#f26852",
            display: "flex",
            alignItems: "center",
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
            <Typography
              component="div"
              children={title}
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "2.25rem",
                  md: "2.5rem",
                  lg: "2.75rem",
                },
              }}
            />
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(!drawerState)}
            sx={{ pointerEvents: "auto" }}
          >
            <MenuIcon sx={{ fontSize: "40px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <NavDrawer drawerState={drawerState} drawerHandler={toggleDrawer} />
    </Box>
  );
};

export default NavBar;
