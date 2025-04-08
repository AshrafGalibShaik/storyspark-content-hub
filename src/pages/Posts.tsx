
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import TagsCloud from '@/components/TagsCloud';
import { posts } from '@/lib/data';
import { Search, Edit } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Posts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Filter posts based on search query
    if (searchQuery.trim() === '') {
      setFilteredPosts(posts);
    } else {
      const query = searchQuery.toLowerCase();
      const results = posts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
      setFilteredPosts(results);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Discover Stories That Matter
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Explore articles on design, technology, travel, food, productivity and more from our community of storytellers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <div className="max-w-lg w-full relative">
                <Input
                  type="search"
                  placeholder="Search for articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white w-full"
                />
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
              </div>
              <Button asChild className="bg-teal hover:bg-teal/90 text-white whitespace-nowrap">
                <Link to="/write" className="flex items-center">
                  <Edit size={18} className="mr-2" />
                  Write Article
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Main content */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="md:w-1/4">
              <div className="sticky top-24">
                <TagsCloud className="mb-8" />
                
                <div className="bg-light-gray/30 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Newsletter</h3>
                  <p className="text-navy/70 text-sm mb-4">
                    Get the latest articles and stories delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Your email"
                      className="bg-white"
                    />
                    <Button type="submit" className="w-full bg-teal hover:bg-teal/90 text-white">
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </aside>
            
            {/* Main content */}
            <div className="md:w-3/4">
              {searchQuery && (
                <div className="mb-6">
                  <h2 className="text-xl font-medium">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} for "{searchQuery}"
                  </h2>
                </div>
              )}
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No articles found</h3>
                  <p className="text-navy/70 mb-6">Try different keywords or browse our topics below</p>
                  <TagsCloud />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map(post => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Posts;
