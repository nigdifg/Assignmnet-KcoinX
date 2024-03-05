import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "preline/preline";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const Like = (props) => {
    //code to fetch a trending coin data form an API
    const [trending, settrending] = useState(null);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/search/trending')
            .then((res) => {
                console.log(res.data);
                settrending(res.data);
            }).catch((err) => {
                console.log(err);
            })

    }, []);

    return (
        <div className="fixed bottom-0 mt-10 w-full items-center rounded-lg sm:py-[200px]  lg:py-[40px]">
            <div className="justify-center gap-[45px]">
               
                <div className="flex flex-row items-center gap-5">
                    <div>
                        <h4 className="ml-10 mt-0 font-bold text-2xl text-black">
                            You May Also Like
                        </h4>
                        <div data-hs-carousel='{
                                "loadingClasses": "opacity-0",
                                "isAutoPlay": false,
                                "isInfinite": false,
                                "autoplaySpeed": 5000,
                                "spaceBetween": 20
                            }' className="mb-40 relative justify-between gap-5 items-center">
                            <div className="bg-white hs-carousel relative w-full rounded-lg">
                                <div className="hs-carousel-body bg-white absolute flex flex-nowrap transition-transform duration-700">
                                    {trending ? (
                                        trending.coins.slice(0, 8).map((coin, index) => (
                                            <div key={index} className="hs-carousel-slide">
                                                <div className="flex justify-center h-full p-6">
                                                    <div className='flex flex-col items-center'>
                                                        <img src={coin.item.small} alt={coin.item.name} className="m-6 w-10 h-10" />
                                                        <p className="text-sm text-gray-500">{coin.item.symbol}</p>
                                                        
                                                        <img src={coin.sparkline} alt="{coin.item.name}" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>Loading...</p>
                                    )}
                                </div>
                            </div>

                            <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                                <span class="sr-only">Previous</span>
                                <span class="text-2xl" aria-hidden="true">
                                  {/* Your previous icon here */}
                                  <GrLinkPrevious/>
                                </span>
                            </button>
                            <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                                <span class="sr-only">Next</span>
                                <span class="text-2xl" aria-hidden="true">
                                  {/* Your next icon here */}
                                  <GrLinkNext />

                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Like;