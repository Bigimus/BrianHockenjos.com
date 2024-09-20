import React from 'react'
import { CardHeader, Card, CardActions, CardContent, Typography, Button } from '@mui/material';

const ProjectCard = ({styles, project_name, project_date, project_description}) => {
  return (
    <Card raised='true' sx={styles}>
        <CardHeader title={project_name}/>
        <CardContent>
            <Typography children={project_date} />
            <Typography children={project_description} />

        </CardContent>

        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
  )
}

export default ProjectCard