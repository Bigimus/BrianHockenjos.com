import React from 'react'
import './pageStyles.css';
import ProjectCard from './Components/Project_Card';
import { Stack } from '@mui/material';

const ProjectPage = () => {
    const projects = [
        {
            project_name: 'Example Project 1',
            project_date: '9/12/2024 - TBD',
            project_description: 'Example Project Description',
            project_media: [] 
        },
        {
            project_name: 'Example Project 2',
            project_date: '9/12/2024 - TBD',
            project_description: 'Example Project Description',
            project_media: [] 
        },
        {
            project_name: 'Example Project 3',
            project_date: '9/12/2024 - TBD',
            project_description: 'Example Project Description',
            project_media: [] 
        },        
        {
            project_name: 'Example Project 4',
            project_date: '9/12/2024 - TBD',
            project_description: 'Example Project Description',
            project_media: [] 
        },
        {
            project_name: 'Example Project 5',
            project_date: '9/12/2024 - TBD',
            project_description: 'Example Project Description',
            project_media: [] 
        },
        {
            project_name: 'Example Project 6',
            project_date: '9/12/2024 - TBD',
            project_description: 'Example Project Description',
            project_media: [] 
        },
        {
            project_name: 'Example Project 7',
            project_date: '9/12/2024 - TBD',
            project_description: 'Example Project Description',
            project_media: [] 
        },
        {
            project_name: 'Example Project 8',
            project_date: '9/12/2024 - TBD',
            project_description: 'Example Project Description',
            project_media: [] 
        },
        {
            project_name: 'Example Project 9',
            project_date: '9/12/2024 - TBD',
            project_description: 'Example Project Description',
            project_media: [] 
        },
        {
            project_name: 'Example Project 10',
            project_date: '9/12/2024 - TBD',
            project_description: 'Example Project Description',
            project_media: [] 
        },
        {
            project_name: 'Example Project 11',
            project_date: '9/12/2024 - TBD',
            project_description: 'Example Project Description',
            project_media: [] 
        },
        {
            project_name: 'Example Project 12',
            project_date: '9/12/2024 - TBD',
            project_description: 'Example Project Description',
            project_media: [] 
        }
    ]
    const odd_projects = projects.filter((_, index) => index % 2 === 0)
    const even_projects = projects.filter((_, index) => index % 2 !== 0)

  return (
    <div>
        <Stack direction='row'>
            <Stack sx={{width: 1/2, mt: 5}}>
            {odd_projects.map((project) => (
                <ProjectCard 
                    styles={{
                        mb: 5,
                        mr: 2.5,
                        ml: 5
                    }}
                    project_name={project.project_name}
                    project_date={project.project_date}
                    project_description={project.project_description}
                />
            ))}
            </Stack>
            <Stack sx={{width: 1/2, mt: 5}}>
                {even_projects.map((project) => (
                    <ProjectCard 
                    styles={{
                        mb: 5,
                        mr: 5,
                        ml: 2.5
                    }}
                        project_name={project.project_name}
                        project_date={project.project_date}
                        project_description={project.project_description}
                    />
                ))}
            </Stack>
        </Stack>
    </div>
  )
}

export default ProjectPage