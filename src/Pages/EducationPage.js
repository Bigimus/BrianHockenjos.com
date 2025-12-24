import {
  Card,
  CardContent, 
  Typography,
  Stack,
  Link,
  Box,
} from "@mui/material";

import {useEffect, useState } from "react";


import Education from "../Data/Education.json";
import SkillsCard from "./Components/SkillsCard.js"
import "../Styles/Components.css"

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

const EducationPage = ({}) => {
  return (
    <Box
      sx={{
        height: "100vh", // full screen height
        overflowY: "auto", // scroll if needed
        width: "100%",
      }}
    >
      <Stack>
        <EducationCard />
      </Stack>
    </Box>
  );
};

export default EducationPage;