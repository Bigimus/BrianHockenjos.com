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
    styles,
    name,
    timeframe,
    description,
    github,
    path = "",
  }) => {
    return (
      <div>
        <Card raised sx={styles}>
          <CardContent>
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
              {github !== "" ? (
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
              ) : (
                <div />
              )}
              {path !== "" ? (
                <Tooltip
                  title={<h2 style={{ fontSize: "18px" }} children="Demo" />}
                >
                  <IconButton onClick={() => setIsOpen(true)}>
                    <ExitToAppIcon sx={{ fontSize: "32px" }} />
                  </IconButton>
                </Tooltip>
              ) : (
                <div />
              )}
            </Stack>
          </CardActions>
        </Card>
      </div>
    );
  };

  return (
    <div>
      <Stack direction="row" sx={{ mb: 7.5 }}>
        <Stack sx={{ width: 1 / 2, mt: 2.5 }}>
          <Box
            sx={{
              minHeight: {
                xs: "17rem",
                sm: "13rem",
                md: "9rem",
                lg: "5rem",
              },
            }}
            width={1}
          />
          {odd_projects.map((project) => (
            <ProjectEntry
              key={project.id}
              styles={{
                mb: 5,
                mr: 2.5,
                ml: 5,
              }}
              name={project.name}
              timeframe={project.timeframe}
              description={project.description}
              github={project.link}
              path={project.path}
            />
          ))}
          <Box
            sx={{
              minHeight: {
                xs: "17rem",
                sm: "13rem",
                md: "9rem",
                lg: "5rem",
              },
            }}
            width={1}
          />
        </Stack>
        <Stack sx={{ width: 1 / 2, mt: 2.5 }}>
          <Box
            sx={{
              minHeight: {
                xs: "17rem",
                sm: "13rem",
                md: "9rem",
                lg: "5rem",
              },
            }}
            width={1}
          />
          {even_projects.map((project) => (
            <ProjectEntry
              key={project.id}
              styles={{
                mb: 5,
                mr: 5,
                ml: 2.5,
              }}
              name={project.name}
              timeframe={project.timeframe}
              description={project.description}
              github={project.link}
              path={project.path}
            />
          ))}
          <Box
            sx={{
              minHeight: {
                xs: "17rem",
                sm: "13rem",
                md: "9rem",
                lg: "5rem",
              },
            }}
            width={1}
          />
        </Stack>
      </Stack>
      <InventoryTrackerPopup state={isOpen} stateHandler={setIsOpen} />
    </div>
  );
};

export default ProjectPage;
