import React from 'react'

const Header = () => {
  return (
    <>
        <header className="bg-white text-black py-4">
            <div className="container px-5 mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    {/* <span className="text-xl font-bold">BSF Test</span> */}
                    <img src="/assets/Swiggy-Logo.png" alt="header_logo" className="h-14"/>
                </div>

                {/* Search Box */}
                <div className="flex items-center bg-slate-100 rounded-sm px-4 py-2 shadow-sm">
                    <input type="text" placeholder="Search..." className="w-48 bg-slate-100 border-none outline-none" />
                    <button className="text-gray-600 focus:outline-none">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 17.5l3.5 3.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header