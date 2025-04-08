
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@/types/blog';
import PostCard from '@/components/PostCard';

interface FeaturedPostsSectionProps {
  posts: Post[];
}

const FeaturedPostsSection: React.FC<FeaturedPostsSectionProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy">Featured Stories</h2>
          <Link 
            to="/posts"
            className="text-teal hover:text-teal/80 font-medium transition-colors"
          >
            View all
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map(post => (
            <PostCard key={post.id} post={post} featured={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPostsSection;
