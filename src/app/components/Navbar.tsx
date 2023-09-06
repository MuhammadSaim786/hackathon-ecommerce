import React from 'react'
import logo from 'public/Logo.webp'
import Image from 'next/image'
import {  ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'




export default function Navbar() {

  return (
    <div className='flex justify-evenly py-8'>
      <div><Link href={'/'}><Image src={logo} alt='logo' /></Link></div>
      <div><Link href='/female'>Female</Link> </div>
      <div><Link href='/male' >Male</Link></div>
      <div><Link href='/kids'>Kids</Link></div>
      <div><Link href='/allproducts'>All Products</Link></div>
      <div >
        <div className="flex border-1 rounded">
          <button className="flex items-center justify-center px-1 border-r">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              strokeWidth={1}
              stroke="currentColor"
              className="w-3 h-3 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <input
            type="text"
            className="px-2 py-2 w-60"
            placeholder="What you looking for"
          />
        </div>
      </div>
      <div className='h-10 w-10 rounded-full bg-gray-300' ><Link href={'/cart'}><ShoppingCartIcon/></Link></div>
    </div>




  )
}

