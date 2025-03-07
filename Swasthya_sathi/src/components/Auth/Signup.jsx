import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleGoogleSignup = () => {
        console.log('Google signup clicked');
    };

    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4'>
            <div className='max-w-md w-full bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.01]'>
                <div className='flex flex-col items-center mb-6'>
                    <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                        <span className='text-blue-600 text-2xl font-bold'>SS</span>
                    </div>
                    <h1 className='text-2xl font-bold text-blue-800'>Create Account</h1>
                    <p className='text-gray-600 text-sm mt-2'>Join Swasthya Sathi Healthcare</p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label className='text-sm font-medium text-gray-700'>Full Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className='w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none'
                            required
                        />
                    </div>

                    <div>
                        <label className='text-sm font-medium text-gray-700'>Email Address</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className='w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none'
                            required
                        />
                    </div>

                    <div>
                        <label className='text-sm font-medium text-gray-700'>Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                className='w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none'
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-3 top-1/2 text-gray-500 hover:text-gray-700'
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className='w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors'
                    >
                        Sign Up
                    </button>

                    <div className='relative flex items-center justify-center'>
                        <div className='border-t border-gray-300 w-full'></div>
                        <span className='bg-white px-4 text-sm text-gray-500'>or</span>
                        <div className='border-t border-gray-300 w-full'></div>
                    </div>

                    <button
                        type="button"
                        onClick={handleGoogleSignup}
                        className='w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors'
                    >
                        <FaGoogle className='text-red-500' />
                        Sign up with Google
                    </button>
                </form>

                <p className='mt-6 text-center text-sm text-gray-600'>
                    Already have an account?{' '}
                    <Link to="/login" className='text-blue-600 hover:text-blue-700 font-medium'>
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup; 