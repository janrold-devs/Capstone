'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const ForgotPasswordPage = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Recovery instructions sent (stub).');
    };

    return (
        <div className="h-screen flex items-center justify-center bg-[#121212]">
            <form
                onSubmit={handleSubmit}
                className="bg-[#292C2D] rounded-3xl p-10 w-full max-w-[500px] h-[450px] flex flex-col items-center text-center "
            >
                <h1 className="text-white text-[30px] font-medium mb-4">Forgot your password?</h1>
                <p className="text-[#cccccc] text-sm mb-6">
                    Please enter your email to recover <br/>your password
                </p>

                <div className="w-full text-left mb-4">
                    <label htmlFor="emailOrUsername" className="text-white text-sm font-medium block mb-2">
                        Email
                    </label>
                    <input
                        type="text"
                        id="emailOrUsername"
                        placeholder="Enter your email"
                        value={emailOrUsername}
                        onChange={(e) => setEmailOrUsername(e.target.value)}
                        required
                        className="w-full p-3 rounded-md bg-[#3D4142] text-[#777979] border-none outline-none  focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 bg-[#C2E9DD] text-black font-medium py-4 px-8 rounded-md text-sm"
                >
                    Submit Now
                </button>

                <p className="text-[#cccccc] text-sm mt-4">Back to<span> </span>
                <Link
                    href="/login"
                    className="mt-19 text-[#C2E9DD] text-sm hover:underline"
                >
                    Login
                </Link>
                </p>
            </form>
        </div>
    );
};

export default ForgotPasswordPage;
