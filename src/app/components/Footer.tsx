import React from 'react'
import logo from '/public/Logo.webp'
import Image from 'next/image'
import {GrFacebookOption, GrTwitter, GrLinkedinOption} from 'react-icons/gr'

export default function Footer() {
  return (
    <footer>
      <div className='flex justify-around mt-10'>
        <div className='flex-col justify-between'>
          <Image src={logo} width={180} height={30} alt='logo' />
          <p className='mt-5'>Small, artisan label that offers a<br/> thoughtfully curated collection of <br/>high quality everyday essentials made.</p>
          <div className='flex  mb-5 mt-5 py-2'>
            <div className='px-2'><GrTwitter size={20} /></div>
            <div className='px-2'><GrFacebookOption size={20} /></div>
            <div className='px-2'><GrLinkedinOption size={20} /></div>
          </div>
        </div>

        <div className='footer-links'>
          <h3 className='font-bold text-gray-900 mb-5'>Company</h3>
          <ul >
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3 className='font-bold text-gray-900 mb-5'>Support</h3>
          <ul>
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3 className='font-bold text-gray-900 mb-5'>Contact</h3>
          <ul >
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>

      <div className='flex justify-around mt-10 mb-10'>
        <p>Copyright © 2023 Dine Market</p>
        <p>Design by. <span className='font-bold'>Weird Design Studio</span></p>
        <p>Code by. <span className='font-bold'>MuhammadSaim786 on github</span></p>
      </div>
    </footer>
    
  )
}
