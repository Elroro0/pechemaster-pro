import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FishGuide from './pages/FishGuide';
import FishDetails from './pages/FishDetails';
import Catalog from './pages/Catalog';
import TechniqueDetail from './pages/TechniqueDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fish-guide" element={<FishGuide />} />
            <Route path="/fish-guide/:id" element={<FishDetails />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<TechniqueDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
