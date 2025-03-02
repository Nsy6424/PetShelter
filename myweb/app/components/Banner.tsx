import React from 'react'
import Image from "next/image";
import Link from 'next/link';


const Banner = () => {
  return (
    <div>
        <img src="/images/banner1.png" 
        className='w-full h-25 '
        />
         <img src="/images/banner2.png" 
        className='w-full h-25 '
        />
        
         <img src="/images/banner3.png" 
        className='w-full h-25 '
        />
    </div>
  )
}

export default Banner