import { useState } from 'react'
import Hero from '../components/Hero'
import KategoriProduk from '../components/KategoriProduk'
import ProductCarousel from '../components/ProdukCarousel'
import Footer from '../components/Footer'
import WhatsApp from '../components/Whatsapp'
import Intro from '../components/Intro'
import Carousel from '../components/Carousel'


function Home() {

  return (
    <>
      <Hero />
      <Carousel />
      <KategoriProduk />
      <ProductCarousel />
      <WhatsApp />
      <Footer />
    </>
  )
}

export default Home
