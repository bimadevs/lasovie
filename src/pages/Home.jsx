import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import KategoriProduk from '../components/KategoriProduk'
import ProductCarousel from '../components/ProdukCarousel'
import Footer from '../components/Footer'


function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <KategoriProduk />
      <ProductCarousel />
      <Footer />
    </>
  )
}

export default Home
