import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()    
        console.log("email is ", email)
        console.log("password is ", password)
        setEmail("")
        setPassword("")
    }

    const handleGoogleLogin = () => {
        // Implement Google login logic here
        console.log("Google login clicked")
    }

    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4'>
            <div className='max-w-md w-full bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.02]'>
                <div className='flex flex-col items-center mb-6'>
                    <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                        <span className='text-blue-600 text-2xl font-bold'>SS</span>
                    </div>
                    <h1 className='text-2xl font-bold text-blue-800'>Welcome Back</h1>
                    <p className='text-gray-600 text-sm mt-2'>Sign in to access your account</p>
                </div>

                <form onSubmit={submitHandler} className='space-y-4'>
                    <div className='space-y-2'>
                        <label htmlFor="email" className='text-sm font-medium text-gray-700'>Email Address</label>
                        <input 
                            required 
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" 
                            placeholder='Enter your email'  
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200'
                        />
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor="password" className='text-sm font-medium text-gray-700'>Password</label>
                        <div className='relative'>
                            <input 
                                required 
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter your password' 
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200'
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700'
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        <div className="flex justify-end">
                            <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
                                Forgot Password?
                            </Link>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200'
                    >
                        Sign In
                    </button>

                    <div className='relative flex items-center justify-center'>
                        <div className='border-t border-gray-300 w-full'></div>
                        <span className='bg-white px-4 text-sm text-gray-500'>or</span>
                        <div className='border-t border-gray-300 w-full'></div>
                    </div>

                    <button 
                        type="button"
                        onClick={handleGoogleLogin}
                        className='w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200'
                    >
                        <FaGoogle className='text-red-500' />
                        Continue with Google
                    </button>
                </form>

                <div className='mt-6 text-center space-y-2'>
                    <p className='text-sm text-gray-600'>
                        New to Swasthya Sathi?{' '}
                        <Link to="/signup" className='text-blue-600 hover:text-blue-700 font-medium'>
                            Create an account
                        </Link>
                    </p>
                    <p className='text-xs text-gray-500'>
                        By signing in, you agree to our{' '}
                        <a href="#" className='text-blue-600 hover:text-blue-700'>Terms</a>
                        {' '}and{' '}
                        <a href="#" className='text-blue-600 hover:text-blue-700'>Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login