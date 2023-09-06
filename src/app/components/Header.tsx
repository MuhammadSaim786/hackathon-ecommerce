import Image from 'next/image'
import React from 'react'
import header from '/public/header.webp'
import a from '/public/Featured1.webp'
import b from '/public/Featured2.webp'
import c from '/public/Featured3.webp'
import d from '/public/Featured4.webp'

export default function Header() {
    return (
        <main className='flex justify-around px-2 py-11 '>
            <div>
                <div>
                    <div className='py-4'>
                    <span className="inline-flex items-center rounded-md bg-sky-500/50 px-4 py-5 text-medium font-large text-gray-900 ">
                        Sale 70%
                    </span>
                    </div>
                    <div className='py-4'>
                    <h6 className='text-4xl font-extrabold  py-9'>
                        An Industrial <br/>
                        Take on <br/>
                        Streetwear
                    </h6>
                    </div>
                    <p className='text-gray-500 py-9'>
                        Anyone can beat you but no one can<br/>
                         beat your outfit as long as you wear <br/>
                         Dine outfits.
                    </p>
                    <div className='py-4'>
                    <a href='/allproducts' >
                        <button className='btn flex py-5 bg-black text-white px-4 ' type='button'>
                        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="26" width="26" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z" fill="currentColor"></path><path d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z" fill="currentColor"></path><path d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z" fill="currentColor"></path></svg>
                        Start Shopping
                        </button>
                    </a>
                    </div>
                    <div className='flex py-9 bg-auto '>
                        <Image src={a} alt='a' className='px-2'/>
                        <Image src={b} alt='b' className='px-2'/>
                        <Image src={c} alt='c' className='px-2'/>
                        <Image src={d} alt='d' className='px-2'/>



                    </div>


                </div>
            </div>
            <div className='rounded-full bg-orange-100 h-50 w-90'><Image src={header} alt='header ' /></div>
        </main>
    )
}
