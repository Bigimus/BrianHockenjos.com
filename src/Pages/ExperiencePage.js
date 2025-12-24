import {
  Card,
  CardContent,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import { useEffect, useState } from "react";
import { styled } from "@mui/system";

import Experience from "../Data/Experience.json";
import "../Styles/Components.css";
import { DividerStyles, ExperienceCardStyles } from "../Styles/ComponentStyles.js"

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
        <Divider sx={DividerStyles}/>
      </Box>
    );
  };
  return (
    <Card raised sx={ExperienceCardStyles}>
      <CardContent>
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