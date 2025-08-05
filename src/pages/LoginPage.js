import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import loginBg from '../assets/images/login-bg.png';
import signupBg from '../assets/images/signup-bg.png';
import '../assets/css/todobreeze.css'


const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;

const SIGNUP = gql`
  mutation Signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      id
      email
    }
  }
`;

const LoginPage = () => {
    const [isSignIn, setIsSignIn] = useState(false);
    const [login] = useMutation(LOGIN);
    const [signup] = useMutation(SIGNUP);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const { name, email, password } = formData;
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        if (!isSignIn && !name) {
            setError('Please enter your name');
            return;
        }
        console.log('isSignIn:', isSignIn);

        if (!isSignIn) {
            try {
                const { data } = await signup({ variables: { name, email, password } });
                localStorage.setItem('userId', data.signup.id);
                navigate('/todos');
            } catch (err) {
                console.error('Signup error:', err);
                setError('Signup failed', err.message);
                // alert('Signup failed', err.message);
            }
        } else {
            try {
                const { data } = await login({ variables: { email, password } });
                localStorage.setItem('userId', data.login.id);
                navigate('/todos');
            } catch (err) {
                console.error('Login error:', err);
                setError('Login failed', err.message);
                // alert('Login failed', err.message);
            }
        }
    };


    const toggleMode = () => {
        setIsSignIn(!isSignIn);
        setFormData({ name: '', email: '', password: '' });
        setError(''); // Clear errors when switching modes
    };

    return (
        <div className="min-h-screen flex relative overflow-hidden">
            {/* Sliding Overlay Panel */}
        <div className={`sliding-panel absolute top-0 w-1/2 h-full z-10 transition-transform duration-700 ease-in-out flex flex-col justify-center items-center text-white p-8 ${
            isSignIn ? 'translate-x-full' : 'translate-x-0'
                }`}
                style={{
                    '--panel-bg-image': `url(${isSignIn ? signupBg : loginBg})`
                }}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
                </div>

                {/* Content */}
                <div className="z-10 text-center max-w-md">
        
                    <div className="relative z-10">
                        <h1 className="text-4xl font-bold mb-6">
                            {isSignIn ? 'Hello, Friend!' : 'Welcome Back!'}
                        </h1>
                        <p className="text-lg mb-8 opacity-90">
                            {isSignIn
                                ? 'Enter your personal details and start journey with us'
                                : 'To keep connected with us please login with your personal info'
                            }
                        </p>
                        <button
                            onClick={toggleMode}
                            className="toggle-button"
                        >
                            {isSignIn ? 'SIGN UP' : 'SIGN IN'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Left Side - Sign In Form */}
    <div className={`flex-1 bg-white flex flex-col justify-center items-center p-8 transition-opacity duration-500 ${
    isSignIn ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                <div className="w-full max-w-md">
                        <h2 className="text-heading">
                            Sign in to TodoBreeze
                        </h2>

                        {/* Social Login Buttons */}
                        <div className="flex justify-center space-x-4 mb-6">
                            <button className="social-button">
                                <span className="text-blue-600 font-bold">f</span>
                            </button>
                            <button className="social-button">
                                <span className="text-red-500 font-bold">G+</span>
                            </button>
                            <button className="social-button">
                                <span className="text-blue-700 font-bold">in</span>
                            </button>
                        </div>

                        <p className="text-center text-gray-500 mb-6">
                            or use your email account:
                        </p>

                        {/* Error Message */}
                        {error && isSignIn && (
                            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                {error}
                            </div>
                        )}

                        {/* Sign In Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
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

                            <div className="text-center">
                                <button type="button" className="text-gray-500 hover:text-teal-500 transition-colors">
                                    Forgot your password?
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="submit-button"
                                onClick={handleSubmit}
                            >
                                SIGN IN
                            </button>
                        </form>
                    </div>
            </div>

            {/* Right Side - Sign Up Form */}
      <div className={`flex-1 bg-white flex flex-col justify-center items-center p-8 transition-opacity duration-500 ${
        isSignIn ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}>
                <div className="w-full max-w-md">
                        <h2 className="text-heading">
                            Create Account
                        </h2>

                        {/* Social Login Buttons */}
                        <div className="flex justify-center space-x-4 mb-6">
                            <button className="social-button">
                                <span className="text-blue-600 font-bold">f</span>
                            </button>
                            <button className="social-button">
                                <span className="text-red-500 font-bold">G+</span>
                            </button>
                            <button className="social-button">
                                <span className="text-blue-700 font-bold">in</span>
                            </button>
                        </div>

                        <p className="text-center text-gray-500 mb-6">
                            or use your email for registration:
                        </p>

                        {/* Error Message */}
                        {error && !isSignIn && (
                            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                {error}
                            </div>
                        )}


                        {/* Sign Up Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 pl-10"
                                    required
                                />
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>

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

                            <button
              type="submit"
                                className="submit-button"
                            >
                                SIGN UP
                            </button>
                        </form>
                </div>
            </div>

            {/* Logo - Fixed Position */}
            <div className="absolute top-6 left-6 z-30">
                <div className="flex items-center space-x-2">
                    <img src="/todobreeze-logo.png" alt="TodoBreeze Logo" className="w-8 h-8" />
                    <span className="text-gray-700 font-semibold">TodoBreeze</span>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;