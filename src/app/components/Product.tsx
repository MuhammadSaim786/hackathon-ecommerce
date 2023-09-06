import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import p2 from '/public/item3.png'
import p1 from '/public/item1.png'
import p3 from '/public/item2.png'


export default function Product() {
  return (
    <main>
      <h1 className='text-center text-blue-900 font-bold '>Products</h1>
      <h6 className='text-center font-bold py-10 mb-5'>Check What We Have</h6>
      <div className='flex jusity-between px-40 '>
        <div >
          <Link href={'/'} >
            <Image src={p1} alt='1' className=' px-11 mb-5 hover '/>
            <h4 className='px-11 font-bold'>Brushed Raglan Sweatshirt
              <br/>
                $195.00
            </h4>
          </Link> 
          </div>
        <div>
          <Link href={'/'}>
            <Image src={p2} alt='2' className='py-35'/>
            <h4 className='px-11 font-bold'>Cameryn Sash Tie Dress
              <br/>
                $595.00
            </h4>
          </Link>
        </div>
        <div>
          <Link href={'/'}>
            <Image src={p3} alt='3' className='px-11'/>
            <h4 className='px-11 font-bold'>Flex Sweatshirt
              <br/>
                $175.00
            </h4>
          </Link>
        </div>
      </div>
    </main>
    
  )
}
