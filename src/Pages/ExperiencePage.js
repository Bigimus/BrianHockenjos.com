import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Stack,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

import { React, useEffect, useState } from "react";

import { maxWidth, padding, styled, width } from "@mui/system";

import Experience from "../Data/Experience.json";
const dividerStyles = {
  mb: 1.25,
};
const CardStyles = {
  marginTop: {
    xs: 4,
    sm: 6,
    md: 8,
    lg: 10,
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
    xs: "80%",
    sm: "85%",
    md: "90%",
    lg: "95%",
  },
};
const iconStyles = {
  fontSize: {
    xs: "3.85rem",
    sm: "3.9rem",
    md: "3.95rem",
    lg: "4rem",
  },
};
const formatExperiences = (data) =>
  Object.values(data).map((entry) => ({
    company: entry.Company,
    position: entry.Role,
    timeframe: entry.TimeFrame,
    descriptions: entry.Description.map((desc, idx) => ({
      id: idx,
      info: desc,
    })),
  }));

const ExperienceCard = ({}) => {
  const DescriptionList = styled(List)({
    listStyleType: "disc", // Sets the bullet style
    paddingLeft: "20px", // Adds some left padding for the bullets
    "& .MuiListItem-root": {
      display: "list-item", // Changes ListItem to display as list items
      listStyleType: "inherit", // Inherit bullet style from parent
    },
  });

  const [experiences, setExperience] = useState([]);

  useEffect(() => {
    const formatted = formatExperiences(Experience);
    setExperience(formatted);
  }, []);

  const ExperienceEntry = ({ company, position, timeframe, description }) => {
    return (
      <Box>
        <Stack direction={"row"} sx={{ width: 1 }}>
          <Typography
            children={position}
            align="left"
            width={1}
            fontSize={"28px"}
          />
          <Typography
            children={timeframe}
            align="right"
            width={1}
            fontSize={"20px"}
          />
        </Stack>
        <Typography children={company} align="left" fontSize={"20px"} />
        <DescriptionList disablePadding>
          {description.map((desc) => (
            <ListItem key={desc.id} disablePadding>
              <ListItemText primary={desc.info} />
            </ListItem>
          ))}
        </DescriptionList>
      </Box>
    );
  };
  return (
    <Card raised sx={CardStyles}>
      <CardContent>
        <Typography children={"Experience"} fontSize={"48px"} align="center" />
        <Divider sx={dividerStyles} />
        {experiences.map((experience) => (
          <ExperienceEntry
            company={experience.company}
            position={experience.position}
            timeframe={experience.timeframe}
            description={experience.descriptions}
          />
        ))}
      </CardContent>
    </Card>
  );
};

const ExperiencePage = ({}) => {
  return (
    <Box
      sx={{
        height: "100vh", // full screen height
        overflowY: "auto", // scroll if needed
        width: "100%",
      }}
    >
      <Stack direction={'row'}>
        <ExperienceCard />
      </Stack>
    </Box>
  );
};

export default ExperiencePage;