import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
import { GrLinkNext } from "react-icons/gr";
import Chart from './Chart';
function Sentiments
() {
  return (
    <div className='bg-white'>
        <h1 className='text-2xl font-bold'>

        Sentiments
        </h1>
    <h1 className='flex flex-row'>
        Key Events {' '}
         <CiCircleInfo />
    </h1>

    <div className="flex lg:flex-row sm:flex-col justify-evenly  relative w-full  h-auto">
                      <div className="bg-blue-500 gap-1 p-3  xl:p-4 h-full">
                          <div className="block">
                              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z" stroke="white" strokeWidth="2" strokeLinecap="round"></path>
                                  </svg>                                
                          </div>
                          <h3 className="py-5 text-white text-lg font-bold xl:text-xl">Lorem Epsum Heading
                           </h3>
                          <p className="text-xs font-normal text-white mb-8"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              </p>
                          <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                              View More
                              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                  
                          </button>
                      </div>
                      <div className="bg-blue-500 gap-1 p-3  xl:p-4 h-full">
                          <div className="block">
                              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z" stroke="white" strokeWidth="2" strokeLinecap="round"></path>
                                  </svg>                                
                          </div>
                          <h3 className="py-5 text-white text-lg font-bold xl:text-xl">Lorem Epsum Heading
                           </h3>
                          <p className="text-xs font-normal text-white mb-8"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              </p>
                          <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                              View More
                              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>

                          </button>
                      </div>
                      <div className='mt-20'>
                      <GrLinkNext />
                      </div>

                   
     </div>
     <h1 className='mt-8 flex flex-row'>
        Analyst Estimate {' '}
         <CiCircleInfo />
    </h1>
    <Chart/>
        
    </div>
  )
}

export default Sentiments
