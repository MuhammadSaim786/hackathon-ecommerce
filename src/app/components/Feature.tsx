import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from '/public/feature.png'

export default function Feature() {
  return (
    <section className='features-section'>
      <div className='font-bold text-center mt-5 mb-5'>
        <h6>Unique and Authentic Vintage Designer Jewellery</h6>
      </div>

      <div className='content'>
        <div className='justify-around flex'>
          <div className="font-extralight text-transparent text-center">
            Different from others
          </div>
          
          <div>
            <h3 className='font-bold px-1 mb-3'>Using Good Quality Materials</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className='font-bold px-1 mb-3'>100% Handmade Products</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          
          
          <div>
            <h3 className='font-bold px-1 mb-3'>Modern Fashion Design</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className='font-bold px-1 mb-3'>Discount for Bulk Orders</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className='flex justify-evenly px-20 mt-10'>
          <Image src={img} width={300} height={350} alt='img' />
          <div>
            <p className='px-8 mt-40'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
            <Link href={'/allproducts'} className='px-8'>
              <button className='btn px-10 mt-20 bg-black text-center text-white' type='button'>See All Product</button>
            </Link>
            
            
          </div>
        </div>
      </div>
    </section>
  )
}
