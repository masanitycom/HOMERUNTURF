'use client';

import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b-2 border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="font-display text-2xl font-black text-gray-900">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              HOMERUN TURF
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('concept')}
              className="text-gray-800 hover:text-blue-600 transition-colors font-semibold"
            >
              コンセプト
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-800 hover:text-blue-600 transition-colors font-semibold"
            >
              サービス
            </button>
            <button
              onClick={() => scrollToSection('mechanism')}
              className="text-gray-800 hover:text-blue-600 transition-colors font-semibold"
            >
              仕組み
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-gray-800 hover:text-blue-600 transition-colors font-semibold"
            >
              実績
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-800 hover:text-blue-600 transition-colors font-semibold"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-yellow-400 text-black px-6 py-3 rounded-lg font-black hover:bg-yellow-300 transition-colors">
            今日の予想を見る
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white absolute left-0 right-0 shadow-lg">
            <nav className="container-custom py-4 space-y-4">
              <button
                onClick={() => scrollToSection('concept')}
                className="block w-full text-left py-2 text-gray-800 hover:text-blue-600 transition-colors font-semibold"
              >
                コンセプト
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left py-2 text-gray-800 hover:text-blue-600 transition-colors font-semibold"
              >
                サービス
              </button>
              <button
                onClick={() => scrollToSection('mechanism')}
                className="block w-full text-left py-2 text-gray-800 hover:text-blue-600 transition-colors font-semibold"
              >
                仕組み
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className="block w-full text-left py-2 text-gray-800 hover:text-blue-600 transition-colors font-semibold"
              >
                実績
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left py-2 text-gray-800 hover:text-blue-600 transition-colors font-semibold"
              >
                FAQ
              </button>
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-black w-full">
                今日の予想を見る
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;