import React, { useState } from 'react';
import { FaShoppingBag, FaBox, FaTruck, FaCheckCircle, FaClock, FaSearch, FaFilter, FaEllipsisV, FaMapMarkerAlt, FaPhoneAlt, FaPrint, FaFileInvoice } from 'react-icons/fa';

const PharmacyDashboard = () => {
  const [orderFilter, setOrderFilter] = useState('all');

  const orders = [
    {
      id: "ORD001",
      customer: "Amit Kumar",
      items: [
        { name: "Paracetamol 500mg", quantity: 2, price: "₹120" },
        { name: "Vitamin C", quantity: 1, price: "₹230" }
      ],
      total: "₹350",
      status: "pending",
      time: "10:30 AM",
      address: "123, Park Street, Mumbai",
      phone: "+91 98765-43210",
      paymentMethod: "Online Payment"
    },
    {
      id: "ORD002",
      customer: "Priya Sharma",
      items: [
        { name: "Blood Pressure Monitor", quantity: 1, price: "₹800" },
        { name: "Diabetes Test Strips", quantity: 2, price: "₹400" }
      ],
      total: "₹1,200",
      status: "processing",
      time: "11:15 AM",
      address: "45, Lake Road, Mumbai",
      phone: "+91 98765-43211",
      paymentMethod: "Cash on Delivery"
    },
    {
      id: "ORD003",
      customer: "Rajesh Verma",
      items: [
        { name: "Antibiotics", quantity: 1, price: "₹250" },
        { name: "Cough Syrup", quantity: 1, price: "₹200" }
      ],
      total: "₹450",
      status: "delivered",
      time: "09:45 AM",
      address: "78, Hill View, Mumbai",
      phone: "+91 98765-43212",
      paymentMethod: "Online Payment"
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
                <h1 className="text-xl font-bold text-gray-800">Swasthya Sathi Pharmacy</h1>
                <p className="text-sm text-gray-500">Welcome back, Pharmacist</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search orders..."
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
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          <StatCard 
            icon={<FaShoppingBag />}
            label="New Orders"
            value="24"
            trend="+5 from yesterday"
            color="blue"
          />
          <StatCard 
            icon={<FaBox />}
            label="Processing"
            value="12"
            trend="3 urgent"
            color="yellow"
          />
          <StatCard 
            icon={<FaTruck />}
            label="Out for Delivery"
            value="8"
            trend="2 delayed"
            color="purple"
          />
          <StatCard 
            icon={<FaCheckCircle />}
            label="Delivered Today"
            value="45"
            trend="+12% this week"
            color="green"
          />
        </div>

        {/* Orders Section */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <select 
                value={orderFilter}
                onChange={(e) => setOrderFilter(e.target.value)}
                className="w-full sm:w-auto border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Orders</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="delivered">Delivered</option>
              </select>
              <button className="text-gray-400 hover:text-gray-600">
                <FaEllipsisV />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {orders.map(order => (
              <OrderCard key={order.id} {...order} />
            ))}
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

const OrderCard = ({ id, customer, items, total, status, time, address, phone, paymentMethod }) => {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    processing: 'bg-blue-100 text-blue-800',
    delivered: 'bg-green-100 text-green-800'
  };

  return (
    <div className="border rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-medium text-gray-800">{customer}</h3>
            <span className={`px-3 py-1 rounded-full text-sm ${statusColors[status]}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Order ID: {id}</p>
        </div>
        <div className="text-left sm:text-right w-full sm:w-auto">
          <p className="font-medium text-gray-800">{total}</p>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <FaClock />
            <span>{time}</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="bg-gray-50 rounded-lg p-3">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 gap-1">
              <span className="text-sm text-gray-600">
                {item.name} x {item.quantity}
              </span>
              <span className="text-sm font-medium text-gray-800">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-start gap-2">
          <FaMapMarkerAlt className="text-gray-400 mt-1 flex-shrink-0" />
          <span className="text-gray-600">{address}</span>
        </div>
        <div className="flex items-start gap-2">
          <FaFileInvoice className="text-gray-400 mt-1 flex-shrink-0" />
          <span className="text-gray-600">{paymentMethod}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t gap-4">
        <div className="flex gap-2 w-full sm:w-auto justify-center">
          <button className="text-blue-600 hover:text-blue-700 p-2">
            <FaPhoneAlt size={14} />
          </button>
          <button className="text-gray-600 hover:text-gray-700 p-2">
            <FaPrint size={14} />
          </button>
        </div>
        <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
          Process Order
        </button>
      </div>
    </div>
  );
};

export default PharmacyDashboard; 