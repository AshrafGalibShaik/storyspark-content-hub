
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy leading-tight mb-4">
              Share Your Story With The World
            </h1>
            <p className="text-xl text-navy/80 mb-8 leading-relaxed">
              A platform where storytellers can create, publish, and engage with readers.
              Join our community of writers and start sharing your unique perspective today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/register" 
                className="btn-primary flex items-center justify-center"
              >
                Start Writing
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/posts" 
                className="bg-white text-teal border-2 border-teal hover:bg-teal/10 font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center"
              >
                Explore Articles
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal/20 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-coral/20 rounded-full z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=960&h=640&q=80" 
                alt="Person writing on a laptop"
                className="rounded-lg shadow-lg relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
