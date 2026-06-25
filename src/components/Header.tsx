'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Image from 'next/image';
import { menuItems } from '@/data/menuItems';
import { IoArrowForward } from 'react-icons/io5';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToDonation = (event: React.MouseEvent<HTMLAnchorElement>, closeMenu = false) => {
        if (closeMenu) {
            setIsOpen(false);
        }

        if (window.location.pathname !== '/') {
            return;
        }

        const donationSection = document.getElementById('cta');

        if (!donationSection) {
            return;
        }

        event.preventDefault();
        window.history.pushState(null, '', '/#cta');
        donationSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
        <header className="fixed bg-transparent top-0 left-0 right-0 z-50 mx-auto w-full">
            <div className="w-full">
                <nav className="w-full shadow-md bg-white flex items-center py-3 px-4 md:py-10 md:px-2">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 flex-shrink-0 lg:ml-10 pr-4 md:pr-2">
                        <Image priority={false} src="/images/icons/rjc_icon.png" alt="Racial Justice Centre" width={100} height={100}/>
                    </Link>

                    {/* Desktop Menu - Centered */}
                    <ul className="hidden md:flex lg:space-x-6 xl:space-x-12 md:space-x-4 sm:space-x-2 flex-1 justify-end mr-2 lg:mr-4 xl:mr-10">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-foreground-accent transition-colors font-medium whitespace-nowrap text-[10px] md:text-xs lg:text-sm xl:text-base">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:block flex-shrink-0 mr-2 lg:mr-5">
                        <Link href="/#cta" onClick={scrollToDonation} className="font-semibold text-white bg-black hover:bg-primary-accent px-4 md:px-6 lg:px-8 py-2 md:py-2.5 lg:py-3 transition-colors flex items-center gap-2 text-sm md:text-base whitespace-nowrap">
                            Donate <IoArrowForward className="w-3 h-3 md:w-4 md:h-4" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center ml-auto">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-black hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-lg p-2 transition-colors"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu with Transition */}
            <Transition show={isOpen}>
                {/* Backdrop */}
                <Transition.Child
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-25 md:hidden z-40"
                        onClick={toggleMenu}
                    />
                </Transition.Child>

                {/* Mobile Menu */}
                <Transition.Child
                    enter="transition ease-out duration-300 transform"
                    enterFrom="opacity-0 -translate-y-2"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-200 transform"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-2"
                >
                    <div id="mobile-menu" className="md:hidden bg-white shadow-xl border-t border-gray-100 relative z-50">
                        <div className="px-4 py-6 space-y-1">
                            {menuItems.map(item => (
                                <Link
                                    key={item.text}
                                    href={item.url}
                                    className="block px-4 py-3 text-base font-medium text-gray-900 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                                    onClick={toggleMenu}
                                >
                                    {item.text}
                                </Link>
                            ))}
                            <div className="pt-4 mt-4 border-t border-gray-200">
                                <Link 
                                    href="/#cta" 
                                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-semibold text-white bg-black hover:bg-gray-800 rounded-lg transition-colors"
                                    onClick={(event) => scrollToDonation(event, true)}
                                >
                                    Donate <IoArrowForward className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Transition.Child>
            </Transition>
        </header>
    );
};

export default Header;
