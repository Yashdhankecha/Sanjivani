import React from 'react';
import Header from '../Others/Header';
import { FaCircle, FaVideo, FaCalendarAlt, FaStar } from 'react-icons/fa';

const Telemedicine = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />
      
      <main className="pt-20 pb-24 sm:pb-4 px-4 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Available Doctors</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
            <FaCalendarAlt />
            View All Appointments
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>
      </main>
    </div>
  );
};

const DoctorCard = ({ name, specialty, image, rating, experience, isOnline, nextSlot }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all">
      <div className="flex items-start gap-4">
        {/* Doctor Image */}
        <div className="relative">
          <img 
            src={image} 
            alt={name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></span>
        </div>

        {/* Doctor Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-gray-800">{name}</h3>
              <p className="text-sm text-gray-600">{specialty}</p>
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              <FaStar />
              <span className="text-sm text-gray-600">{rating}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">{experience} years experience</p>
        </div>
      </div>

      {/* Availability & Booking */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <FaCircle className={`text-xs ${isOnline ? 'text-green-500' : 'text-gray-400'}`} />
            <span className="text-sm">{isOnline ? 'Available Now' : 'Next Slot: ' + nextSlot}</span>
          </div>
          <span className="text-sm font-medium text-blue-600">₹500/session</span>
        </div>
        <button 
          className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium
            ${isOnline 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            } transition-colors`}
        >
          <FaVideo />
          {isOnline ? 'Consult Now' : 'Book Appointment'}
        </button>
      </div>
    </div>
  );
};

// Sample doctor data
const doctors = [
  {
    id: 1,
    name: "Dr. Sharma",
    specialty: "General Physician",
    image: "https://placekitten.com/200/200", // Replace with actual doctor images
    rating: 4.8,
    experience: 15,
    isOnline: true,
    nextSlot: null
  },
  {
    id: 2,
    name: "Dr. Patel",
    specialty: "Cardiologist",
    image: "https://placekitten.com/201/201",
    rating: 4.9,
    experience: 20,
    isOnline: false,
    nextSlot: "2:30 PM Today"
  },
  {
    id: 3,
    name: "Dr. Singh",
    specialty: "Pediatrician",
    image: "https://placekitten.com/202/202",
    rating: 4.7,
    experience: 12,
    isOnline: true,
    nextSlot: null
  },
  {
    id: 4,
    name: "Dr. Gupta",
    specialty: "Dermatologist",
    image: "https://placekitten.com/203/203",
    rating: 4.6,
    experience: 8,
    isOnline: false,
    nextSlot: "11:00 AM Tomorrow"
  },
  {
    id: 5,
    name: "Dr. Kumar",
    specialty: "Psychiatrist",
    image: "https://placekitten.com/204/204",
    rating: 4.9,
    experience: 18,
    isOnline: true,
    nextSlot: null
  },
  {
    id: 6,
    name: "Dr. Reddy",
    specialty: "Orthopedic",
    image: "https://placekitten.com/205/205",
    rating: 4.8,
    experience: 22,
    isOnline: false,
    nextSlot: "4:15 PM Today"
  }
];

export default Telemedicine; 