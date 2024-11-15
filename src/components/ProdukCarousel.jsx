import React from 'react';
import {useNavigate} from 'react-router-dom'

function ProductCarousel() {
    const navigate = useNavigate()
    const products = [
        {
            id : "1",
            title: 'Inara Dress Lengan Kancing Oversize',
            description: 'Bahan Knit Premium Tebal Halus',
            link: './produk/atasan/produk1.html',
            imageSrc: 'images/atasan/produk-1.jpeg',
            path : '/atasan/'
        },
        {
            id : "2",
            title: 'Inara Dress Lengan Kancing Oversize',
            description: 'Bahan Knit Premium Tebal Halus',
            link: './produk/atasan/produk2.html',
            imageSrc: 'images/atasan/produk-2.jpeg',
            path : '/atasan/'
        },
        {
            id : "3",
            title: 'Inara Dress Lengan Kancing Oversize',
            description: 'Bahan Knit Premium Tebal Halus',
            link: './produk/atasan/produk3.html',
            imageSrc: 'images/atasan/produk-3.jpeg',
            path : '/atasan/'
        },
        {
            id : "4",
            title: 'Rok Plisket Kembang Lilly Daily',
            description: 'Bahan Skin Premium',
            link: './produk/bawahan/produk4.html',
            imageSrc: 'images/bawahan/produk-4.jpeg',
            path : '/bawahan/'
        },
        {
            id : "5",
            title: 'Rok Plisket Kembang Lilly Daily',
            description: 'Bahan Skin Premium',
            link: './produk/bawahan/produk5.html',
            imageSrc: 'images/bawahan/produk-5.jpeg',
            path : '/bawahan/'
        },
        {
            id : "2",
            title: 'Rok Plisket Kembang Lilly Daily',
            description: 'Bahan Skin Premium',
            link: './produk/bawahan/produk2.html',
            imageSrc: 'images/bawahan/produk-2.jpeg',
            path : '/bawahan/'
        },
    ];

    return (
        <div data-aos="fade-left" className="flex overflow-x-scroll scroll-smooth snap-mandatory snap-x space-x-4 p-4 scrollbar-hide">
            {products.map((product, index) => (
                <div key={index} className="min-w-[250px] snap-center  max-w-xs bg-white  shadow-lg rounded-lg overflow-hidden">
                    <img src={product.imageSrc} alt="Product Image" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="font-semibold text-lg">{product.title}</h2>
                        <p className="text-gray-500 mt-2">{product.description}</p>
                        <div className="flex items-center justify-between mt-4">
                            <a onClick={() => navigate(`${product.path} ${product.id}`)}>
                                <button className="bg-slate-400 hover:bg-slate-500 text-white text-sm px-3 py-1 rounded">
                                    Read More
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductCarousel;
