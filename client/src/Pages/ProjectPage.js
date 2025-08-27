import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, Typography, Stack, IconButton, Tooltip } from '@mui/material';
import InventoryTrackerPopup from './Inventory-Tracker/InventoryTrackerPopup';
import GitHubIcon from '@mui/icons-material/GitHub'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'


const ProjectPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const [api_projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/api/projects")  // Since the proxy is set, you don't need the full URL.
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const odd_projects = api_projects.filter((_, index) => index % 2 === 0)
    const even_projects = api_projects.filter((_, index) => index % 2 !== 0)

    const ProjectEntry = ({ styles, name, timeframe, description, github, path = "" }) => {
        return (
            <div>
                <Card raised sx={styles}>
                    <CardContent>
                        <Stack direction={'row'}>
                            <Typography children={name} align='left' width={1} sx={{ fontSize: '22px' }} />
                            <Typography children={timeframe} align='right' width={1} sx={{ fontSize: '18px' }} />
                        </Stack>
                        <Typography children={description} sx={{ fontSize: '18px' }} />
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Stack direction={'row'}>
                            {
                                github !== "" ?
                                    <Tooltip title={<h2 style={{ fontSize: '18px' }} children={`${name} GitHub`} />}>
                                        <IconButton href={github} >
                                            <GitHubIcon sx={{ fontSize: '32px' }} />
                                        </IconButton>
                                    </Tooltip>
                                    :
                                    <div />
                            }
                            {
                                path !== "" ?
                                    <Tooltip title={<h2 style={{ fontSize: '18px' }} children='Demo' />}>
                                        <IconButton onClick={() => setIsOpen(true)} >
                                            <ExitToAppIcon sx={{ fontSize: '32px' }} />
                                        </IconButton>
                                    </Tooltip>
                                    :
                                    <div />
                            }
                        </Stack>
                    </CardActions>
                </Card>
            </div>
        )
    }

    return (
        <div>
            <Stack direction='row' sx={{ mb: 7.5 }}>
                <Stack sx={{ width: 1 / 2, mt: 2.5 }}>
                    {odd_projects.map((project) => (
                        <ProjectEntry
                            key={project.id}
                            styles={{
                                mb: 5,
                                mr: 2.5,
                                ml: 5
                            }}
                            name={project.name}
                            timeframe={project.timeframe}
                            description={project.description}
                            github={project.link}
                            path={project.path}
                        />
                    ))}
                </Stack>
                <Stack sx={{ width: 1 / 2, mt: 2.5}}>
                    {even_projects.map((project) => (
                        <ProjectEntry
                            key={project.id}
                            styles={{
                                mb: 5,
                                mr: 5,
                                ml: 2.5
                            }}
                            name={project.name}
                            timeframe={project.timeframe}
                            description={project.description}
                            github={project.link}
                            path={project.path}
                        />
                    ))}
                </Stack>
            </Stack>
            <InventoryTrackerPopup state={isOpen} stateHandler={setIsOpen} />
        </div>
    )
}

export default ProjectPage