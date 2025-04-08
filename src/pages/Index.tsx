
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedPostsSection from '@/components/FeaturedPostsSection';
import RecentPostsSection from '@/components/RecentPostsSection';
import TagsCloud from '@/components/TagsCloud';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getFeaturedPosts, getRecentPosts } from '@/lib/data';

const Index = () => {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(3);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedPostsSection posts={featuredPosts} />
        <RecentPostsSection posts={recentPosts} />
        
        <section className="py-10 md:py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy mb-4">Join Our Community of Storytellers</h2>
              <p className="text-navy/80 mb-6">
                StoryHub is more than just a blogging platform—it's a community where writers connect, grow, and inspire. 
                Whether you're an established author or just starting your writing journey, there's a place for you here.
              </p>
              <TagsCloud className="mb-6" />
            </div>
            <div className="bg-light-gray/30 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-navy mb-4">Why Write on StoryHub?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-teal/20 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Reach a Wider Audience</h4>
                    <p className="text-navy/70 text-sm">Connect with readers interested in your specific niche and expertise.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal/20 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Powerful Publishing Tools</h4>
                    <p className="text-navy/70 text-sm">Easy-to-use editor with robust formatting options for beautiful stories.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal/20 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Engagement Features</h4>
                    <p className="text-navy/70 text-sm">Connect with readers through comments, likes, and meaningful interactions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
