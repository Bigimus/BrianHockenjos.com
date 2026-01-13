import './Styles/App.css';
import HomePage from './Pages/HomePage';
import NavBar from './Pages/Components/Navigation_Bar';
import ExperiencePage from './Pages/ExperiencePage';
import EducationPage from './Pages/EducationPage';
import { Routes, Route } from 'react-router-dom';
import ProjectPage from './Pages/ProjectPage';
import ContactPage from './Pages/ContactPage';
import ToolBar from './Pages/Components/Tool_Bar';
import React from 'react';
import { Box } from '@mui/material';

function App() {
  return (
    <Box>
      <NavBar/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='Projects' element={<ProjectPage />} />
        <Route path='Education' element={<EducationPage />} />
        <Route path='Experience' element={<ExperiencePage />} />
        <Route path='Contact' element={<ContactPage />} />
        <Route path="Home" element={<HomePage />} />
      </Routes>
      <ToolBar />
    </Box>

  );
}

export default App;
