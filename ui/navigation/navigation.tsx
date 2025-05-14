'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

import LocaleSwitcher from './locale-switcher';
import NavigationItem from './navigation-item';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
            <Link href="/" className="flex items-center">
                <Image
                    src="/Toss_Logo_Primary.png"
                    alt="Toss Logo"
                    width={120}
                    height={32}
                    priority
                />
            </Link>

            <div className="hidden md:flex items-center space-x-6">
                <NavigationItem name="홈" url="/" />
                <NavigationItem name="회사 소개" url="/about" />
                <NavigationItem name="고객센터" url="/support" />
                <NavigationItem name="채용" url="/employment" />
                <LocaleSwitcher />
            </div>
            <div className="md:hidden">
                {isOpen ? (
                    <XMarkIcon className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
                ) : (
                    <Bars3Icon className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
                )}
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
                    <div className="flex flex-col p-4 space-y-4">
                        <NavigationItem name="홈" url="/" onClick={toggleMenu} />
                        <NavigationItem name="서비스" url="/services" onClick={toggleMenu} />
                        <NavigationItem name="회사 소개" url="/about" onClick={toggleMenu} />
                        <NavigationItem name="고객센터" url="/support" onClick={toggleMenu} />
                        <LocaleSwitcher />
                    </div>
                </div>
            )}
        </nav>
    );
}
