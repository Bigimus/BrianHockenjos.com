import React from 'react'
import { useEffect, useState } from 'react';
import './pageStyles.css';
import { Stack } from '@mui/material';
import { CardHeader, Card, CardActions, CardContent, Typography, Button } from '@mui/material';


const ProjectPage = () => {
    const ProjectEntry = ({styles, project_name, project_date, project_description}) => {
        return (
          <Card raised sx={styles}>
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

    const [api_projects, setProjects] = useState([]);

    useEffect(() => {
      fetch("/api/projects")  // Since the proxy is set, you don't need the full URL.
        .then((response) => response.json())
        .then((data) => setProjects(data))
        .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const odd_projects = api_projects.filter((_, index) => index % 2 === 0)
    const even_projects = api_projects.filter((_, index) => index % 2 !== 0)

  return (
    <div>
        <Stack direction='row' sx={{ mb: 7.5}}>
            <Stack sx={{width: 1/2, mt: 5}}>
            {odd_projects.map((project) => (
                <ProjectEntry 
                    key={project.id}
                    styles={{
                        mb: 5,
                        mr: 2.5,
                        ml: 5
                    }}
                    project_name={project.name}
                    project_date={project.timeframe}
                    project_description={project.description}
                />
            ))}
            </Stack>
            <Stack sx={{width: 1/2, mt: 5}}>
                {even_projects.map((project) => (
                    <ProjectEntry 
                    key={project.id}
                    styles={{
                        mb: 5,
                        mr: 5,
                        ml: 2.5
                    }}
                        project_name={project.name}
                        project_date={project.timeframe}
                        project_description={project.description}
                    />
                ))}
            </Stack>
        </Stack>
    </div>
  )
}

export default ProjectPage