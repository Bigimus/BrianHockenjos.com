import { Card, CardActions, CardContent, Button, Typography, Stack, Divider, Link } from '@mui/material'
import React from 'react'

const dividerStyles = { mb: 1.25 }

const EducationCard = ({ }) => {

    const degrees = [
        {
            SCHOOL: 'Stanford H. Calhoun High School',
            LOCATION: 'Merrick, New York',
            DEGREE: 'Advanced Regents Diploma',
            TIMEFRAME: 'Sep 2014 - Jun 2018',
            LINK: 'https://www.bellmore-merrick.k12.ny.us/schools/sanford_h_calhoun_high_school'
        },
        {
            SCHOOL: 'New York Institute of Technology',
            LOCATION: 'Old Westbury, New York',
            DEGREE: 'Electrical and Computer Engineering B.S',
            TIMEFRAME: 'Sep 2018 - May 2022',
            LINK: 'https://www.nyit.edu/'
        }
    ]

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
        <Card raised='true' sx={{ width: 1 / 2 }}>
            <CardContent>
                <Typography children={'Education'} fontSize={'48px'} align='center' />
                <Divider sx={dividerStyles} />
                {degrees.map((degree) => (
                    <EducationEntry
                        school={degree.SCHOOL}
                        location={degree.LOCATION}
                        degree={degree.DEGREE}
                        timeframe={degree.TIMEFRAME}
                        link={degree.LINK}
                        mb={2.5}
                    />
                ))}
            </CardContent>
        </Card>
    )
}

const SkillsCard = ({ }) => {

    const skills = [
        {
            LANGUAGE: 'JavaScript',
            LIBRARIES: ['React', 'Angular', 'MUI']
        },
        {
            LANGUAGE: 'Python',
            LIBRARIES: ['Numpy', 'Pandas', 'Tkinter', 'Kivy']
        }, 
        {
            LANGUAGE: 'Java',
            LIBRARIES: []
        }
    ]
    const SkillsEntry = ({ language, libraries }) => {
        return (
            <div>
                <Typography children={language} fontSize={'24px'} />
                <Stack direction={'row'} spacing={1.5}>
                {libraries.map((library) => (
                    <Typography children={library} />
                ))}
                
                </Stack>
            </div>
        )
    }

    return (
        <Card raised='true' sx={{ width: 1 / 2 }}>
            <CardContent>
                <Typography children={'Skills'} fontSize={'48px'} align='center' />
                <Divider sx={dividerStyles} />
                {skills.map((skill) => (
                    <SkillsEntry language={skill.LANGUAGE} libraries={skill.LIBRARIES}/>
                ))}
            </CardContent>

            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

const ExperienceCard = ({ }) => {
    return (
        <Card raised='true' sx={{ width: 1 / 2 }}>
            <CardContent>
                <Typography children={'Experience'} fontSize={'48px'} />
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

const AboutCard = ({ }) => {
    return (
        <Card raised='true' sx={{ width: 1 / 2 }}>
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