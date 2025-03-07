import React from 'react';
import Header from '../Others/Header';
import { FaAmbulance, FaPhone, FaHospital, FaMedkit, FaMapMarkerAlt } from 'react-icons/fa';

const Emergency = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />
      
      <main className="pt-20 pb-24 sm:pb-4 px-4 max-w-6xl mx-auto">
        {/* Emergency Status Bar */}
        <div className="bg-red-600 text-white p-4 rounded-xl mb-6 flex items-center justify-center gap-3">
          <FaAmbulance size={24} />
          <span className="text-lg font-medium">Ambulance will arrive in 12 minutes</span>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          {/* Map Container */}
          <div className="relative">
            {/* This is a placeholder for the map - replace with actual map component */}
            <div className="h-[400px] bg-[#f4d03f] relative">
              {/* Placeholder markers */}
              <LocationMarker
                top="30%"
                left="40%"
                label="Ramesh's Location"
                isUser
              />
              <LocationMarker
                top="20%"
                left="50%"
                label="Shree Krishna Hospital (15km)"
                icon={<FaHospital />}
              />
              <LocationMarker
                top="35%"
                left="25%"
                label="Ambulance (12 min)"
                icon={<FaAmbulance />}
                isEmergency
              />
              <LocationMarker
                top="40%"
                left="55%"
                label="Dr. Sharma (3km)"
                icon={<FaMedkit />}
              />
              <LocationMarker
                top="45%"
                left="52%"
                label="Mahesh Medical Store (5km)"
                icon={<FaMedkit />}
              />
            </div>
          </div>
        </div>

        {/* Location List */}
        <div className="space-y-3">
          <LocationItem
            icon={<FaAmbulance className="text-red-500" />}
            label="Ambulance will arrive in 12 minutes"
            isEmergency
          />
          <LocationItem
            icon={<FaHospital className="text-blue-600" />}
            label="Shree Krishna Hospital is 15 km away"
          />
          <LocationItem
            icon={<FaMedkit className="text-blue-600" />}
            label="Dr. Sharma is 3 km away"
          />
          <LocationItem
            icon={<FaMedkit className="text-blue-600" />}
            label="Mahesh Medical Store is 5 km away"
          />
        </div>

        {/* Call for Help Button */}
        <div className="fixed bottom-20 sm:bottom-6 left-0 right-0 px-4 flex justify-center">
          <button className="bg-green-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg hover:bg-green-600 transition-colors">
            <FaPhone />
            Call for Help
          </button>
        </div>
      </main>
    </div>
  );
};

const LocationMarker = ({ top, left, label, icon, isUser, isEmergency }) => (
  <div 
    className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
    style={{ top, left }}
  >
    <div className={`
      w-8 h-8 rounded-full flex items-center justify-center
      ${isUser ? 'bg-blue-600' : isEmergency ? 'bg-red-500' : 'bg-white'}
      ${!isUser && !isEmergency && 'border-2 border-blue-600'}
      text-white shadow-md
    `}>
      {icon || <FaMapMarkerAlt />}
    </div>
    <div className="bg-white px-2 py-1 rounded-md shadow-md mt-1 whitespace-nowrap text-xs">
      {label}
    </div>
  </div>
);

const LocationItem = ({ icon, label, isEmergency }) => (
  <div className={`
    flex items-center gap-3 p-3 rounded-lg
    ${isEmergency ? 'bg-red-50' : 'bg-white'}
    border ${isEmergency ? 'border-red-200' : 'border-gray-200'}
    shadow-sm
  `}>
    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
      {icon}
    </div>
    <span className={`text-sm ${isEmergency ? 'text-red-600 font-medium' : 'text-gray-700'}`}>
      {label}
    </span>
  </div>
);

export default Emergency; 