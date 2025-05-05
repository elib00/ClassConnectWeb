import React from 'react'
import LoginForm from './form';

const LoginPage = () => {
  return (
    <div className="h-full w-full flex flex-col md:flex-row bg-[#f2f2f2] dark:bg-[#1a1a1a] font-sans">
      {/* left part - login form */}
      <div className="flex-1 bg-white p-6 md:p-12">
        <LoginForm />
      </div>
      
      {/* right part - logo and texts */}
      <div className="flex-1 flex items-center justify-center bg-[#f2f2f2] dark:bg-[#1a1a1a]">

      </div>
    </div>
  )
}

export default LoginPage;
