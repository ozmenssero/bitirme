import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Canvas from './components/Canvas';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Navbar  from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>  
    </Router>
  );
}

export default App;
