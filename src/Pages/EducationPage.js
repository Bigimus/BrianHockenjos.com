import { Card, CardContent, Typography, Stack, Link, Box } from "@mui/material";
import { useEffect, useState } from "react";

/* Local Imports */
import Education from "../Data/Education.json";
import "../Styles/Components.css";
import {
  DividerStyles,
  CardStyles,
  Iconstyles,
  LinkStyles, 
  LocationStyles,
  TimeframeStyles,
  DegreeStyles,
  ScreenStyles
} from "../Styles/EducationStyles";

const formatDegrees = (data) =>
  Object.values(data).map((entry) => ({
    school: entry.School,
    location: entry.Location,
    timeframe: entry.Timeframe,
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
          <Link href={link} children={school} sx={LinkStyles} />
          <Typography children={location} sx={LocationStyles} />
        </Stack>
        <Stack direction={"row"} sx={{ width: 1 }}>
          <Typography children={degree} sx={DegreeStyles} />
          <Typography children={timeframe} sx={TimeframeStyles} />
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
    <Box sx={ScreenStyles}>
      <Stack>
        <EducationCard />
      </Stack>
    </Box>
  );
};

export default EducationPage;
