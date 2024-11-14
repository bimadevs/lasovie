import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsApp from '../components/Whatsapp';

function Atasan() {
    const navigate = useNavigate();

    const products = [
        { id: 1, image: 'atasan/produk-1.jpeg', title: 'Inara Dress Lengan Kancing Oversize', description: 'Bahan Knit Premium Tebal Halus' },
        { id: 2, image: 'atasan/produk-2.jpeg', title: 'Inara Dress Lengan Kancing Oversize', description: 'Bahan Knit Premium Tebal Halus' },
        { id: 3, image: 'atasan/produk-3.jpeg', title: 'Inara Dress Lengan Kancing Oversize', description: 'Bahan Knit Premium Tebal Halus' },
        { id: 4, image: 'atasan/produk-4.jpeg', title: 'Inara Dress Lengan Kancing Oversize', description: 'Bahan Knit Premium Tebal Halus' },
        { id: 5, image: 'atasan/produk-5.jpeg', title: 'Inara Dress Lengan Kancing Oversize', description: 'Bahan Knit Premium Tebal Halus' },
        { id: 6, image: 'atasan/produk-6.jpeg', title: 'Inara Dress Lengan Kancing Oversize', description: 'Bahan Knit Premium Tebal Halus' },
        { id: 7, image: 'atasan/produk-7.jpeg', title: 'Inara Dress Lengan Kancing Oversize', description: 'Bahan Knit Premium Tebal Halus' },
        { id: 8, image: 'atasan/produk-8.jpeg', title: 'Inara Dress Lengan Kancing Oversize', description: 'Bahan Knit Premium Tebal Halus' },
        { id: 9, image: 'atasan/produk-9.jpeg', title: 'Inara Dress Lengan Kancing Oversize', description: 'Bahan Knit Premium Tebal Halus' },
        { id: 10, image: 'atasan/produk-10.jpeg', title: 'Inara Dress Lengan Kancing Oversize', description: 'Bahan Knit Premium Tebal Halus' },
        { id: 11, image: 'atasan/produk-11.jpeg', title: 'Inara Dress Lengan Kancing Oversize', description: 'Bahan Knit Premium Tebal Halus' },
        { id: 12, image: 'atasan/produk-12.jpg', title: 'Inara Dress Lengan Kancing Oversize', description: 'Bahan Knit Premium Tebal Halus' },
        // Tambahkan produk lainnya...
    ];

    return (
        <>
            <Navbar />
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
                                        <button onClick={() => navigate(`/atasan/${product.id}`)} className="bg-slate-500 hover:bg-slate-600 text-white text-sm font-medium px-3 py-1 rounded-lg">
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

export default Atasan;