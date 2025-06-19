

'use client'
import { useState } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <div className="flex items-center justify-between px-5 py-3">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Geer.in
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center px-2 py-1 text-3xl text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* Unicode hamburger icon */}
          <span>{menuOpen ? '✕' : '≡'}</span>
        </button>

        {/* Desktop Nav hidden for sm screm*/}
        <div className="hidden md:flex space-x-6 text-xl"> 
          <Link href="/" className={`hover:text-blue-600 transition-colors ${pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
            Home
          </Link>
          <Link href="/products" className={`hover:text-blue-600 transition-colors ${pathname.startsWith('/products') ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
            Products
          </Link>
          <Link href="/add_product" className={`hover:text-blue-600 transition-colors ${pathname.startsWith('/add_product') ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
            Add Products
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-5 pb-4 text-lg bg-white shadow">
          <Link href="/" className={`hover:text-blue-600 transition-colors ${pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/products" className={`hover:text-blue-600 transition-colors ${pathname.startsWith('/products') ? 'text-blue-600 font-semibold' : 'text-gray-700'}`} onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link href="/add_product" className={`hover:text-blue-600 transition-colors ${pathname.startsWith('/add_product') ? 'text-blue-600 font-semibold' : 'text-gray-700'}`} onClick={() => setMenuOpen(false)}>
            Add Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;