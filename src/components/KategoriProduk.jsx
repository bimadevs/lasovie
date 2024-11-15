import React from 'react';
import { useNavigate } from 'react-router-dom';

function KategoriProduk() {
    const navigate = useNavigate();

    const categories = [
        { name: 'Kategori Atasan Lasovie', path: '/atasan', imageSrc: 'images/atasan/produk-1.jpeg' },
        { name: 'Kategori Bawahan Lasovie', path: '/bawahan', imageSrc: 'images/bawahan/produk-1.jpeg' },
        { name: 'Kategori Hijab Lasovie', path: '/hijab', imageSrc: 'images/comingsoon.jpg' },
    ];

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2
                    className="text-3xl font-bold text-gray-800 mb-8 text-center"
                    data-aos="fade-up"
                >
                    Kategori Produk
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            onClick={() => handleNavigation(category.path)}
                            className="block group cursor-pointer"
                            data-aos="zoom-in"
                            data-aos-delay={index * 200} // Tambahkan delay untuk animasi berurutan
                        >
                            <div className="relative overflow-hidden rounded-lg shadow-md">
                                <img
                                    src={category.imageSrc}
                                    alt={category.name}
                                    className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition duration-300 group-hover:bg-opacity-50 ">
                                    <h3 className="text-white text-2xl font-semibold">
                                        {category.name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default KategoriProduk;
