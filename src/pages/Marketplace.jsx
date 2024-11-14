import React from 'react';
import tokopediaLogo from '/images/tokopedia.png'; // Ubah path sesuai lokasi gambar
import shopeeLogo from '/images/shopee.png'; // Ubah path sesuai lokasi gambar
import bukalapakLogo from '/images/bukalapak.png'; // Ubah path sesuai lokasi gambar
import Footer from '../components/Footer';
import WhatsApp from '../components/Whatsapp';

const Marketplace = () => {
    return (
        <>
        <div className="flex justify-center items-center h-screen">
            <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-lg">
                <h1 className="text-3xl font-extrabold  mb-4">
                    Marketplace & E-commerce Official Store
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    We are available at
                </p>
                <div className="flex justify-center space-x-6">
                    {/* Logo Tokopedia */}
                    <a href="#" className="transform transition-transform duration-200 hover:scale-110">
                        <img alt="Tokopedia logo" className="h-16 w-auto" src={tokopediaLogo} />
                    </a>
                    {/* Logo Shopee */}
                    <a href="#" className="transform transition-transform duration-200 hover:scale-110">
                        <img alt="Shopee logo" className="h-16 w-auto" src={shopeeLogo} />
                    </a>
                    {/* Logo Bukalapak */}
                    <a href="#" className="transform transition-transform duration-200 hover:scale-110">
                        <img alt="Bukalapak logo" className="h-16 w-auto" src={bukalapakLogo} />
                    </a>
                </div>
            </div>
        </div>
        <WhatsApp />
        <Footer />
        </>
    );
};

export default Marketplace;