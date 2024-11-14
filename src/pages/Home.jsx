import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import KategoriProduk from '../components/KategoriProduk'
import ProductCarousel from '../components/ProdukCarousel'
import Footer from '../components/Footer'
import WhatsApp from '../components/Whatsapp'
import Intro from '../components/Intro'


function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <KategoriProduk />
      <ProductCarousel />
      <WhatsApp />
      <Footer />
    </>
  )
}

export default Home
