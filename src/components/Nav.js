import React, { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const menuItems = [
    { label: 'Profil', href: '#' },
    { label: 'Experience', href: '#' },
    { label: 'Projets', href: '#' },
    { label: 'Experience professionnelle', href: '#' }
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-sm ${scrolled ? 'bg-white/80 shadow-md' : 'bg-transparent'}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="w-full relative flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-bold text-[#B19CD9]">
              MB.
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative text-zinc-400 hover:text-black text-base font-medium transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B19CD9] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              
              <button className="relative px-6 py-2 font-medium text-white transition duration-300 bg-[#B19CD9] hover:bg-[#9F84D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B19CD9] focus:ring-offset-2 transform hover:-translate-y-0.5 shadow-lg" type="button" data-drawer-target="drawer-form" data-drawer-show="drawer-form" aria-controls="drawer-form">
                Contactez moi
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#B19CD9]"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } absolute top-20 inset-x-0 z-50 transition-all duration-300 ease-in-out md:hidden`}
      >
        <div className={`shadow-lg border-t ${scrolled ? 'bg-white/80 backdrop-blur-sm' : 'bg-white'}`}>
          <div className="space-y-1 px-4 py-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-zinc-400 hover:text-black hover:bg-stone-50 rounded-md transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-3 font-medium text-white transition duration-300 bg-[#B19CD9] hover:bg-[#9F84D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B19CD9]">
              Contactez moi
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}