'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Image from 'next/image';
import { menuItems } from '@/data/menuItems';
import { IoArrowForward } from 'react-icons/io5';
import ConferenceCountdown from '@/components/temp/ConferenceCountdown';

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
                <nav className="w-full min-w-0 overflow-x-hidden shadow-md bg-white flex items-center py-2 px-4 md:py-6 md:px-2">
                    {/* Logo + Conference Countdown — shared square-pill frame */}
                    <div className="flex flex-shrink-0 items-stretch overflow-hidden rounded-none border-2 border-[#35075B] lg:ml-10">
                        <Link href="/" className="flex items-center px-3 py-1.5 md:px-4 md:py-2">
                            <Image priority={false} src="/images/icons/rjc_icon.png" alt="Racial Justice Centre" width={100} height={100} className="h-10 w-auto md:h-12"/>
                        </Link>
                        <ConferenceCountdown />
                    </div>

                    {/* Desktop Menu - shown from xl so logo + conference box always fit */}
                    <ul className="hidden xl:flex xl:space-x-6 2xl:space-x-10 flex-1 justify-end mr-2 xl:mr-10">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-foreground-accent transition-colors font-medium whitespace-nowrap text-base 2xl:text-lg">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA Button */}
                    <div className="hidden xl:block flex-shrink-0 mr-2 xl:mr-5">
                        <Link href="/#cta" onClick={scrollToDonation} className="font-semibold text-white bg-black hover:bg-primary-accent px-4 xl:px-6 2xl:px-8 py-2 xl:py-2.5 2xl:py-3 transition-colors flex items-center gap-2 text-sm 2xl:text-base whitespace-nowrap">
                            Donate <IoArrowForward className="w-3 h-3 xl:w-4 xl:h-4" />
                        </Link>
                    </div>

                    {/* Menu button — used below xl when nav links are collapsed */}
                    <div className="xl:hidden flex items-center ml-auto">
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

            {/* Collapsed menu with Transition */}
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
                        className="fixed inset-0 bg-black bg-opacity-25 xl:hidden z-40"
                        onClick={toggleMenu}
                    />
                </Transition.Child>

                {/* Collapsed menu panel */}
                <Transition.Child
                    enter="transition ease-out duration-300 transform"
                    enterFrom="opacity-0 -translate-y-2"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-200 transform"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-2"
                >
                    <div id="mobile-menu" className="xl:hidden bg-white shadow-xl border-t border-gray-100 relative z-50">
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
