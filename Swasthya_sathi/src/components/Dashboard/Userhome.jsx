import React from 'react';
import Header from '../Others/Header';
import { FaAmbulance, FaHeartbeat, FaPills, FaChartLine, FaPhone, FaHospital } from 'react-icons/fa';

const UserHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      <Header />
      
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Emergency Assistance */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-4 sm:p-6 text-white">
          <div className="flex flex-col items-center text-center space-y-4">
            <FaAmbulance className="text-4xl" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Emergency Assistance</h2>
              <p className="mt-2 text-sm sm:text-base">Need immediate medical attention? Contact emergency services</p>
            </div>
            <button className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors flex items-center gap-2">
              <FaPhone /> Call Now
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <FaHeartbeat className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-sm font-medium text-gray-800">Heart Rate</h3>
              <p className="text-lg font-bold text-blue-600">72 BPM</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <FaChartLine className="text-green-600 text-xl" />
              </div>
              <h3 className="text-sm font-medium text-gray-800">Blood Sugar</h3>
              <p className="text-lg font-bold text-green-600">98 mg/dL</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                <FaHospital className="text-purple-600 text-xl" />
              </div>
              <h3 className="text-sm font-medium text-gray-800">BP</h3>
              <p className="text-lg font-bold text-purple-600">120/80</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                <FaPills className="text-yellow-600 text-xl" />
              </div>
              <h3 className="text-sm font-medium text-gray-800">Medicines</h3>
              <p className="text-lg font-bold text-yellow-600">3 Today</p>
            </div>
          </div>
        </div>

        {/* Health Monitoring */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Health Monitoring</h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="w-full">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Blood Pressure</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Heart Rate</span>
                    <span>66%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full w-2/3"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Blood Sugar</span>
                    <span>50%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-yellow-500 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Medicines */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Current Medicines</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPills className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Metformin</h3>
                    <p className="text-sm text-gray-600 mt-1">500mg - After Breakfast</p>
                    <p className="text-xs text-gray-500 mt-2">Next dose in 2 hours</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPills className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Aspirin</h3>
                    <p className="text-sm text-gray-600 mt-1">100mg - After Dinner</p>
                    <p className="text-xs text-gray-500 mt-2">Next dose in 6 hours</p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPills className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Vitamin D3</h3>
                    <p className="text-sm text-gray-600 mt-1">60,000 IU - Weekly</p>
                    <p className="text-xs text-gray-500 mt-2">Next dose in 4 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;