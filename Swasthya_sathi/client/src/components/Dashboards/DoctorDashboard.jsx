import React, { useState } from 'react';
import { FaUser, FaVideo, FaAmbulance, FaClock, FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaUserMd, FaToggleOn, FaToggleOff, FaTimes, FaEnvelope, FaPhone, FaHospital, FaMapMarkerAlt } from 'react-icons/fa';

const DoctorDashboard = () => {
  const [isOnlineAvailable, setIsOnlineAvailable] = useState(true);
  const [isEmergencyAvailable, setIsEmergencyAvailable] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [doctorProfile, setDoctorProfile] = useState({
    name: "Dr. Sarah Smith",
    specialization: "Cardiologist",
    email: "dr.sarah@hospital.com",
    phone: "+91 98765-43210",
    hospital: "City General Hospital",
    address: "123 Medical Center, Mumbai",
    experience: "15 years",
    qualification: "MD, DM Cardiology",
    consultationFee: "₹1000",
    availableHours: "9:00 AM - 5:00 PM"
  });

  // Sample consultation requests data
  const [consultationRequests, setConsultationRequests] = useState([
    {
      id: 1,
      patientName: "Amit Kumar",
      age: 45,
      type: "online",
      time: "10:30 AM",
      date: "2024-03-20",
      symptoms: "Fever and body ache",
      status: "pending"
    },
    {
      id: 2,
      patientName: "Priya Sharma",
      age: 32,
      type: "emergency",
      time: "11:00 AM",
      date: "2024-03-20",
      symptoms: "Severe chest pain",
      status: "pending"
    },
    {
      id: 3,
      patientName: "Rajesh Verma",
      age: 28,
      type: "online",
      time: "2:30 PM",
      date: "2024-03-20",
      symptoms: "Persistent cough",
      status: "pending"
    }
  ]);

  const handleRequestAction = (requestId, action) => {
    setConsultationRequests(requests =>
      requests.map(request =>
        request.id === requestId
          ? { ...request, status: action }
          : request
      )
    );
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setIsEditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Fixed Position */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-[999]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <FaUserMd className="text-white text-lg sm:text-xl md:text-2xl" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">{doctorProfile.name}</h1>
                <p className="text-xs sm:text-sm text-gray-500">{doctorProfile.specialization}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="w-auto px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5 text-xs sm:text-sm"
            >
              <FaUser className="text-xs sm:text-sm" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Content - With top padding for fixed header */}
      <div className="pt-[60px] sm:pt-[68px] md:pt-[76px] pb-20 sm:pb-6">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 space-y-3 sm:space-y-4">
          {/* Availability Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-white rounded-xl shadow-sm p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaVideo className="text-blue-600 text-base sm:text-lg" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-semibold text-gray-800">Online Consultation</h2>
                    <p className="text-xs sm:text-sm text-gray-500">Available for telemedicine</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOnlineAvailable(!isOnlineAvailable)}
                  className={`text-xl sm:text-2xl ${isOnlineAvailable ? 'text-blue-600' : 'text-gray-400'}`}
                >
                  {isOnlineAvailable ? <FaToggleOn /> : <FaToggleOff />}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <FaAmbulance className="text-red-600 text-base sm:text-lg" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-semibold text-gray-800">Emergency Availability</h2>
                    <p className="text-xs sm:text-sm text-gray-500">Available for emergencies</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsEmergencyAvailable(!isEmergencyAvailable)}
                  className={`text-xl sm:text-2xl ${isEmergencyAvailable ? 'text-red-600' : 'text-gray-400'}`}
                >
                  {isEmergencyAvailable ? <FaToggleOn /> : <FaToggleOff />}
                </button>
              </div>
            </div>
          </div>

          {/* Consultation Requests */}
          <div className="bg-white rounded-xl shadow-sm p-3 sm:p-4">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Consultation Requests</h2>
            <div className="space-y-3">
              {consultationRequests.map(request => (
                <div 
                  key={request.id}
                  className={`border rounded-lg p-2.5 sm:p-3 ${
                    request.type === 'emergency' ? 'border-red-200 bg-red-50' : 'border-gray-200'
                  }`}
                >
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-start gap-2">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        request.type === 'emergency' ? 'bg-red-100' : 'bg-blue-100'
                      }`}>
                        <FaUser className={`text-xs sm:text-sm ${
                          request.type === 'emergency' ? 'text-red-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-800">{request.patientName}</h3>
                        <div className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500 mt-0.5">
                          <span>Age: {request.age}</span>
                          <span className="hidden sm:inline">•</span>
                          <span className="flex items-center gap-1">
                            <FaClock className="text-xs" />
                            {request.time}
                          </span>
                          <span className="hidden sm:inline">•</span>
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt className="text-xs" />
                            {request.date}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{request.symptoms}</p>
                      </div>
                    </div>

                    {request.status === 'pending' ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleRequestAction(request.id, 'accepted')}
                          className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-xs"
                        >
                          <FaCheckCircle className="text-xs" />
                          Accept
                        </button>
                        <button
                          onClick={() => handleRequestAction(request.id, 'rejected')}
                          className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-xs"
                        >
                          <FaTimesCircle className="text-xs" />
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${
                        request.status === 'accepted' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal - Keep existing modal code but update padding and text sizes */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000] p-3 sm:p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white px-3 sm:px-4 py-2.5 sm:py-3 border-b flex items-center justify-between z-10">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">Edit Profile</h2>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-1.5 hover:bg-gray-100 rounded-full transition-all"
              >
                <FaTimes className="text-base sm:text-lg" />
              </button>
            </div>

            <div className="p-3 sm:p-4">
              <form onSubmit={handleProfileUpdate} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Personal Information */}
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        value={doctorProfile.name}
                        onChange={(e) => setDoctorProfile({...doctorProfile, name: e.target.value})}
                        className="w-full px-3 sm:px-4 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Specialization</label>
                      <input
                        type="text"
                        value={doctorProfile.specialization}
                        onChange={(e) => setDoctorProfile({...doctorProfile, specialization: e.target.value})}
                        className="w-full px-3 sm:px-4 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={doctorProfile.email}
                        onChange={(e) => setDoctorProfile({...doctorProfile, email: e.target.value})}
                        className="w-full px-3 sm:px-4 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={doctorProfile.phone}
                        onChange={(e) => setDoctorProfile({...doctorProfile, phone: e.target.value})}
                        className="w-full px-3 sm:px-4 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Hospital/Clinic</label>
                      <input
                        type="text"
                        value={doctorProfile.hospital}
                        onChange={(e) => setDoctorProfile({...doctorProfile, hospital: e.target.value})}
                        className="w-full px-3 sm:px-4 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Address</label>
                      <input
                        type="text"
                        value={doctorProfile.address}
                        onChange={(e) => setDoctorProfile({...doctorProfile, address: e.target.value})}
                        className="w-full px-3 sm:px-4 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Experience</label>
                      <input
                        type="text"
                        value={doctorProfile.experience}
                        onChange={(e) => setDoctorProfile({...doctorProfile, experience: e.target.value})}
                        className="w-full px-3 sm:px-4 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Consultation Fee</label>
                      <input
                        type="text"
                        value={doctorProfile.consultationFee}
                        onChange={(e) => setDoctorProfile({...doctorProfile, consultationFee: e.target.value})}
                        className="w-full px-3 sm:px-4 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Qualifications</label>
                    <input
                      type="text"
                      value={doctorProfile.qualification}
                      onChange={(e) => setDoctorProfile({...doctorProfile, qualification: e.target.value})}
                      className="w-full px-3 sm:px-4 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Available Hours</label>
                    <input
                      type="text"
                      value={doctorProfile.availableHours}
                      onChange={(e) => setDoctorProfile({...doctorProfile, availableHours: e.target.value})}
                      className="w-full px-3 sm:px-4 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="sticky bottom-0 bg-white px-3 sm:px-4 py-2.5 sm:py-3 border-t flex justify-end gap-3 sm:gap-4 -mx-3 sm:-mx-4 mt-6 sm:mt-8">
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="px-3 sm:px-4 sm:py-2.5 text-sm sm:text-base text-gray-700 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-3 sm:px-4 sm:py-2.5 text-sm sm:text-base bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <FaCheckCircle className="text-sm sm:text-base" />
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard; 