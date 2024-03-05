import React, { useEffect,useState } from 'react'
import axios from 'axios';
const TrendingCoin = (props) => {
    //code to fetch a trending coin data form an API
    const [trending,settrending] = useState(null);

    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/search/trending')
        .then((res)=>{
            console.log(res.data);
              settrending(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    
    },[]);

   
  return (
    <div
      className={` bg-white mx-auto  w-full max-w-[26.6875rem]    rounded-lg   py-[30px] ${
        props.className ? props.className : ""
      }`}>
      <div className="flex flex-col gap-[45px] items-center justify-center">
        {/* text */}
        <div className="flex flex-col items-center justify-center gap-5">
          <div>
            <h4 className="font-bold text-2xl text-black leading-10">
              Trending Coins (24hr)
            </h4>
            <div>
      {trending ? (
        trending.coins.slice(0,3).map((coin, index) => (
        <div key={index} className="flex flex-col bg-gray items-center p-2 m-2 rounded shadow-md">
            <div className='flex flex-row'>

            <img src={coin.item.small} alt={coin.item.name} className="m-6 mt-0 bt-0 w-8 h-8" />
            <p className="text-sm text-gray-500">{coin.item.symbol}</p>
            </div>
            <div className="mt-0 text-center">
                <p className="text-xl font-semibold text-gray-700">{coin.item.name}</p>
                
            </div>
        </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>  
          </div>
        </div>
        {/* image & button */}

        

       
      </div>
    </div>
  );
};


export default TrendingCoin;