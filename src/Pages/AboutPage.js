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
    Box 
} from '@mui/material'

import { 
    React, 
    useEffect, 
    useState 
} from 'react';

import { 
    padding,
    styled 
} from '@mui/system';

const dividerStyles = { 
    mb: 1.25 
}

const cardStyles = {
    margin: 1.25,
    height: 1,
    width: '97.5%'
}

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
                    <Link href={link} underline='hover' children={school} align='left' width={1} fontSize={'24px'} />
                    <Typography children={location} align='right' width={1} fontSize={'20px'} />
                </Stack>
                <Stack direction={'row'} sx={{ width: 1 }}>
                    <Typography children={degree} align='left' width={1} fontSize={'20px'} />
                    <Typography children={timeframe} align='right' width={1} fontSize={'16px'} />
                </Stack>
            </Stack>
        )
    }
    return (
        <Card raised sx={cardStyles}>
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
        fetch("/api/skills")
            .then((response) => response.json())
            .then((data) => setSkills(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);
    const SkillsEntry = ({ language, libraries }) => {
        return (
            <div>
                <Stack direction={'row'}>
                    <Typography children={language} fontSize={'24px'} />
                </Stack>
                <Stack direction={'row'} spacing={1.5}>
                    {libraries.map((library) => (
                        <Typography key={library.id} children={library.name} />
                    ))}
                </Stack>
            </div>
        )
    }
    return (
        <Card raised sx={cardStyles}>
            <CardContent>
                <Typography children={'Skills'} fontSize={'48px'} align='center' />
                <Divider sx={dividerStyles} />
                {api_skills.map((skill) => (
                    <SkillsEntry key={skill.id} language={skill.language} libraries={skill.libraries} />
                ))}
            </CardContent>
        </Card>
    )
}

const ExperienceCard = ({ }) => {

    const DescriptionList = styled(List)({
        listStyleType: 'disc',    // Sets the bullet style
        paddingLeft: '20px',      // Adds some left padding for the bullets
        '& .MuiListItem-root': {
            display: 'list-item',   // Changes ListItem to display as list items
            listStyleType: 'inherit' // Inherit bullet style from parent
        }
    });
    const [experiences, setExperience] = useState([]);
    useEffect(() => {
        fetch("/api/experience")  // Since the proxy is set, you don't need the full URL.
            .then((response) => response.json())
            .then((data) => setExperience(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const ExperienceEntry = ({ company, position, timeframe, description }) => {
        return (
            <Box mb={2.5}>
                <Stack direction={'row'} sx={{ width: 1 }}>
                    <Typography children={position} align='left' width={1} fontSize={'28px'} />
                    <Typography children={timeframe} align='right' width={1} fontSize={'20px'} />
                </Stack>
                <Typography children={company} align='left' fontSize={'20px'} />
                <DescriptionList disablePadding>
                    {description.map((desc) => (
                        <ListItem key={desc.id} disablePadding>
                            <ListItemText
                                primary={desc.info}
                            />
                        </ListItem>
                    ))}
                </DescriptionList>
            </Box>
        )
    }
    return (
        <Card raised sx={cardStyles}>
            <CardContent>
                <Typography children={'Experience'} fontSize={'48px'} align='center'/>
                <Divider sx={dividerStyles} />
                {experiences.map((experience) => (
                    <ExperienceEntry
                        key={experience.id}
                        company={experience.company}
                        position={experience.position}
                        timeframe={experience.timeframe}
                        description={experience.descriptions} />
                ))}
            </CardContent>
        </Card>
    )
}

const AboutCard = ({ }) => {
    return (
        <Card raised sx={cardStyles}>
            <CardContent>
                <Typography children={'About Me!'} fontSize={'48px'} />
                <Divider sx={dividerStyles} />
                <Typography children={'Hi, My name is Brian Hockenjos. I studied Electrical and Computer Engineering at New York Institute of Technology (NYIT). During my time at NYIT I learned various skills in and out of the classroom. School taught me how to think and I taught myself how to apply what school taught me. While I have not been working in my field, I still practice engineering principals while working at Live Nation; Especially in my current position as Facilites Manager. I have preformed numerous lighting upgrades throughout the venue, I have taught myself how to repair simply plumbing issues (broken sinks, sweating copper, repairing PVC gutter drains, etc..) This website is written in JavaScript and C#, both of which I am self taught. I consider myself a jack of all trades, but a master of none. Which could be consturded as a negative thing by some, however, I believe that it is important to be able to handle everyday issues around you. Not having to rely on another person to come fix something saves you time and money. '} />
            </CardContent>
        </Card>
    )
}

const AboutPage = ({ }) => {
    return (
        <Stack direction={'row'} >
            <Stack height={1} width={1}>
                <ExperienceCard />
                {/* <SkillsCard /> */}
            </Stack>
            <Stack height={1} width={1}>
                <EducationCard />
                <AboutCard />
            </Stack>
        </Stack>
    )
}

export default AboutPage