import React from 'react';

function Footer() {
    const socialLinks = [
        { href: '#', iconClass: 'fab fa-instagram fa-lg', label: 'Instagram' },
        { href: '#', iconClass: 'fab fa-tiktok fa-lg', label: 'TikTok' },
    ];

    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Brand Section */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Lasovie</h3>
                        <p className="text-gray-600">Fashion untuk semua gaya</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Ikuti Kami</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.href} className="text-gray-600 hover:text-pink-400" aria-label={link.label}>
                                    <i className={link.iconClass}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="w-full md:w-1/3">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Kontak</h4>
                        <p className="text-gray-600">Email: info@Lasovie.com</p>
                        <a href="#" className="text-gray-600 hover:text-pink-400">Kebijakan Privasi</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
