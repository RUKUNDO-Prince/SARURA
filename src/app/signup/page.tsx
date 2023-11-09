"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage () {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const onSignup = async () => {}
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="border border-white p-10 rounded-lg">
                <div className="flex flex-col items-center justify-center">
                    <h1>Sign Up</h1>
                    <hr />
                    <label htmlFor="username">Username: </label>
                    <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" id="username" type="text" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} placeholder="Enter the username" />
                    <label htmlFor="email">Email: </label>
                    <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" id="email" type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Enter the email" />
                    <label htmlFor="password">Password: </label>
                    <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" id="password" type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="Enter the password" />
                    <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" onClick={onSignup}>Sign Up</button>
                    <Link href="/login">Go to Login</Link>
                </div>
            </div>
        </div>
    )
}