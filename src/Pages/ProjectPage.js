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

/* Local Imports */ 
import {  
  ProjectCardStyles,
  NameStyles,
  TimeframeStyles,
  DescriptionStyles,
  ScreenStyles
} from "../Styles/ProjectStyles";
const formateProjects = (data) =>
  Object.values(data).map((entry) => ({
    name: entry.Name,
    timeframe: entry.Timeframe,
    link: entry.Link,
    description: entry.Description,
  }));
const ProjectPage = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <Card raised sx={ProjectCardStyles}>
          <CardContent sx={{flexGrow: 1}}>
            <Stack direction={"row"}>
              <Typography
                children={name}
                sx={NameStyles}
              />
              <Typography
                children={timeframe}
                sx={TimeframeStyles}
              />
            </Stack>
            <Typography children={description} sx={DescriptionStyles} />
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
    <Box sx={ScreenStyles}>
      <Stack direction="row"width={1}>
        <Stack width={'50%'}>
          {odd_projects.map((project) => (
            <ProjectEntry
              name={project.name}
              timeframe={project.timeframe}
              description={project.description}
              github={project.link}
              path={project.path}
            />
          ))}
        </Stack>
        <Stack width={'50%'}>
          {even_projects.map((project) => (
            <ProjectEntry
              name={project.name}
              timeframe={project.timeframe}
              description={project.description}
              github={project.link}
              path={project.path}
            />
          ))}
        </Stack>
      </Stack>
      <InventoryTrackerPopup state={isOpen} stateHandler={setIsOpen} />
      <Box sx={{height: 20}}/>
    </Box>
  );
};

export default ProjectPage;
