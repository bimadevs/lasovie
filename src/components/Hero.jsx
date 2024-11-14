import React from 'react';

function Hero() {
    return (
        <section className="bg-white md:min-h-screen flex items-center mb-4 justify-center">
            <div className="w-full h-full shadow-lg  overflow-hidden">
                <video className="w-full h-full object-cover" autoPlay loop muted>
                    <source
                        src="videos/hero.mp4"
                        type="video/mp4"
                    />
                    Browser Anda tidak mendukung pemutar video.
                </video>
            </div>
        </section>
    );
}

export default Hero;
