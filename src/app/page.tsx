import Image from 'next/image'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Promotion from './components/Promotion'
import Newsletter from './components/Newsletter'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Product from './components/Product'
import { client } from './lib/sanityClient'
import { ProductCard } from './ProductCard';


export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    title,
    description
  }`);
  return res
}



interface IProduct {
  title: string,
  description: string
  image: string[]
}


export default async function Home() {
  const data: IProduct[] = await getProductData()
  return (
    <div>
      <Navbar/>
      <Header/>
      <Promotion/>
      <Feature/>
      <Product/>
      <Newsletter/>
      <Footer/>
       
      
      
    </div>
    
  )
}
