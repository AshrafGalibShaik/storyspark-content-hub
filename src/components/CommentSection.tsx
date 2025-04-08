
import React, { useState } from 'react';
import { Comment } from '@/types/blog';
import { formatDate } from '@/lib/data';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface CommentSectionProps {
  comments: Comment[];
  postId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments, postId }) => {
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Submitting comment:', { postId, content: newComment });
      // In a real app, we would add the new comment to the list
      setNewComment('');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section className="mt-10">
      <h3 className="text-xl font-semibold mb-6">Comments ({comments.length})</h3>
      
      {/* Comment Form */}
      <div className="mb-8 bg-light-gray/20 p-6 rounded-lg">
        <h4 className="text-md font-medium mb-3">Leave a comment</h4>
        <form onSubmit={handleSubmit}>
          <Textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts..."
            className="mb-3 bg-white"
            rows={4}
          />
          <div className="flex justify-end">
            <Button 
              type="submit"
              disabled={isSubmitting || !newComment.trim()} 
              className="bg-teal hover:bg-teal/90 text-white"
            >
              {isSubmitting ? 'Posting...' : 'Post Comment'}
            </Button>
          </div>
        </form>
      </div>
      
      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-navy/70 italic">Be the first to share your thoughts!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border-b border-light-gray/40 pb-6">
              <div className="flex items-start">
                <img 
                  src={comment.userAvatar || '/placeholder.svg'} 
                  alt={comment.userName}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium">{comment.userName}</h5>
                    <span className="text-sm text-navy/60">{formatDate(comment.createdAt)}</span>
                  </div>
                  <p className="text-navy/80">{comment.content}</p>
                  <button className="text-sm text-teal hover:text-teal/80 mt-2">Reply</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CommentSection;
