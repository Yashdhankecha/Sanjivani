import React, { useState } from 'react';
import Header from '../Others/Header';
import { FaPills, FaBell, FaSearch, FaShoppingCart, FaClock, FaStore } from 'react-icons/fa';

const Medicines = () => {
  const [searchMedicine, setSearchMedicine] = useState('');

  const currentMedicines = [
    {
      name: "Paracetamol",
      dosage: "500mg",
      frequency: "Twice daily",
      duration: "5 days",
      nextDose: "2:30 PM",
      remainingDoses: 6
    },
    {
      name: "Vitamin D3",
      dosage: "60,000 IU",
      frequency: "Weekly once",
      duration: "8 weeks",
      nextDose: "Sunday 10:00 AM",
      remainingDoses: 4
    },
    // Add more medicines as needed
  ];

  const nearbyStores = [
    {
      name: "Mahesh Medical Store",
      distance: "0.5 km",
      rating: 4.5,
      isOpen: true
    },
    {
      name: "City Pharmacy",
      distance: "1.2 km",
      rating: 4.8,
      isOpen: true
    },
    // Add more stores
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />
      
      <main className="pt-20 pb-24 sm:pb-4 px-4 max-w-6xl mx-auto">
        {/* Current Medicines Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Current Medicines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentMedicines.map((medicine, index) => (
              <MedicineCard key={index} {...medicine} />
            ))}
          </div>
        </section>

        {/* Order Medicines Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Medicines</h2>
          
          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for medicines..."
                value={searchMedicine}
                onChange={(e) => setSearchMedicine(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Nearby Stores */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nearbyStores.map((store, index) => (
              <StoreCard key={index} {...store} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const MedicineCard = ({ name, dosage, frequency, duration, nextDose, remainingDoses }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{dosage}</p>
      </div>
      <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
        {remainingDoses} doses left
      </div>
    </div>
    
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <FaBell className="text-blue-600" />
        <span>{frequency}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <FaClock className="text-blue-600" />
        <span>Next dose: {nextDose}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <FaPills className="text-blue-600" />
        <span>Duration: {duration}</span>
      </div>
    </div>
  </div>
);

const StoreCard = ({ name, distance, rating, isOpen }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-blue-100 rounded-lg">
          <FaStore className="text-blue-600 text-xl" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{distance} away</p>
        </div>
      </div>
      <span className={`text-sm px-2 py-1 rounded ${
        isOpen ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
      }`}>
        {isOpen ? 'Open' : 'Closed'}
      </span>
    </div>
    
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <span className="text-yellow-400">★</span>
        <span className="text-sm text-gray-600">{rating}</span>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
        Order Now
      </button>
    </div>
  </div>
);

export default Medicines; 