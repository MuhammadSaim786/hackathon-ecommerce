import React from 'react'
import a from '/public/event1.webp'
import b from '/public/2.jpg'
import c from '/public/event2.webp'
import d from '/public/event3.webp'
import Image from 'next/image'

export default function Promotion() {
    return (
        <section>
            <h1 className=' text-center text-blue-950'>PROMOTIONS</h1>
            <h4 className=' text-center font-bold py-5'>Our Promotions Events</h4>
            <div className='flex place-content-evenly'>
                <div className='flex flex-col'>
                    <div className='bg-gray-300  box-border h-30 w-96'>
                        <div className='px-5 py-5'>
                            <h3 className='font-bold '>GET UP TO
                                <span className='fontbold'>  60%</span></h3>
                            <p className='mt-5'>For the summer season</p>
                        </div>
                        <Image src={a} alt='a' width={400} height={150} />
                    </div>

                    <div className='text-center bg-gray-700  text-white font-bold px-10 py-10 mt-5 box-border h-50 w-96' >
                        <h3>GET 30% Off</h3>
                        <p className='mt-3'>USE PROMO CODE</p>
                        <button className='bg-gray-500 py-3 px-5 mt-3'>DINEWEEKENDSALE</button>
                    </div>



                </div>
                <div>
                    <div className='flex justify-between'>
                        <div className='flex place-content-around  py-10 px-2 '>
                            <div className='box-border h-100 w-35 p-4 '>
                                <div className='bg-orange-100  justify-between px-5 py-5'>
                                    <p>Flex Sweatshirt</p>
                                    <div className='price'>
                                        <span className='line-through'>$100.00 </span>
                                        <span className='font-bold'>$75.00</span>
                                    </div>
                                    <Image src={c} alt='event' />
                                </div>

                            </div>


                        </div>
                        <div className='flex place-content-around  py-10 px2  mb-10'>
                            <div className='box-border h-100 w-35 p-4 '>
                                <div className='bg-orange-100  justify-between px-5 py-5'>
                                    <p>Flex Push Button Bomber</p>
                                    <div className='price'>
                                        <span className='line-through'>$225.00 </span>
                                        <span className='font-bold'>$190.00</span>
                                    </div>
                                    <Image src={d} alt='event' />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
