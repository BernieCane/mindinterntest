import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import các component đã tạo
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Devices from './pages/Devices';
import Assets from './pages/Assets';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          } 
        />
        <Route 
          path="/devices" 
          element={
            <MainLayout>
              <Devices />
            </MainLayout>
          } 
        />
        <Route 
          path="/assets" 
          element={
            <MainLayout>
              <Assets />
            </MainLayout>
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;