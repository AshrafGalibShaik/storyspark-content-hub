
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@/types/blog';
import { formatDate } from '@/lib/data';
import { Heart, MessageSquare, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, featured = false }) => {
  // Default placeholder image URL
  const placeholderImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80";

  return (
    <article 
      className={`overflow-hidden rounded-lg border border-light-gray/40 bg-white shadow-sm 
                transition-all hover:shadow-md hover:-translate-y-1 duration-300 flex flex-col
                ${featured ? 'md:flex-row' : 'flex-col'}`}
    >
      {/* Post Image */}
      <Link 
        to={`/post/${post.slug}`} 
        className={`block ${featured ? 'md:w-1/2' : 'w-full'} overflow-hidden`}
      >
        <img
          src={post.coverImage || placeholderImage}
          alt={post.title}
          className="h-60 w-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = placeholderImage;
          }}
        />
      </Link>
      
      {/* Content */}
      <div className={`flex flex-col justify-between p-6 ${featured ? 'md:w-1/2' : 'w-full'}`}>
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map(tag => (
              <Badge key={tag} variant="outline" className="bg-light-gray/30 hover:bg-light-gray/50">
                <Link to={`/tag/${tag.toLowerCase()}`}>
                  {tag}
                </Link>
              </Badge>
            ))}
          </div>
          
          {/* Title */}
          <h3 className="mb-2 text-xl font-bold leading-tight text-navy">
            <Link to={`/post/${post.slug}`} className="hover:text-teal transition-colors">
              {post.title}
            </Link>
          </h3>
          
          {/* Excerpt */}
          <p className="mb-4 text-navy/75">
            {post.excerpt}
          </p>
        </div>
        
        <div>
          {/* Author and Date */}
          <div className="flex items-center mb-4">
            <img
              src={post.author.avatar || `/placeholder.svg`}
              alt={post.author.name}
              className="h-9 w-9 rounded-full object-cover mr-3"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "/placeholder.svg";
              }}
            />
            <div>
              <p className="text-sm font-medium text-navy">{post.author.name}</p>
              <p className="text-xs text-navy/60">{formatDate(post.createdAt)}</p>
            </div>
          </div>
          
          {/* Post Stats */}
          <div className="flex items-center text-navy/60 text-sm space-x-4">
            <div className="flex items-center">
              <Heart size={14} className="mr-1" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare size={14} className="mr-1" />
              <span>{post.commentCount}</span>
            </div>
            <div className="flex items-center ml-auto">
              <Clock size={14} className="mr-1" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
