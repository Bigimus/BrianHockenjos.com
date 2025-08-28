import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Stack,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import InventoryTrackerPopup from "./Inventory-Tracker/InventoryTrackerPopup";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Projects from "../Data/Projects.json";
import { Height } from "@mui/icons-material";

const toolbarSpacing = {
  minHeight: {
    xs: "17rem",
    sm: "13rem",
    md: "9rem",
    lg: "5rem",
  },
};
const CardStyles = {
  marginTop: {
    xs: 1.75,
    sm: 2,
    md: 2.25,
    lg: 2.5,
  },
  marginLeft: {
    xs: 1.75,
    sm: 2,
    md: 2.25,
    lg: 2.5,
  },
  marginRight: {
    xs: 1.75,
    sm: 2,
    md: 2.25,
    lg: 2.5,
  },
  paddingLeft: {
    xs: 1.75,
    sm: 2,
    md: 2.25,
    lg: 2.5,
  },
  paddingRight: {
    xs: 1.75,
    sm: 2,
    md: 2.25,
    lg: 2.5,
  },
  width: {
    xs: "85%",
    sm: "87.5%",
    md: "90%",
    lg: "92.5%",
  },
  minHeight: {
    xs: "10rem",
    sm: "12rem",
    md: "14rem",
    lg: "16rem",
  },
  display: 'flex',
  flexDirection: "column",
  justifyContent: "space-between"
};
const formateProjects = (data) =>
  Object.values(data).map((entry) => ({
    name: entry.Name,
    timeframe: entry.Timefram,
    link: entry.Link,
    description: entry.Description,
  }));
const ProjectPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [api_projects, setProjects] = useState([]);

  useEffect(() => {
    const formatted = formateProjects(Projects);
    setProjects(formatted);
  }, []);

  const odd_projects = api_projects.filter((_, index) => index % 2 === 0);
  const even_projects = api_projects.filter((_, index) => index % 2 !== 0);

  const ProjectEntry = ({
    name,
    timeframe,
    description,
    github,
  }) => {
    return (
      <div>
        <Card raised sx={CardStyles}>
          <CardContent sx={{flexGrow: 1}}>
            <Stack direction={"row"}>
              <Typography
                children={name}
                align="left"
                width={1}
                sx={{ fontSize: "22px" }}
              />
              <Typography
                children={timeframe}
                align="right"
                width={1}
                sx={{ fontSize: "18px" }}
              />
            </Stack>
            <Typography children={description} sx={{ fontSize: "18px" }} />
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Stack direction={"row"}>
                <Tooltip
                  title={
                    <h2
                      style={{ fontSize: "18px" }}
                      children={`${name} GitHub`}
                    />
                  }
                >
                  <IconButton href={github}>
                    <GitHubIcon sx={{ fontSize: "32px" }} />
                  </IconButton>
                </Tooltip>
            </Stack>
          </CardActions>
        </Card>
      </div>
    );
  };

  return (
    <Box
      sx={{
        height: "100vh", // full screen height
        overflowY: "auto", // scroll if needed
        width: "100%",
      }}
    >
      <Stack direction="row"width={1}>
        <Stack width={1}>
          <Box sx={toolbarSpacing} width={1} />
          {odd_projects.map((project) => (
            <ProjectEntry
              name={project.name}
              timeframe={project.timeframe}
              description={project.description}
              github={project.link}
              path={project.path}
            />
          ))}
          <Box sx={toolbarSpacing} width={1} />
        </Stack>
        <Stack width={1}>
          <Box sx={toolbarSpacing} width={1} />
          {even_projects.map((project) => (
            <ProjectEntry
              name={project.name}
              timeframe={project.timeframe}
              description={project.description}
              github={project.link}
              path={project.path}
            />
          ))}
          <Box sx={toolbarSpacing} width={1} />
        </Stack>
      </Stack>
      <InventoryTrackerPopup state={isOpen} stateHandler={setIsOpen} />
    </Box>
  );
};

export default ProjectPage;
