import React, { useState } from 'react';
import Header from '../Others/Header';
import { FaEdit, FaCheck, FaTimes, FaWeight, FaRuler, FaHeartbeat, FaLungs, FaFlask } from 'react-icons/fa';
import { GiBodyHeight, GiMuscleUp } from 'react-icons/gi';

const Health = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />
      
      <main className="pt-20 pb-24 sm:pb-4 px-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Health Parameters</h1>
        
        {/* Health Parameters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* General Health */}
          <HealthParameter
            title="General Health"
            icon={<FaWeight className="text-blue-600" />}
            parameters={[
              { name: 'Height', value: '150-190 cm', current: '175 cm' },
              { name: 'Weight', value: '50-100 kg', current: '70 kg' },
              { name: 'BMI', value: '18.5-24.9', current: '22.5' },
              { name: 'Body Fat %', value: '10-20%', current: '15%' },
              { name: 'Muscle Mass', value: '30-40%', current: '35%' },
            ]}
          />
          
          {/* Vital Signs */}
          <HealthParameter
            title="Vital Signs"
            icon={<FaHeartbeat className="text-red-600" />}
            parameters={[
              { name: 'Blood Pressure', value: '120/80 mmHg', current: '118/78 mmHg' },
              { name: 'Heart Rate', value: '60-100 bpm', current: '72 bpm' },
              { name: 'Temperature', value: '97-99°F', current: '98.6°F' },
              { name: 'Respiratory Rate', value: '12-20/min', current: '16/min' },
              { name: 'Oxygen Saturation', value: '95-100%', current: '98%' },
            ]}
          />

          {/* Blood Work */}
          <HealthParameter
            title="Blood Parameters"
            icon={<FaFlask className="text-purple-600" />}
            parameters={[
              { name: 'Hemoglobin', value: '12-16 g/dL', current: '14 g/dL' },
              { name: 'RBC', value: '4.5-5.5 M/µL', current: '5.0 M/µL' },
              { name: 'WBC', value: '4.5-11.0 K/µL', current: '7.5 K/µL' },
              { name: 'Platelets', value: '150-450 K/µL', current: '250 K/µL' },
              { name: 'Hematocrit', value: '36-46%', current: '42%' },
            ]}
          />

          {/* Metabolic Health */}
          <HealthParameter
            title="Metabolic Health"
            icon={<FaFlask className="text-green-600" />}
            parameters={[
              { name: 'Fasting Glucose', value: '70-100 mg/dL', current: '85 mg/dL' },
              { name: 'Total Cholesterol', value: '<200 mg/dL', current: '180 mg/dL' },
              { name: 'HDL Cholesterol', value: '>40 mg/dL', current: '55 mg/dL' },
              { name: 'LDL Cholesterol', value: '<100 mg/dL', current: '90 mg/dL' },
              { name: 'Triglycerides', value: '<150 mg/dL', current: '120 mg/dL' },
            ]}
          />

          {/* Fitness Metrics */}
          <HealthParameter
            title="Fitness Metrics"
            icon={<GiMuscleUp className="text-orange-600" />}
            parameters={[
              { name: 'Resting Heart Rate', value: '60-100 bpm', current: '65 bpm' },
              { name: 'VO2 Max', value: '35-50 mL/kg/min', current: '42 mL/kg/min' },
              { name: 'Body Water %', value: '50-65%', current: '60%' },
              { name: 'Bone Mass', value: '2.5-3.5 kg', current: '3.0 kg' },
              { name: 'Basal Metabolic Rate', value: '1400-2000 kcal', current: '1750 kcal' },
            ]}
          />

          {/* Additional Health Markers */}
          <HealthParameter
            title="Other Health Markers"
            icon={<FaLungs className="text-teal-600" />}
            parameters={[
              { name: 'Vitamin D', value: '20-50 ng/mL', current: '35 ng/mL' },
              { name: 'Iron', value: '60-170 μg/dL', current: '100 μg/dL' },
              { name: 'Thyroid (TSH)', value: '0.4-4.0 mIU/L', current: '2.5 mIU/L' },
              { name: 'Cortisol', value: '6-23 mcg/dL', current: '15 mcg/dL' },
              { name: 'Blood pH', value: '7.35-7.45', current: '7.40' },
            ]}
          />
        </div>
      </main>
    </div>
  );
};

const HealthParameter = ({ title, icon, parameters }) => {
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (index, currentValue) => {
    setEditingIndex(index);
    setEditValue(currentValue);
  };

  const handleSave = (index) => {
    parameters[index].current = editValue;
    setEditingIndex(-1);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="space-y-4">
        {parameters.map((param, index) => (
          <div key={param.name} className="flex items-center justify-between border-b border-gray-100 pb-2">
            <div>
              <p className="text-sm font-medium text-gray-800">{param.name}</p>
              <p className="text-xs text-gray-500">Normal: {param.value}</p>
            </div>
            <div className="flex items-center gap-2">
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="w-24 px-2 py-1 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => handleSave(index)}
                    className="text-green-600 hover:text-green-700"
                  >
                    <FaCheck size={16} />
                  </button>
                  <button
                    onClick={() => setEditingIndex(-1)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <FaTimes size={16} />
                  </button>
                </>
              ) : (
                <>
                  <span className="text-sm font-medium text-blue-600">{param.current}</span>
                  <button
                    onClick={() => handleEdit(index, param.current)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FaEdit size={16} />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Health; 