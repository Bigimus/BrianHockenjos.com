import { Card, CardActions, CardContent, Button, Typography, Stack, Divider, Link } from '@mui/material'
import React from 'react'

const dividerStyles = {mb: 1.25}

const EducationCard = ({}) => {
    const EducationEntry = ({mb, link, school, location, degree, timeframe}) => {
        return (
            <Stack mb={mb}>
                <Stack direction={'row'} sx={{width:1}}>

                    <Link href={link} underline='hover'children={school} align='left' width={1} fontSize={'20px'}/>
                    <Typography children={location} align='right' width={1} fontSize={'20px'}/>
                </Stack>
                <Stack direction={'row'} sx={{width:1}}>
                    <Typography children={degree} align='left' width={1} fontSize={'16px'}/>
                    <Typography children={timeframe} align='right' width={1} fontSize={'16px'}/>
                </Stack>
            </Stack>
        )}

    return (
        <Card raised='true' sx={{ width: 1/2 }}>
            <CardContent>
                <Typography children={'Education'} fontSize={'48px'} align='center'/>
                <Divider sx={dividerStyles}/>
                <EducationEntry 
                    school= 'Stanford H. Calhoun High School'
                    location = 'Merrick, New York'
                    degree = 'Advanced Regents Diploma'
                    timeframe= 'Sep 2014 - Jun 2018'
                    mb={2.5}
                    link='https://www.bellmore-merrick.k12.ny.us/schools/sanford_h_calhoun_high_school'
                />
                <EducationEntry 
                    school= 'New York Institute of Techology'
                    location = 'Old Westbury, New York'
                    degree = 'Electrical and Computer Engineering B.S'
                    timeframe= 'Sep 2018 - May 2022'
                    link='https://www.nyit.edu/'
                />
            </CardContent>
        </Card>
    )}

const SkillsCard = ({}) => {
    return (
        <Card raised='true' sx={{ width: 1/2 }}>
            <CardContent>
                <Typography children={'Skills'} fontSize={'48px'} align='center'/>
                <Divider sx={dividerStyles}/>
                <Typography children={'project_date'} />
                <Typography children={'project_description'} />
            </CardContent>

            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>  
    )
}

const ExperienceCard = ({}) => {
    return (
        <Card raised='true' sx={{ width: 1/2 }}>
            <CardContent>
                <Typography children={'Experience'} fontSize={'48px'} />
                <Divider sx={dividerStyles}/>
                <Typography children={'project_date'} />
                <Typography children={'project_description'} />
            </CardContent>

            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>  
    )
}

const AboutCard = ({}) => {
    return (
        <Card raised='true' sx={{ width: 1/2 }}>
            <CardContent>
                <Typography children={'About Me!'} fontSize={'48px'} />
                <Divider sx={dividerStyles}/>
                <Typography children={'project_date'} />
                <Typography children={'project_description'} />
            </CardContent>

            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>  
    )
}

const AboutPage = ({}) => {
  return (
    <Stack sx={{padding:5}} spacing={5}>
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