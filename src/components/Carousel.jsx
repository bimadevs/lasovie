import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const images = [
        'images/intro/intro.jpeg',
        'images/intro/intro2.jpeg',
        'images/intro/about.jpeg',
        'images/intro/about2.jpeg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Fungsi untuk mengubah gambar setiap 3 detik
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Gambar berubah setiap 3 detik

        // Cleanup interval ketika komponen dibersihkan
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-auto rounded-lg"
                />
            </div>

            {/* Navigasi Dot */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-black' : 'bg-gray-300'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
