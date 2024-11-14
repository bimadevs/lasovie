import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Hamburger Menu Button - Left */}
                <button
                    onClick={toggleMobileMenu}
                    className="text-gray-700 focus:outline-none "
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Logo Only - Center */}
                <a onClick={() => navigate('/')} className="flex cursor-pointer items-center mx-auto">
                    <img 
                        src="images/logo.png" 
                        alt="Lasovie Logo" 
                        className='w-20 h-10 object-contain' // Adjust size here
                    />
                </a>

                {/* Mobile Menu with Animation */}
                <div
                    className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50  ${
                        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    } transition-opacity duration-300`}
                    onClick={toggleMobileMenu} // Click outside to close
                >
                    <div
                        className={`w-2/3 bg-white h-full fixed left-0 p-4 space-y-4 shadow-lg transform ${
                            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        } transition-transform duration-300`}
                        onClick={(e) => e.stopPropagation()} // Prevent click outside from closing the menu
                    >
                        <a
                            onClick={() => navigate('/')}
                            className="md:text-2xl cursor-pointer block text-gray-700"
                        >
                            Home
                        </a>
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="md:text-2xl block w-full text-left text-gray-700 hover:text-gray-800 focus:outline-none"
                            >
                                Kategori
                            </button>
                            {isDropdownOpen && (
                                <div className="bg-white shadow-lg rounded-lg mt-2 py-2">
                                    <a
                                        onClick={() => navigate('/atasan')}
                                        className="md:text-xl block px-4 py-2 text-gray-700 hover:bg-gray-300"
                                    >
                                        Atasan
                                    </a>
                                    <a
                                        onClick={() => navigate('/bawahan')}
                                        className="md:text-xl block px-4 py-2 text-gray-700 hover:bg-gray-300"
                                    >
                                        Bawahan
                                    </a>
                                    <a
                                        onClick={() => navigate('/hijab')}
                                        className="md:text-xl block px-4 py-2 text-gray-700 hover:bg-gray-300"
                                    >
                                        Hijab
                                    </a>
                                </div>
                            )}
                        </div>
                        <a
                            onClick={() => navigate('/market')}
                            className="md:text-2xl block text-gray-700 "
                        >
                            Where to Buy
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
