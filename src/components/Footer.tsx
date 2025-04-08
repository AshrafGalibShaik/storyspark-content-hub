
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-serif font-bold text-white mr-1">Story</span>
              <span className="text-2xl font-serif font-bold text-teal">Hub</span>
            </Link>
            <p className="mt-3 text-light-gray/80 text-sm">
              A platform for storytellers to share their ideas, insights, and expertise with the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-light-gray/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/posts" className="text-light-gray/80 hover:text-white transition-colors">Articles</Link></li>
              <li><Link to="/about" className="text-light-gray/80 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-light-gray/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/tag/technology" className="text-light-gray/80 hover:text-white transition-colors">Technology</Link></li>
              <li><Link to="/tag/design" className="text-light-gray/80 hover:text-white transition-colors">Design</Link></li>
              <li><Link to="/tag/travel" className="text-light-gray/80 hover:text-white transition-colors">Travel</Link></li>
              <li><Link to="/tag/food" className="text-light-gray/80 hover:text-white transition-colors">Food</Link></li>
              <li><Link to="/tag/productivity" className="text-light-gray/80 hover:text-white transition-colors">Productivity</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-light-gray/80 text-sm mb-3">Subscribe to our newsletter to get updates on new posts and features.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="py-2 px-3 rounded-l-md text-navy focus:outline-none focus:ring-1 focus:ring-teal flex-grow text-sm"
              />
              <button 
                type="submit" 
                className="bg-teal hover:bg-teal/90 text-white py-2 px-4 rounded-r-md transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-light-gray/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-gray/60 text-sm">
            &copy; {currentYear} StoryHub. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-light-gray/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-light-gray/60 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
