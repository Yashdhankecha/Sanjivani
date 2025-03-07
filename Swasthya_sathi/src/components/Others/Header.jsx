import React from 'react';
import { FaHome, FaAmbulance, FaHeartbeat, FaPills, FaUser, FaVideo } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Function to check if a path is active
  const isActive = (path) => {
    return currentPath.includes(path.toLowerCase());
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden sm:flex fixed top-0 left-0 right-0 bg-white shadow-md h-16 items-center px-4 z-50">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-lg">SS</span>
          </div>
          <span className="text-blue-800 font-bold text-lg">Swasthya Sathi</span>
        </div>

        {/* Navigation Links - Pushed to right */}
        <div className="flex-1 flex justify-end gap-6 pr-4">
          <NavLink 
            label="Home" 
            icon={<FaHome size={20} />} 
            active={isActive('/home') || currentPath === '/'} 
          />
          <NavLink 
            label="Emergency" 
            icon={<FaAmbulance size={20} />} 
            active={isActive('/emergency')} 
          />
          <NavLink 
            label="Health" 
            icon={<FaHeartbeat size={20} />} 
            active={isActive('/health')} 
          />
          <NavLink 
            label="Telemedicine" 
            icon={<FaVideo size={20} />} 
            active={isActive('/telemedicine')} 
          />
          <NavLink 
            label="Medicines" 
            icon={<FaPills size={20} />} 
            active={isActive('/medicines')} 
          />
          <NavLink 
            label="Profile" 
            icon={<FaUser size={20} />} 
            active={isActive('/profile')} 
          />
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] h-16">
        <div className="flex justify-around items-center h-full">
          <NavIcon 
            icon={<FaHome size={20} />} 
            active={isActive('/home') || currentPath === '/'} 
            to="/home"
          />
          <NavIcon 
            icon={<FaAmbulance size={20} />} 
            active={isActive('/emergency')} 
            to="/emergency"
          />
          <NavIcon 
            icon={<FaHeartbeat size={20} />} 
            active={isActive('/health')} 
            to="/health"
          />
          <NavIcon 
            icon={<FaPills size={20} />} 
            active={isActive('/medicines')} 
            to="/medicines"
          />
          <NavIcon 
            icon={<FaVideo size={20} />} 
            active={isActive('/telemedicine')} 
            to="/telemedicine"
          />
          <NavIcon 
            icon={<FaUser size={20} />} 
            active={isActive('/profile')} 
            to="/profile"
          />
        </div>
      </nav>
    </>
  );
};

// Helper Components
const NavLink = ({ label, icon, active }) => (
  <Link
    to={`/${label.toLowerCase()}`}
    className={`flex items-center gap-2 px-4 py-2 rounded-full ${
      active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </Link>
);

const NavIcon = ({ icon, active, to }) => (
  <Link
    to={to}
    className={`p-3 rounded-full ${active ? 'text-blue-600' : 'text-gray-600'}`}
  >
    {icon}
  </Link>
);

export default Header;