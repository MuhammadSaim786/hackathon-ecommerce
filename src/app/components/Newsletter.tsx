import React from 'react'

export default function Newsletter(){
  return (
    <section className='newsletter'>
      <div className="text-slate-200 text-center font-extrabold text-xl justify-center mt-10">
        Newsletter
      </div>
      <h1 className='text-center font-bold py-5'>Subscribe Our Newsletter</h1>
      <p className='text-center'>Get the latest information and promo offers directly</p>
      <form className='justify-items-center text-center py-5'>
        <input type='email' placeholder='Input email address'className='outline-black px-2'></input>
        <button type='submit' className='py-1 px-3 bg-black text-white'>Get Started</button>
      </form>
    </section>
  )
}

