'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Password icons

const RegisterPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/user_accounts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, email, password }),
            });

            if (!res.ok) throw new Error('Failed to register');

            router.push('/login');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="bg-gray-700 h-screen flex justify-center items-center">
            <form
                onSubmit={handleRegister}
                className="flex flex-col items-center gap-4 w-full max-w-[500px] rounded-4xl p-10 bg-[#292C2D]"
            >
                <h2 className="text-2xl font-medium text-[#ffffff] mb-2">Register</h2>

                {/* First Name */}
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-[#ffffff] font-medium text-sm">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="rounded-lg p-3 w-full bg-[#3D4142] focus:outline-none border-none text-[#777979]"
                    />
                </div>

                {/* Last Name */}
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-[#ffffff] font-medium text-sm">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="rounded-lg p-3 w-full bg-[#3D4142] focus:outline-none border-none text-[#777979]"
                    />
                </div>

                {/* Email */}
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="email" className="text-[#ffffff] font-medium text-sm">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="rounded-lg p-3 w-full bg-[#3D4142] focus:outline-none border-none text-[#777979]"
                    />
                </div>

                {/* Password with Toggle */}
                <div className="w-full flex flex-col gap-2 relative">
                    <label htmlFor="password" className="text-[#ffffff] font-medium text-sm">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="rounded-lg p-3 w-full bg-[#3D4142] focus:outline-none border-none text-[#777979] pr-10"
                    />
                    <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-[42px] cursor-pointer text-[#777979]"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="mt-4 p-4 w-[120px] flex items-center justify-center rounded-lg bg-[#C2E9DD] text-[#000000] text-sm cursor-pointer"
                >
                    Register
                </button>

                {/* Redirect */}
                <p className="text-[#707070] mt-4">
                    Already have an account? <Link href="/login" className="text-[#C2E9DD]">Sign In</Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;
