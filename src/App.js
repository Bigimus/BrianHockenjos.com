import './Styles/App.css';
import HomePage from './Pages/HomePage';
import NavBar from './Pages/Components/Navigation_Bar';
import { Routes, Route } from 'react-router-dom';
import ProjectPage from './Pages/ProjectPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import ToolBar from './Pages/Components/Tool_Bar';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='Projects' element={<ProjectPage />} />
        <Route path='About' element={<AboutPage />} />
        <Route path='Contact' element={<ContactPage />} />
      </Routes>
      <ToolBar />
    </div>

  );
}

export default App;
