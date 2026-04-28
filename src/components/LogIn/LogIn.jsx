import React from 'react'

const LogIn = () => {
  return (
    <div className="relative top-8 left-[40%] w-[30%] flex flex-col items-center justify-center bg-gray-300 p-4">
        <form className='flex flex-col gap-1 w-full'>
            <h1 className="text-2xl font-bold mb-2">Login</h1>
            <label htmlFor="email" className="text-sm font-medium">Email or phone number</label>
            <input type="text" placeholder='Email or phone number' className="p-2 border border-gray-400 rounded" />

            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input type="password" placeholder='Password' className="p-2 border border-gray-400 rounded" />
            <button type='submit' className="mt-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded text-black font-medium cursor-pointer">Sign In</button>
        </form>
      
    </div>
  )
}

export default LogIn
