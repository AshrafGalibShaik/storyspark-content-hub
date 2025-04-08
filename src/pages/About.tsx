import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, User, Edit } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-xl py-2'
          : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-3xl font-serif font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-500 tracking-tight">
              StoryHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 font-medium hover:text-indigo-600 transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-md"
              >
                Home
              </Link>
              <Link
                to="/posts"
                className="text-gray-700 font-medium hover:text-indigo-600 transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-md"
              >
                Articles
              </Link>
              <Link
                to="/about"
                className="text-gray-700 font-medium hover:text-indigo-600 transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-md"
              >
                About
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-300 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 hover:border-indigo-400 transition-all duration-300 ease-in-out hover:rotate-12"
              >
                <Search size={18} />
              </Button>
              <Button
                variant="ghost"
                asChild
                className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 ease-in-out hover:scale-105"
              >
                <Link to="/login" className="flex items-center">
                  <User size={18} className="mr-2" />
                  Login
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-indigo-500 text-indigo-600 bg-white hover:bg-indigo-50 hover:border-indigo-600 hover:text-indigo-700 transition-all duration-300 ease-in-out hover:scale-105 shadow-sm"
              >
                <Link to="/write" className="flex items-center px-2">
                  <Edit size={18} className="mr-2" />
                  Write
                </Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-md"
              >
                <Link to="/register" className="px-3 py-1">Sign Up</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 transition-all duration-300 ease-in-out hover:rotate-90"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-sm transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-[400px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        } overflow-hidden`}
      >
        <div className="px-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="py-2 px-4 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 ease-in-out hover:pl-6"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/posts"
              className="py-2 px-4 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 ease-in-out hover:pl-6"
              onClick={() => setIsMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              to="/about"
              className="py-2 px-4 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 ease-in-out hover:pl-6"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/write"
              className="py-2 px-4 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 flex items-center transition-all duration-300 ease-in-out hover:pl-6"
              onClick={() => setIsMenuOpen(false)}
            >
              <Edit size={18} className="mr-2" />
              Write an Article
            </Link>
            <hr className="border-gray-200 my-2" />
            <div className="flex space-x-3">
              <Button
                variant="outline"
                className="flex-1 border-gray-300 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 ease-in-out hover:scale-105"
                asChild
              >
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                asChild
              >
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;  