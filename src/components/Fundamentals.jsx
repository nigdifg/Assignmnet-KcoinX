import React from 'react'
import one from '../assets/one.png'
import two from '../assets/two.png'
function Fundamentals() {
   
      return (
        <div className="bg-white w-[95%]  xl:w-[55.0625rem] max-w-[55.0625rem] mx-auto  pt-12 pb-16 lg:pt-6 lg:px-6 lg:pb-10 rounded-2xl xl:mb-24">
          <h1 className="text-2xl font-bold  leading-5 mb-4 lg:pb-4">
            About Bitcoin?
          </h1>
          <hr></hr>
          <h2 className='text-bold'>
            What is Bitcoin?
          </h2>
          <p className='mt-2'>
            Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.
          </p>
          <hr />
        <h1 className='text-2xl mt-2 font-bold leading-5 mb-4 lg:pb-4'>
            Who created Bitcoin?
        </h1>
        <p className='mt-2'>
            Bitcoin was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software.
        </p>

        <hr />
        <h1 className='text-2xl mt-2 font-bold leading-5 mb-4 lg:pb-4'>
            Already Holding Bitcoin?
        </h1>


        <div className='flex justify-evenly lg:flex-row md:flex-row sm:flex-col'>
        
        <div className="max-w-sm w-100% bg-gradient-to-r from-indigo-400 from-5% via-sky-670 via-90% to-emerald-700 to-90% rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={one} alt="img" />
            </a>
            <div className="p-10">
                <a href="#">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Calculate your Profits</h2>
                </a>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Check Now
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
        <div className="max-w-sm w-100% bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={two} alt="img" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Calculate your tax Liability</h2>
                </a>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Check Now
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
        </div>


        </div>
      );
    
    
}

export default Fundamentals