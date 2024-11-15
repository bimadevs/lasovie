import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate()
    const socialLinks = [
        { href: '#', iconClass: 'fab fa-instagram fa-lg', label: 'Instagram' },
        { href: '#', iconClass: 'fab fa-facebook fa-lg', label: 'Facebook' },
        { href: '#', iconClass: 'fab fa-youtube fa-lg', label: 'YouTube' },
        { href: '#', iconClass: 'fab fa-tiktok fa-lg', label: 'TikTok' },
    ];

    return (
        <footer className="bg-gray-900 text-gray-200 py-12">
            <div className="container mx-auto px-4">
                {/* Brand Section */}
                <div className="mb-8 text-center">
                    <h3 className="text-3xl font-bold text-white mb-2">Lasovie</h3>
                    <p className="text-sm lg:text-base">
                        Elevating Luxury, Artistry, Refined Appeal.
                    </p>
                </div>

                {/* Description Section */}
                <div className="text-center mb-8">
                    <p className="text-sm lg:text-base leading-relaxed max-w-4xl mx-auto">
                        Lasovie adalah brand fashion wanita yang memadukan keanggunan dan kekuatan dalam setiap detail desainnya. 
                        Didedikasikan untuk wanita modern yang percaya diri, anggun, dan berani, Lasovie hadir untuk Anda yang ingin 
                        mengekspresikan diri dengan gaya unik dan penuh makna.
                    </p>
                    <p className="text-sm lg:text-base leading-relaxed max-w-4xl mx-auto mt-4">
                        Setiap koleksi kami dirancang dengan sentuhan inovatif yang memancarkan kesan mewah, namun tetap praktis 
                        dan mudah dipadupadankan dalam kehidupan sehari-hari. Temukan potongan yang akan mengubah cara Anda melihat 
                        dunia, dan jadilah versi terbaik dari diri Anda dengan Lasovie.
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="text-center mb-8">
                    <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
                    <div className="flex justify-center space-x-4">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                // href={link.href}
                                onClick={() => navigate('/undifined')}
                                className="text-gray-400 hover:text-gray-700 transition duration-300"
                                aria-label={link.label}
                            >
                                <i className={link.iconClass}></i>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center border-t border-gray-700 pt-4">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Lasovie. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
