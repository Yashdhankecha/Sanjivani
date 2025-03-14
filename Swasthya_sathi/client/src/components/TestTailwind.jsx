import React from 'react';

function TestTailwind() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-96 rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-blue-600">Welcome!</h1>
        <p className="text-lg text-gray-600">This is a test page to verify Tailwind CSS is working properly.</p>
        <button className="mt-6 rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
          Test Button
        </button>
      </div>
    </div>
  );
}

export default TestTailwind;
