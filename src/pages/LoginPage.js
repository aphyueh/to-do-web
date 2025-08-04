import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle authentication
    // For now, we'll just navigate to the todos page
    navigate('/todos');
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Teal Background */}
      <div className="flex-1 bg-gradient-to-br from-teal-400 to-teal-600 flex flex-col justify-center items-center text-white p-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Content */}
        <div className="z-10 text-center max-w-md">
          <h1 className="text-4xl font-bold mb-6">
            {isSignUp ? 'Hello, Friend!' : 'Welcome Back!'}
          </h1>
          <p className="text-lg mb-8 opacity-90">
            {isSignUp 
              ? 'Enter your personal details and start journey with us' 
              : 'To keep connected with us please login with your personal info'
            }
          </p>
          <button
            onClick={toggleMode}
            className="px-8 py-3 border-2 border-white text-white bg-transparent rounded-full hover:bg-white hover:text-teal-500 transition-all duration-300 font-semibold tracking-wider"
          >
            {isSignUp ? 'SIGN IN' : 'SIGN UP'}
          </button>
        </div>
      </div>

      {/* Right Side - White Background with Form */}
      <div className="flex-1 bg-white flex flex-col justify-center items-center p-8">
        {/* Logo */}
        <div className="absolute top-6 left-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-500 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-gray-700 font-semibold">Diprella</span>
          </div>
        </div>

        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-teal-500 mb-8 text-center">
            {isSignUp ? 'Create Account' : 'Sign in to Diprella'}
          </h2>

          {/* Social Login Buttons */}
          <div className="flex justify-center space-x-4 mb-6">
            <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
              <span className="text-blue-600 font-bold">f</span>
            </button>
            <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
              <span className="text-red-500 font-bold">G+</span>
            </button>
            <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
              <span className="text-blue-700 font-bold">in</span>
            </button>
          </div>

          <p className="text-center text-gray-500 mb-6">
            or use your email {isSignUp ? 'for registration' : 'account'}:
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 pl-10"
                  required={isSignUp}
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            )}

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 pl-10"
                required
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 pl-10"
                required
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>

            {!isSignUp && (
              <div className="text-center">
                <button type="button" className="text-gray-500 hover:text-teal-500 transition-colors">
                  Forgot your password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors font-semibold tracking-wider mt-6"
            >
              {isSignUp ? 'SIGN UP' : 'SIGN IN'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;