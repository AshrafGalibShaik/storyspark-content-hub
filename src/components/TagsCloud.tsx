
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { getUniqueTagsWithCount } from '@/lib/data';

interface TagsCloudProps {
  className?: string;
}

const TagsCloud: React.FC<TagsCloudProps> = ({ className = '' }) => {
  const tags = getUniqueTagsWithCount();

  return (
    <div className={`${className}`}>
      <h3 className="text-lg font-medium mb-4">Popular Topics</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map(({ tag, count }) => (
          <Link to={`/tag/${tag.toLowerCase()}`} key={tag}>
            <Badge 
              variant="outline" 
              className="bg-light-gray/50 hover:bg-light-gray py-1.5"
            >
              {tag} <span className="ml-1 text-navy/60">({count})</span>
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsCloud;
