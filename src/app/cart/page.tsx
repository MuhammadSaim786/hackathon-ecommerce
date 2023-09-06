import React from 'react'
import a from '/public/success-pay.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
export default function Cart() {
  return (
    <div>
        
        <Image src={a} alt='a' className='mt-5 mb-10'/>
        <Footer/>

    </div>
    
  )
}
