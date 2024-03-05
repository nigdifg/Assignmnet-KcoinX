import React from 'react'
import ChartDonut from './ChartDonut'
function Tokenomics() {
  return (
    <div className='bg-white'>
        <h1 className='text-2xl font-bold'>

        Tokenomics
        </h1>
        <h1 className='flex mt-4 flex-row'>
        Initial distribution{' '}
        </h1>
        <ChartDonut/>
        <div className='mt-4'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde sed eveniet odio pariatur tenetur neque explicabo illo nobis quas doloribus praesentium fugiat delectus, illum quasi possimus, aperiam quod eum.
            </p>
        </div>
    </div>
  )
}

export default Tokenomics