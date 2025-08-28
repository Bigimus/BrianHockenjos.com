import React from "react";
import { AppBar, Toolbar, IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../../Styles/Components.css";

const iconStyles = {
  fontSize: {
    xs: "3.85rem",
    sm: "3.9rem",
    md: "3.95rem",
    lg: "4rem",
  },
};
const ToolBar = () => {
  return (
    <AppBar
      sx={{
        top: "auto",
        bottom: 0,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "center",
          backgroundColor: "#f26852",
          minHeight: {
            xs: "12.5rem",
            sm: "10rem",
            md: "9rem",
            lg: "5rem",
          },
        }}
      >
        <Tooltip title="Visit Instagram">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Instagram"
            href="https://www.instagram.com/brian_hockenjos/"
            sx={{
              marginRight: "5%",
            }}
          >
            <InstagramIcon sx={iconStyles} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Visit GitHub">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Github"
            href="https://github.com/Bigimus"
            sx={{
              marginRight: "5%",
            }}
          >
            <GitHubIcon sx={iconStyles} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Visit X">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="X"
            href="https://x.com/brian_hockenjos"
            sx={{
              marginRight: "5%",
            }}
          >
            <XIcon sx={iconStyles} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Visit Facebook">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Facebook"
            href="https://www.facebook.com/profile.php?id=100012095655385"
            sx={{
              marginRight: "5%",
            }}
          >
            <FacebookIcon sx={iconStyles} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Visit Linkedin">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/brian-hockenjos/"
          >
            <LinkedInIcon sx={iconStyles} />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default ToolBar;
