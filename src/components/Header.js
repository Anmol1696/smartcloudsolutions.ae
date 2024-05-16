"use client";

import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
    <header className="bg-gray-700 text-white p-4 text-center">
        <Image src="/logo.webp" alt="Smart Cloud Solutions Logo" width={50} height={50} className="inline-block h-40 w-40" />
        <nav className="mt-2">
            <ul className="flex justify-center space-x-4">
                <li><Link href="#home">Home</Link></li>
                <li><Link href="#about">About Us</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;
