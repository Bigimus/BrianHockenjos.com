import { Card, CardActions, CardContent, Button, Typography, Stack, Divider, Link } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react';

const dividerStyles = { mb: 1.25 }

const EducationCard = ({ }) => {
    const [degrees, setDegrees] = useState([]);
    useEffect(() => {
      fetch("/api/education")
        .then((response) => response.json())
        .then((data) => setDegrees(data))
        .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const EducationEntry = ({ mb, link, school, location, degree, timeframe }) => {
        return (
            <Stack mb={mb}>
                <Stack direction={'row'} sx={{ width: 1 }}>
                    <Link href={link} underline='hover' children={school} align='left' width={1} fontSize={'20px'} />
                    <Typography children={location} align='right' width={1} fontSize={'20px'} />
                </Stack>
                <Stack direction={'row'} sx={{ width: 1 }}>
                    <Typography children={degree} align='left' width={1} fontSize={'16px'} />
                    <Typography children={timeframe} align='right' width={1} fontSize={'16px'} />
                </Stack>
            </Stack>
        )
    }
    return (
        <Card raised sx={{ width: 1 / 2 }}>
            <CardContent>
                <Typography children={'Education'} fontSize={'48px'} align='center' />
                <Divider sx={dividerStyles} />
                {degrees.map((degree) => (
                    <EducationEntry
                        key={degree.id}
                        school={degree.school}
                        location={degree.location}
                        degree={degree.degree}
                        timeframe={degree.timeframe}
                        link={degree.link}
                        mb={2.5}
                    />
                ))}
            </CardContent>
        </Card>
    )
}
const SkillsCard = ({ }) => {
    const [api_skills, setSkills] = useState([]);
    useEffect(() => {
      fetch("/api/skills")  // Since the proxy is set, you don't need the full URL.
        .then((response) => response.json())
        .then((data) => setSkills(data))
        .catch((error) => console.error("Error fetching products:", error));
    }, []);
    const SkillsEntry = ({ id, language, libraries }) => {
        return (
            <div id={id}>
                <Typography children={language} fontSize={'24px'} />
                <Stack direction={'row'} spacing={1.5}>
                {libraries.map((library) => (
                    <Typography key={library.id} children={library.name} />
                ))}
                </Stack>
            </div>
        )
    }
    return (
        <Card raised sx={{ width: 1 / 2 }}>
            <CardContent>
                <Typography children={'Skills'} fontSize={'48px'} align='center' />
                <Divider sx={dividerStyles} />
                {api_skills.map((skill) => (
                    <SkillsEntry key={skill.id} language={skill.language} libraries={skill.libraries}/>
                ))}
            </CardContent>

            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

const ExperienceCard = ({ }) => {
    const [experiences, setExperience] = useState([]);
    useEffect(() => {
      fetch("/api/experience")  // Since the proxy is set, you don't need the full URL.
        .then((response) => response.json())
        .then((data) => setExperience(data))
        .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const ExperienceEntry = ({ name, timeframe, description }) => {
        return (
            <div>
                <Stack direction={'row'} sx={{ width: 1 }}>
                    <Typography children={name} align='left' width={1} fontSize={'20px'} />
                    <Typography children={timeframe} align='right' width={1} fontSize={'20px'} />
                </Stack>
                <Typography children={description} />
            </div>
        )
    }
    return (
        <Card raised sx={{ width: 1 / 2 }}>
            <CardContent>
                <Typography children={'Experience'} fontSize={'48px'} />
                <Divider sx={dividerStyles} />
                {experiences.map((experience) => (
                    <ExperienceEntry key={experience.id} name={experience.name} timeframe={experience.timeframe} description={experience.description}/>
                ))}
            </CardContent>
        </Card>
    )
}

const AboutCard = ({ }) => {
    return (
        <Card raised sx={{ width: 1 / 2 }}>
            <CardContent>
                <Typography children={'About Me!'} fontSize={'48px'} />
                <Divider sx={dividerStyles} />
                <Typography children={'project_date'} />
                <Typography children={'project_description'} />
            </CardContent>

            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

const AboutPage = ({ }) => {
    return (
        <Stack sx={{ padding: 5 }} spacing={5}>
            <Stack direction={'row'} spacing={5}>
                <EducationCard />
                <SkillsCard />
            </Stack>
            <Stack direction={'row'} spacing={5}>
                <ExperienceCard />
                <AboutCard />
            </Stack>
        </Stack>

    )
}

export default AboutPage