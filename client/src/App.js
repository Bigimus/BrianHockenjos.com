import './App.css';
import NavBar from './Components/Navigation_Bar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
  <Routes>
    <Route index element={<NavBar />} />
  </Routes>
  );
}

export default App;
