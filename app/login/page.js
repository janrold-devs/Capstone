'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Password icons

const LoginPage = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, rememberMe }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            localStorage.setItem('user', JSON.stringify(data.user));
            router.push('/dashboard');
        } catch (error) {
            alert('Login error');
            console.error('error');
        }
    };

    return (
        <div className="bg-gray-700 h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-[500px] rounded-4xl p-10 bg-[#292C2D]">
                <h2 className="text-2xl font-medium text-[#ffffff] mb-6">Login</h2>

                {/* Email Field */}
                <div className="w-full flex flex-col gap-2 mt-2">
                    <label htmlFor="email" className="text-[#ffffff] font-medium text-sm">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="rounded-lg p-3 w-full bg-[#3D4142] focus:outline-none border-none text-[#777979]"
                    />
                </div>

                {/* Password Field */}
                <div className="w-full flex flex-col gap-2 mt-2 relative">
                    <label htmlFor="password" className="text-[#ffffff] font-medium text-sm">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="rounded-lg p-3 w-full bg-[#3D4142] focus:outline-none border-none text-[#777979] pr-10"
                    />
                    <div 
                        onClick={() => setShowPassword(!showPassword)} 
                        className="absolute right-3 top-[42px] cursor-pointer text-[#777979]"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                </div>

                {/* Remember Me + Forgot Password */}
                <div className="w-full flex justify-between items-center mt-2">
                    <label className="flex items-center text-[#C2E9DD] text-sm">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            className="mr-2 accent-[#C2E9DD]"
                        />
                        Remember me
                    </label>
                    <Link href="/forgot-password" className="text-sm text-[#C2E9DD] underline">
                        Forgot Password?
                    </Link>
                </div>

                {/* Spacer for vertical alignment */}
                <div className="flex-grow"></div>

                <button
                    type="submit"
                    className="mt-4 p-4 w-[120px] flex items-center justify-center rounded-lg bg-[#C2E9DD] text-[#000000] text-sm cursor-pointer"
                >
                    Login
                </button>

                <p className="text-[#707070] mt-4">
                    Don't have an account? <Link href="/register" className="text-[#C2E9DD]">Register</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
