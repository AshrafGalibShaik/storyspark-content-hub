import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { users } from '@/lib/data';

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-navy text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              About StoryHub
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
              Empowering storytellers to share their ideas, insights, and expertise with the world.
            </p>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">Our Mission</h2>
                <p className="text-navy text-lg mb-4 leading-relaxed">
                  At StoryHub, we believe that every person has a unique perspective worth sharing. Our mission is to create a platform that makes it easy for writers of all backgrounds to publish their stories, connect with readers, and build a community around their ideas.
                </p>
                <p className="text-navy text-lg leading-relaxed">
                  We're committed to fostering an environment where quality content thrives, where writers can develop their craft, and where readers can discover stories that inform, inspire, and entertain.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-teal/30 rounded-full z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=960&h=640&auto=format&fit=crop" 
                  alt="Person writing on a laptop"
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-light-gray/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-12 text-center">Why Choose StoryHub?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-teal/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">Powerful Editor</h3>
                <p className="text-navy/80 text-base">
                  Our intuitive editor makes it easy to create beautifully formatted stories, complete with images, links, and more.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-teal/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">Vibrant Community</h3>
                <p className="text-navy/80 text-base">
                  Connect with like-minded writers and readers who share your interests and passions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-teal/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">Engagement Features</h3>
                <p className="text-navy/80 text-base">
                  Build your audience with likes, comments, and social sharing to increase the reach of your stories.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-12 text-center">Meet Our Contributors</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {users.map(user => (
                <div key={user.id} className="bg-white border border-light-gray/50 rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 duration-300">
                  <img 
                    src={user.avatar || '/placeholder.svg'} 
                    alt={user.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-navy mb-2">{user.name}</h3>
                    <p className="text-navy/80 text-base mb-4 line-clamp-2">{user.bio}</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-teal text-teal hover:bg-teal hover:text-white transition-colors"
                      asChild
                    >
                      <Link to={`/author/${user.id}`}>View Profile</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Join Our Community Today</h2>
            <p className="text-white text-lg max-w-2xl mx-auto mb-8">
              Start sharing your stories, connect with readers, and become part of a thriving community of writers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                className="bg-teal hover:bg-teal/80 text-white font-semibold py-3 px-6 rounded-lg"
              >
                <Link to="/register">Get Started</Link>
              </Button>
              <Button 
                variant="outline" 
                className="text-black border-2 border-white hover:bg-white hover:text-navy font-semibold py-3 px-6 rounded-lg transition-colors"
                asChild
              >
                <Link to="/posts">Explore Articles</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;