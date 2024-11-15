// Undifend.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Undifend() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-8">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Kategori Ini Belum Tersedia</h1>
                <p className="text-gray-600 mb-8">Kami sedang menyiapkan koleksi terbaru untuk kategori ini. Silakan cek kembali nanti.</p>
                <Link to="/">
                    <button className="bg-slate-500 hover:bg-slate-600 text-white font-semibold px-5 py-2 rounded-lg transition duration-200">
                        Kembali ke Beranda
                    </button>
                </Link>
            </div>
            <Footer />
        </>
    );
}

export default Undifend;
