import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Atasan from './pages/Atasan'
import ProductCardAtasan from './components/ProdukAtasan'
import ProductDetailAtasan from './pages/ProdukDetailsAtasan'
import Marketplace from './pages/Marketplace'
import Bawahan from './pages/Bawahan'
import ProductDetailBawahan from './pages/ProdukDetailsBawahan'
import Hijab from './pages/Hijab'
import Navbar from './components/Navbar'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/atasan" element={<Atasan />} />
        <Route path="/atasan/:id" element={<ProductDetailAtasan />} /> {/* Rute untuk detail produk */}
        <Route path="/bawahan" element={<Bawahan />} />
        <Route path="/bawahan/:id" element={<ProductDetailBawahan />} /> {/* Rute untuk detail produk */}
        <Route path="/hijab" element={<Hijab />} />
        <Route path="/market" element={<Marketplace />} /> {/* Rute untuk detail produk */}
      </Routes>
    </Router>
  )
}

export default App
