import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaAmbulance, FaHeartbeat, FaVideo, FaUser, FaPills } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: '/home', icon: FaHome, label: 'Home' },
    { path: '/emergency', icon: FaAmbulance, label: 'Emergency' },
    { path: '/health', icon: FaHeartbeat, label: 'Health' },
    { path: '/telemedicine', icon: FaVideo, label: 'Telemedicine' },
    { path: '/medicines', icon: FaPills, label: 'Medicines' },
    { path: '/profile', icon: FaUser, label: 'Profile' },
  ];

  return (
    <>
      {/* Fixed Top Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-[999]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Sanjivani</span>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation - Now part of fixed header */}
        <div className="hidden md:block border-t">
          <div className="max-w-7xl mx-auto">
            <nav className="flex justify-center items-center">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex flex-col items-center py-3 px-8 relative ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <item.icon className={`text-xl ${isActive ? 'text-blue-600' : ''}`} />
                      <span className="text-xs mt-1 font-medium">{item.label}</span>
                    </div>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Content Spacer - Adjusted for both header and nav */}
      <div className="h-[72px] md:h-[132px]"></div>

      {/* Fixed Bottom Navigation Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden z-[999] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-around items-center">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center py-3 px-4 relative ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <div className="relative">
                    <item.icon className={`text-2xl ${isActive ? 'text-blue-600' : ''}`} />
                    {isActive && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header; 