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

/* Local Imports */
import { 
  ExperienceCardStyles, 
  JobTitleStyles, 
  JobLocationStyles, 
  JobDescriptionStyles, 
  JobListStyles, 
  JobTimelineStyles,
} from "../Styles/JobStyles.js"
import { DividerStyles } from "../Styles/ComponentStyles.js"
import "../Styles/Components.css";
import Experience from "../Data/Experience.json";

/* 
  To do...
  - Reformat entire layout. Each individual job-experience will be it's own card. 
  - Somehow implement adding information regarding the venue & regarding Live Nation and what we do.. 
    Be it on a pop-up, or attempting to flip the card and put the venue / company information on the "back" of the experience card.
*/

const formatExperiences = (data) =>
  Object.values(data).map((entry) => ({
    company: entry.Company,
    position: entry.Role,
    timeframe: entry.TimeFrame,
    descriptions: entry.Description.map((desc, idx) => ({
      id: idx,
      info: desc,
    })),
    isLast: entry.isLast
  }));

const ExperienceCard = ({ }) => {
  const DescriptionList = styled(List)({
    listStyleType: "disc",
    paddingLeft: "20px",
    "& .MuiListItem-root": {
      display: "list-item",
      listStyleType: "inherit",
    },
  });

  const [experiences, setExperience] = useState([]);

  useEffect(() => {
    const formatted = formatExperiences(Experience);
    setExperience(formatted);
  }, []);

  const ExperienceEntry = ({ company, position, timeframe, description, isLast }) => {
    return (
      <Box>
        <Stack direction={"row"} display={'flex'}>
          <Typography
            children={position}
            sx={JobTitleStyles}

          />
          <Typography
            children={timeframe}
            sx={JobTimelineStyles}
          />
        </Stack>
        <Typography
          children={company}
          sx={JobLocationStyles}
        />
        <DescriptionList disablePadding sx={JobDescriptionStyles}>
          {description.map((desc) => (
            <ListItem key={desc.id} disablePadding sx={JobListStyles}>
              <ListItemText primary={desc.info} sx={JobDescriptionStyles} />
            </ListItem>
          ))}
        </DescriptionList>
        {!isLast && <Divider sx={DividerStyles} />}
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
            isLast={experience.isLast}
          />
        ))}
      </CardContent>
    </Card>
  );
};

const ExperiencePage = ({ }) => {
  return (
    <Box
      sx={{
        height: "100vh", 
        overflowY: "auto",
      }}
    >
      <ExperienceCard />
      <Box sx={{ height: 1/12}} />
    </Box>
  );
};

export default ExperiencePage;