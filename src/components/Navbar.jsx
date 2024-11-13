import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };



    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <a onClick={() => navigate('/')} className="cursor-pointer text-2xl font-bold text-pink-500">Lasovie</a>

                {/* Mobile Menu Button */}
                <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="px-4 pt-2 pb-4 space-y-2 bg-gray-100">
                    <a onClick={() => navigate('/')} className="cursor-pointer md:text-2xl block text-gray-700 hover:text-pink-500">Home</a>
                    <div className="relative">
                        <button onClick={toggleDropdown}
                                className="md:text-2xl block w-full text-left text-gray-700 hover:text-pink-500 focus:outline-none">
                            Kategori
                        </button>
                        {isDropdownOpen && (
                            <div className="bg-white shadow-lg rounded-lg mt-2 py-2 cursor-pointer">
                                <a onClick={() => navigate('/atasan')} className="md:text-xl block px-4 py-2 text-gray-700 hover:bg-pink-100">Atasan</a>
                                <a onClick={() => navigate('/bawahan')} className="md:text-xl block px-4 py-2 text-gray-700 hover:bg-pink-100">Bawahan</a>
                                <a onClick={() => navigate('/hijab')}className="md:text-xl block px-4 py-2 text-gray-700 hover:bg-pink-100">Hijab</a>
                            </div>
                        )}
                    </div>
                    <a onClick={() => navigate('/market')} className="cursor-pointer md:text-2xl block text-gray-700 hover:text-pink-500">Where to Buy</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
