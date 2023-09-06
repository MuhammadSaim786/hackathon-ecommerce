import Image from 'next/image'
import React from 'react'
import m1 from '/public/male1.png'
import m2 from '/public/male2.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function hello() {
  return (
    <div>
      <Navbar/>
    <div className='flex px-20'>
      <div>
        <Image src={m1} alt='a' />
        <h3 className='font-bold mt-5'>Flex Push Button Bomber
          <br />Jackets
          <br />$225

        </h3>

      </div>
      <div className='px-20'>
        <Image src={m2} alt='b' />
        <h3 className='font-bold mt-5'>Raglan Sweatshirt
          <br />Sweater
          <br />$195

        </h3>

      </div>
    </div>
    <Footer/>
    </div>
  )
}
