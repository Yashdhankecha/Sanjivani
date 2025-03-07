import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Others/Header';  // Updated import path
import { 
  FaUser, 
  FaCalendarAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaHeartbeat, 
  FaNotesMedical, 
  FaSignOutAlt, 
  FaBell, 
  FaPencilAlt,
  FaWeight,
  FaHistory,
  FaFileMedical,
  FaTimes,
  FaRulerVertical,
  FaTransgender,
  FaUserAlt,
  FaCheckCircle
} from 'react-icons/fa';

const Profile = () => {
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const [userProfile, setUserProfile] = useState({
    name: "Ramesh Kumar",
    age: 32,
    gender: "Male",
    phone: "+91 9876543210",
    email: "ramesh.k@email.com",
    address: "123, Park Street, Mumbai",
    bloodGroup: "B+",
    height: "175 cm",
    weight: "70 kg",
    lastCheckup: "15 March 2024",
    emergencyContact: "+91 9876543211",
    emergencyContactName: "Suresh Kumar",
    emergencyContactRelation: "Brother",
    allergies: ["Peanuts", "Penicillin"],
    healthSuggestions: [
      "Schedule annual health checkup",
      "Maintain regular exercise routine",
      "Monitor blood pressure weekly",
      "Get 7-8 hours of sleep daily"
    ]
  });

  const handleLogout = () => {
    navigate('/login');
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to update the profile
    setIsEditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-6 pb-24 md:pb-6 space-y-6">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
              <FaUser className="text-blue-600 text-4xl" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-800">{userProfile.name}</h1>
              <p className="text-gray-600 mt-1">Patient ID: P123456</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button 
                onClick={() => setIsEditModalOpen(true)}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
              >
                <FaPencilAlt />
                <span>Edit Profile</span>
              </button>
              <button 
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors w-full sm:w-auto"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuickInfoCard
            icon={<FaHistory className="text-purple-500" />}
            title="Last Checkup"
            value={userProfile.lastCheckup}
            bgColor="bg-purple-50"
          />
          <QuickInfoCard
            icon={<FaFileMedical className="text-green-500" />}
            title="Health Status"
            value="Good"
            bgColor="bg-green-50"
          />
          <QuickInfoCard
            icon={<FaBell className="text-yellow-500" />}
            title="Next Appointment"
            value="No upcoming"
            bgColor="bg-yellow-50"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
            <div className="space-y-4">
              <InfoItem icon={FaEnvelope} label="Email" value={userProfile.email} />
              <InfoItem icon={FaPhoneAlt} label="Phone" value={userProfile.phone} />
              <InfoItem icon={FaMapMarkerAlt} label="Address" value={userProfile.address} />
              <InfoItem 
                icon={FaPhoneAlt} 
                label="Emergency Contact" 
                value={userProfile.emergencyContact}
                isEmergency={true}
              />
            </div>
          </div>

          {/* Health Information */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Health Information</h2>
            <div className="space-y-4">
              <InfoItem icon={FaWeight} label="Weight" value={userProfile.weight} />
              <InfoItem icon={FaHeartbeat} label="Height" value={userProfile.height} />
              <InfoItem icon={FaHeartbeat} label="Blood Group" value={userProfile.bloodGroup} />
              <InfoItem icon={FaHeartbeat} label="Blood Pressure" value="120/80" />
            </div>
          </div>

          {/* Health Suggestions */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Health Suggestions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {userProfile.healthSuggestions.map((suggestion, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg hover:shadow-sm transition-all"
                >
                  <FaNotesMedical className="text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-800">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Edit Profile Modal */}
        {isEditModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-modal-slide">
              <div className="sticky top-0 bg-white px-6 py-4 border-b flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaUser className="text-blue-600 text-xl" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">Edit Profile</h2>
                </div>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-all"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              <div className="p-6">
                <form onSubmit={handleProfileUpdate} className="space-y-8">
                  {/* Personal Information */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaUserAlt className="text-blue-600 text-sm" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                          type="text"
                          value={userProfile.name}
                          onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Age</label>
                        <input
                          type="number"
                          value={userProfile.age}
                          onChange={(e) => setUserProfile({...userProfile, age: e.target.value})}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Enter your age"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Gender</label>
                        <select
                          value={userProfile.gender}
                          onChange={(e) => setUserProfile({...userProfile, gender: e.target.value})}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Blood Group</label>
                        <select
                          value={userProfile.bloodGroup}
                          onChange={(e) => setUserProfile({...userProfile, bloodGroup: e.target.value})}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white"
                        >
                          {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(group => (
                            <option key={group} value={group}>{group}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <FaEnvelope className="text-green-600 text-sm" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          value={userProfile.email}
                          onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                          type="tel"
                          value={userProfile.phone}
                          onChange={(e) => setUserProfile({...userProfile, phone: e.target.value})}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                          type="text"
                          value={userProfile.address}
                          onChange={(e) => setUserProfile({...userProfile, address: e.target.value})}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Enter your full address"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Health Information */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <FaHeartbeat className="text-purple-600 text-sm" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">Health Information</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
                        <input
                          type="text"
                          value={userProfile.height}
                          onChange={(e) => setUserProfile({...userProfile, height: e.target.value})}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Enter your height"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                        <input
                          type="text"
                          value={userProfile.weight}
                          onChange={(e) => setUserProfile({...userProfile, weight: e.target.value})}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Enter your weight"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <FaPhoneAlt className="text-red-600 text-sm" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">Emergency Contact</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Contact Name</label>
                        <input
                          type="text"
                          value={userProfile.emergencyContactName}
                          onChange={(e) => setUserProfile({...userProfile, emergencyContactName: e.target.value})}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Emergency contact name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Relationship</label>
                        <input
                          type="text"
                          value={userProfile.emergencyContactRelation}
                          onChange={(e) => setUserProfile({...userProfile, emergencyContactRelation: e.target.value})}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Relationship with contact"
                        />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Emergency Contact Number</label>
                        <input
                          type="tel"
                          value={userProfile.emergencyContact}
                          onChange={(e) => setUserProfile({...userProfile, emergencyContact: e.target.value})}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Emergency contact number"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sticky bottom-0 bg-white px-6 py-4 border-t flex justify-end gap-4 -mx-6 mt-8">
                    <button
                      type="button"
                      onClick={() => setIsEditModalOpen(false)}
                      className="px-6 py-2.5 text-gray-700 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      <FaCheckCircle />
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const QuickInfoCard = ({ icon, title, value, bgColor }) => (
  <div className={`${bgColor} rounded-xl p-4 hover:shadow-md transition-all`}>
    <div className="flex items-center gap-3 mb-2">
      {icon}
      <h3 className="text-gray-700 font-medium">{title}</h3>
    </div>
    <p className="text-lg font-semibold text-gray-800">{value}</p>
  </div>
);

const InfoItem = ({ icon: Icon, label, value, isEmergency = false }) => (
  <div className={`flex items-start gap-3 p-3 rounded-lg ${isEmergency ? 'bg-red-50' : 'bg-gray-50'}`}>
    <Icon className={`text-xl flex-shrink-0 ${isEmergency ? 'text-red-500' : 'text-blue-600'}`} />
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className={`font-medium ${isEmergency ? 'text-red-600' : 'text-gray-800'} mt-1`}>{value}</p>
    </div>
  </div>
);

export default Profile; 