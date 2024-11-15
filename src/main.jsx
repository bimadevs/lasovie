import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'aos/dist/aos.css';
import AOS from 'aos';

import App from './App.jsx'

AOS.init({
  duration: 800, // Durasi animasi (ms)
  easing: 'ease-in-out', // Tipe transisi
  once: true, // Hanya sekali animasi berjalan
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
