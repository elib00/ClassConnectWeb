'use client'

import React, { useState } from 'react';

const LoginForm = () => {
  const [userDetails, setUserDetails] = useState({userEmail: "", userPassword: ""});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({...userDetails, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userDetails);
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col">
      {/* inputs and labels */}
      <div className="flex flex-col">
        {/* email */}
        <div className="mb-4">
        <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
              Email
            </label>
          <input
            onChange={handleInputChange}
            type="email"
            id="userEmail"
            name="userEmail"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* password */}
        <div className="mb-4">
          <div className="flex justify-between">
            <label htmlFor="userPassword" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
            Forgot password?</a>
          </div>
          <input
            onChange={handleInputChange}
            type="password"
            id="userPassword"
            name="userPassword"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* submit button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer">   
        Log In 
      </button>
    </form>
  )
}

export default LoginForm;
