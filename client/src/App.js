import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricingPlans from './pages/PricingPlans';
import Position from './pages/Position';
import Champs from './pages/champs';
import Bouton from './pages/bouton'; 
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<PricingPlans />} />
          <Route path="/position" element={<Position />} />
          <Route path="/champs" element={<Champs />} />
          <Route path="/bouton" element={<Bouton />} /> 
        </Routes>
      </Router>
  );
}

export default App;
