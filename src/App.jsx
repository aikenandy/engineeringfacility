import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {AuthProvider } from './contexts/AuthContext';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Map from "./routes/Map";
import Loginpage from "./components/LoginPage";
import Report from "./components/Report";
import Dashboard from "./components/Dashboard";



const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Content />
    </Router>
    </AuthProvider>
  );
};

const Content = () => {
  const location = useLocation();


  return (
      <div>
      {location.pathname !== '/map' && <Navbar />}
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<FeatureSection />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/map" element={<Map />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/report" element={<Report />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        {location.pathname !== '/map' && <Footer />}
      </div>
      </div>
  );
};

export default App;