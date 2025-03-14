import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Emergency from './components/Dashboard/Emergency';
import UserHome from './components/Dashboard/userhome';
import Health from './components/Dashboard/Health';
import Telemedicine from './components/Dashboard/Telemedicine';
import Login from './components/Auth/Login';
import Profile from './components/Dashboard/Profile';
import Medicines from './components/Dashboard/Medicines';
import HospitalDashboard from './components/Dashboards/HospitalDashboard';
import PharmacyDashboard from './components/Dashboards/PharmacyDashboard';
import DoctorDashboard from './components/Dashboards/DoctorDashboard';
import Signup from './components/Auth/Signup';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        <Routes>
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Signup />} />
          
          {/* User Routes */}
          <Route path="/" element={<UserHome />} />
          <Route path="/home" element={<UserHome />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/health" element={<Health />} />
          <Route path="/telemedicine" element={<Telemedicine />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/medicines" element={<Medicines />} />
          
          {/* Admin Dashboards */}
          <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
          <Route path="/pharmacy-dashboard" element={<PharmacyDashboard/>} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
