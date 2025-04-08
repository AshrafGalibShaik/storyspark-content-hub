
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@/types/blog';
import PostCard from '@/components/PostCard';

interface RecentPostsSectionProps {
  posts: Post[];
}

const RecentPostsSection: React.FC<RecentPostsSectionProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-8 md:py-12 bg-light-gray/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy">Recent Articles</h2>
          <Link 
            to="/posts"
            className="text-teal hover:text-teal/80 font-medium transition-colors"
          >
            View all
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPostsSection;
