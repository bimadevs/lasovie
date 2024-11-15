import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import WhatsApp from '../components/Whatsapp';

function Bawahan() {
    const navigate = useNavigate();

    const products = [
        { id: 1, image: 'bawahan/produk-1.jpeg', title: 'Rok Plisket Kembang Lilly Daily Lasovie ', description: 'Bahan Skin Premium' },
        { id: 2, image: 'bawahan/produk-2.jpeg', title: 'Rok Plisket Kembang Lilly Daily Lasovie ', description: 'Bahan Skin Premium' },
        { id: 3, image: 'bawahan/produk-3.jpeg', title: 'Rok Plisket Kembang Lilly Daily Lasovie ', description: 'Bahan Skin Premium' },
        { id: 4, image: 'bawahan/produk-4.jpeg', title: 'Rok Plisket Kembang Lilly Daily Lasovie ', description: 'Bahan Skin Premium' },
        { id: 5, image: 'bawahan/produk-5.jpeg', title: 'Rok Plisket Kembang Lilly Daily Lasovie ', description: 'Bahan Skin Premium' },
        // Tambahkan produk lainnya...
    ];

    return (
        <>
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold  mb-12 text-center">Produk Atasan</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-200">
                                <img src={`images/${product.image}`} alt={product.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg text-gray-700">{product.title}</h3>
                                    <p className="text-gray-500 mt-2">{product.description}</p>
                                    <div className="flex items-center justify-between mt-4">
                                        <button onClick={() => navigate(`/bawahan/${product.id}`)} className="bg-slate-500 hover:bg-slate-600 text-white text-sm font-medium px-3 py-1 rounded-lg">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <WhatsApp />
            <Footer />
        </>
    );
}

export default Bawahan;