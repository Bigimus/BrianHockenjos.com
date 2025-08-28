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
import Education from "../Data/Education.json";
const dividerStyles = {
  mb: 1.25,
};
const iconStyles = {
  fontSize: {
    xs: "3.85rem",
    sm: "3.9rem",
    md: "3.95rem",
    lg: "4rem",
  },
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

const formatDegrees = (data) =>
  Object.values(data).map((entry) => ({
    school: entry.School,
    location: entry.Location,
    timeframe: entry.TimeFrame,
    degree: entry.Degree,
    link: entry.Link,
  }));
const EducationCard = ({}) => {
  const [degrees, setDegrees] = useState([]);
  useEffect(() => {
    const formatted = formatDegrees(Education);
    setDegrees(formatted);
  }, []);

  const EducationEntry = ({
    mb,
    link,
    school,
    location,
    degree,
    timeframe,
  }) => {
    return (
      <Stack mb={mb}>
        <Stack direction={"row"} sx={{ width: 1 }}>
          <Link
            href={link}
            underline="hover"
            children={school}
            align="left"
            width={1}
            fontSize={"24px"}
          />
          <Typography
            children={location}
            align="right"
            width={1}
            fontSize={"20px"}
          />
        </Stack>
        <Stack direction={"row"} sx={{ width: 1 }}>
          <Typography
            children={degree}
            align="left"
            width={1}
            fontSize={"20px"}
          />
          <Typography
            children={timeframe}
            align="right"
            width={1}
            fontSize={"16px"}
          />
        </Stack>
      </Stack>
    );
  };
  return (
    <Card raised sx={CardStyles}>
      <CardContent>
        <Typography children={"Education"} fontSize={"48px"} align="center" />
        <Divider sx={dividerStyles} />
        {degrees.map((degree) => (
          <EducationEntry
            school={degree.school}
            location={degree.location}
            degree={degree.degree}
            timeframe={degree.timeframe}
            link={degree.link}
          />
        ))}
      </CardContent>
    </Card>
  );
};

// const SkillsCard = ({}) => {
//   const [api_skills, setSkills] = useState([]);
//   useEffect(() => {
//     fetch("/api/skills")
//       .then((response) => response.json())
//       .then((data) => setSkills(data))
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);
//   const SkillsEntry = ({ language, libraries }) => {
//     return (
//       <div>
//         <Stack direction={"row"}>
//           <Typography children={language} fontSize={"24px"} />
//         </Stack>
//         <Stack direction={"row"} spacing={1.5}>
//           {libraries.map((library) => (
//             <Typography key={library.id} children={library.name} />
//           ))}
//         </Stack>
//       </div>
//     );
//   };
//   return (
//     <Card raised sx={CardStyles}>
//       <CardContent>
//         <Typography children={"Skills"} fontSize={"48px"} align="center" />
//         <Divider sx={dividerStyles} />
//         {api_skills.map((skill) => (
//           <SkillsEntry
//             key={skill.id}
//             language={skill.language}
//             libraries={skill.libraries}
//           />
//         ))}
//       </CardContent>
//     </Card>
//   );
// };

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

const AboutPage = ({}) => {
  return (
    <Box
      sx={{
        height: "100vh", // full screen height
        overflowY: "auto", // scroll if needed
        width: "100%",
      }}
    >
      <Stack width={1} alignItems={"center"} spacing={4} sx={{}}>
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
        <ExperienceCard />
        <EducationCard />
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
    </Box>
  );
};

export default AboutPage;
