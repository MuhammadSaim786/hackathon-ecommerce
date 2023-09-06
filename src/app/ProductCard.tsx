"use client"

import React, { FC } from 'react'
import { urlForImage } from '../../sanity/lib/image';
import Image from 'next/image'


export const  ProductCard: FC<{ item:any }> = ({item}) => {

  


    const handleAddToCart = async () => {
    const res = fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
            product_id: item._id
        })
    })
   
    const result = await (await res).json()
    console.log(result);
}
  return (
    <div>
         <Image 
            width={300}
            height={300}
            src={urlForImage(item.image).url()} alt='product'/>
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>
            <button onClick={handleAddToCart}className='border py-2 px-6 rounded text-white bg-blue-600'>Add To Cart</button>
    </div>
  )
}
