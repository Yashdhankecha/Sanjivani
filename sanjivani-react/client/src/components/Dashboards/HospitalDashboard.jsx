import React from 'react';
import { FaUserInjured, FaCalendarCheck, FaBed, FaUserMd, FaClock, FaSearch, FaFilter, FaEllipsisV, FaPhoneAlt, FaHospital } from 'react-icons/fa';

const HospitalDashboard = () => {
  const stats = {
    totalPatients: 145,
    todayAppointments: 28,
    availableBeds: 12,
    activeStaff: 45
  };

  const upcomingPatients = [
    {
      id: 1,
      name: "Rahul Sharma",
      time: "10:30 AM",
      type: "General Checkup",
      status: "Waiting",
      doctor: "Dr. Patel",
      phone: "+91 98765-43210"
    },
    {
      id: 2,
      name: "Priya Verma",
      time: "11:00 AM",
      type: "Follow-up",
      status: "Confirmed",
      doctor: "Dr. Kumar",
      phone: "+91 98765-43211"
    },
    {
      id: 3,
      name: "Amit Singh",
      time: "11:30 AM",
      type: "Consultation",
      status: "Waiting",
      doctor: "Dr. Shah",
      phone: "+91 98765-43212"
    }
  ];

  const currentPatients = [
    {
      id: 1,
      name: "Priya Singh",
      room: "Room 302",
      admittedDate: "15 Mar 2024",
      condition: "Stable",
      doctor: "Dr. Kumar",
      treatment: "Post-surgery care"
    },
    {
      id: 2,
      name: "Rajesh Patel",
      room: "Room 405",
      admittedDate: "14 Mar 2024",
      condition: "Critical",
      doctor: "Dr. Mehta",
      treatment: "Intensive care"
    },
    {
      id: 3,
      name: "Suman Gupta",
      room: "Room 201",
      admittedDate: "16 Mar 2024",
      condition: "Stable",
      doctor: "Dr. Singh",
      treatment: "Recovery"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center border-2 border-blue-200">
                <span className="text-blue-600 font-bold text-lg">SS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800 text-center sm:text-left">Swasthya Sathi Hospital</h1>
                <p className="text-sm text-gray-500">Welcome back, Admin</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search patients..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
              <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <FaFilter />
                Filters
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          <StatCard 
            icon={<FaUserInjured />}
            label="Total Patients"
            value={stats.totalPatients}
            trend="+12% this week"
            color="blue"
          />
          <StatCard 
            icon={<FaCalendarCheck />}
            label="Today's Appointments"
            value={stats.todayAppointments}
            trend="+3 from yesterday"
            color="green"
          />
          <StatCard 
            icon={<FaBed />}
            label="Available Beds"
            value={stats.availableBeds}
            trend="4 reserved"
            color="yellow"
          />
          <StatCard 
            icon={<FaUserMd />}
            label="Active Staff"
            value={stats.activeStaff}
            trend="2 on leave"
            color="purple"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {/* Upcoming Patients */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <h2 className="text-lg font-semibold text-gray-800">Upcoming Patients</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <FaEllipsisV />
              </button>
            </div>
            <div className="space-y-4">
              {upcomingPatients.map(patient => (
                <div key={patient.id} className="flex flex-col sm:flex-row items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors gap-4">
                  <div>
                    <h3 className="font-medium text-gray-800">{patient.name}</h3>
                    <p className="text-sm text-gray-600">{patient.type}</p>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
                      <FaClock className="text-blue-500" />
                      <span>{patient.time}</span>
                      <span className="text-gray-300 hidden sm:inline">|</span>
                      <span>{patient.doctor}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2 w-full sm:w-auto">
                    <button className="text-blue-600 hover:text-blue-700 p-2">
                      <FaPhoneAlt size={14} />
                    </button>
                    <span className={`block px-3 py-1 rounded-full text-sm w-full sm:w-auto text-center
                      ${patient.status === 'Waiting' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                      {patient.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Patients */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <h2 className="text-lg font-semibold text-gray-800">Current Patients</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <FaEllipsisV />
              </button>
            </div>
            <div className="space-y-4">
              {currentPatients.map(patient => (
                <div key={patient.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
                    <h3 className="font-medium text-gray-800">{patient.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm w-full sm:w-auto text-center
                      ${patient.condition === 'Stable' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {patient.condition}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">{patient.room}</p>
                      <p className="text-gray-500">Admitted: {patient.admittedDate}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-gray-600">{patient.doctor}</p>
                      <p className="text-gray-500">{patient.treatment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({ icon, label, value, trend, color }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    purple: 'bg-purple-100 text-purple-600'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all">
      <div className={`w-12 h-12 ${colorClasses[color]} rounded-full flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-gray-600 text-sm">{label}</h3>
      <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{trend}</p>
    </div>
  );
};

export default HospitalDashboard; 