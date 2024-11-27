import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const images = [
        '/images/intro/intro.jpeg',
        '/images/intro/intro2.jpeg',
        '/images/intro/about.jpeg',
        '/images/intro/about2.jpeg',
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
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Lasovie ${index + 1}`}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    ))}
                </div>
            </div>

            {/* Navigasi Dot */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                            currentIndex === index ? 'bg-black' : 'bg-gray-300'
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
