import Image from 'next/image'
import React from 'react'
import a from '/public/item1.png'
import b from '/public/item2.png'
import c from '/public/item3.png'
import d from '/public/item4.png'
import e from '/public/item5.png'
import f from '/public/item6.png'
import g from '/public/item7.png'
import h from '/public/item8.png'
import i from 'public/male1.png'
import j from 'public/male2.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function hello() {
    return (
        <div>
            <Navbar />
            <div className='flex content-around px-20'>
                <div>
                    <Image src={i} alt='a' />
                    <h3 className='font-bold mt-5'>Flex Push Button Bomber
                        <br />Jackets
                        <br />$225</h3>
                        <br/><button className='py-3 px-6 bg-blue-800 text-white'>Add To Cart</button>
                </div>
                <div className='px-20'>
                    <Image src={j} alt='b' />
                    <h3 className='font-bold mt-5'>Raglan Sweatshirt
                        <br />Sweater
                        <br />$195</h3>
                        <br/><button className='py-3 px-6 bg-blue-800 text-white'>Add To Cart</button>
                </div>
                <div>
                    <Image src={c} alt='a' />
                    <h3 className='font-bold mt-5'>Flex Push Button Bomber
                        <br />Jackets
                        <br />$225</h3>
                        <br/><button className='py-3 px-6 bg-blue-800 text-white'>Add To Cart</button>
                </div>
                <div className='px-20'>
                    <Image src={d} alt='b' />
                    <h3 className='font-bold mt-5'>Raglan Sweatshirt
                        <br />Sweater
                        <br />$195</h3>
                        <br/><button className='py-3 px-6 bg-blue-800 text-white'>Add To Cart</button>
                </div>
                </div>
                <div className='flex content-around px-20 mt-5'>
                <div>
                    <Image src={e} alt='a' />
                    <h3 className='font-bold mt-5'>Flex Push Button Bomber
                        <br />Jackets
                        <br />$225</h3>
                        <br/><button className='py-3 px-6 bg-blue-800 text-white'>Add To Cart</button>
                </div>
                <div className='px-20'>
                    <Image src={f} alt='b' />
                    <h3 className='font-bold mt-5'>Raglan Sweatshirt
                        <br />Sweater
                        <br />$195</h3>
                        <br/><button className='py-3 px-6 bg-blue-800 text-white'>Add To Cart</button>
                </div>
                <div>
                    <Image src={g} alt='a' />
                    <h3 className='font-bold mt-5'>Flex Push Button Bomber
                        <br />Jackets
                        <br />$225</h3>
                        <br/><button className='py-3 px-6 bg-blue-800 text-white'>Add To Cart</button>
                </div>
                <div className='px-20'>
                    <Image src={h} alt='b' />
                    <h3 className='font-bold mt-5'>Raglan Sweatshirt
                        <br />Sweater
                        <br />$195</h3>
                        <br/><button className='py-3 px-6 bg-blue-800 text-white'>Add To Cart</button>
                </div>
            </div>
            <div className='flex content-around mt-5 px-20'>
                <div>
                    <Image src={a} alt='a' />
                    <h3 className='font-bold mt-5'>Flex Push Button Bomber
                        <br />Jackets
                        <br />$225</h3>
                        <br/><button className='py-3 px-6 bg-blue-800 text-white'>Add To Cart</button>
                </div>
                <div className='px-20'>
                    <Image src={b} alt='b' />
                    <h3 className='font-bold mt-5'>Raglan Sweatshirt
                        <br />Sweater
                        <br />$195</h3>
                        <br/><button className='py-3 px-6 bg-blue-800 text-white'>Add To Cart</button>
                </div>
                <div>
                    <Image src={c} alt='a' />
                    <h3 className='font-bold mt-5'>Flex Push Button Bomber
                        <br />Jackets
                        <br />$225</h3>
                        <br/><button className='py-3 px-6 bg-blue-800 text-white'>Add To Cart</button>
                </div>
                <div className='px-20'>
                    <Image src={d} alt='b' />
                    <h3 className='font-bold mt-5'>Raglan Sweatshirt
                        <br />Sweater
                        <br />$195</h3>
                        <br/><button className='py-3 px-6 bg-blue-800 text-white'>Add To Cart</button>
                </div>
                </div>  
            <Footer />
        </div>
    )
}