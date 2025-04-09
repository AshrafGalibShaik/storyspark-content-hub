import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import TagsCloud from '@/components/TagsCloud';
import { toast } from '@/hooks/use-toast';
import { Upload, ImagePlus, Loader2 } from 'lucide-react';

const WriteArticle: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTag, setCurrentTag] = useState('');

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const handleAddTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      try {
        const response = await fetch('http://localhost:5000/api/upload', {
          method: 'POST',
          body: formData,
        });
        if (!response.ok) throw new Error('Image upload failed');
        const { url } = await response.json();
        setCoverImage(url);
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to upload image. Please try again.',
          variant: 'destructive',
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !excerpt.trim() || tags.length === 0) {
      toast({
        title: 'Missing information',
        description: 'Please fill in all required fields and add at least one tag.',
        variant: 'destructive',
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const articleData = { title, excerpt, content, tags, cover_image: coverImage };
      const response = await fetch('http://localhost:5000/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(articleData),
      });
      if (!response.ok) throw new Error('Failed to submit article');
      toast({
        title: 'Article submitted',
        description: 'Your article has been submitted successfully!',
      });
      navigate('/posts');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 container mx-auto px-4 py-12 md:py-16"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-serif font-bold mb-10 text-gray-800 text-center"
          >
            Write Your Story
          </motion.h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Cover Image Upload */}
            <motion.div variants={itemVariants} className="space-y-3">
              <Label htmlFor="coverImage" className="text-lg font-medium text-gray-700">Cover Image</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center bg-white shadow-sm hover:shadow-md transition-all duration-300">
                {coverImage ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative"
                  >
                    <img
                      src={coverImage}
                      alt="Cover preview"
                      className="mx-auto max-h-64 w-full object-cover rounded-lg shadow-md"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="mt-4 hover:bg-gray-100 transition-colors"
                      onClick={() => setCoverImage(null)}
                    >
                      Replace Image
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="space-y-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
                    <div>
                      <Label
                        htmlFor="image-upload"
                        className="cursor-pointer inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Cover Image
                      </Label>
                      <Input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </div>
                    <p className="text-sm text-gray-500">
                      Recommended: 1200 x 800 pixels, JPG or PNG
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants} className="space-y-3">
              <Label htmlFor="title" className="text-lg font-medium text-gray-700">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a captivating title"
                required
                className="text-lg border-gray-200 focus:ring-teal-500 focus:border-teal-500 rounded-lg shadow-sm"
              />
            </motion.div>

            {/* Excerpt */}
            <motion.div variants={itemVariants} className="space-y-3">
              <Label htmlFor="excerpt" className="text-lg font-medium text-gray-700">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Write a brief summary (appears in previews)"
                required
                className="resize-none h-28 border-gray-200 focus:ring-teal-500 focus:border-teal-500 rounded-lg shadow-sm"
              />
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-3">
              <Label htmlFor="content" className="text-lg font-medium text-gray-700">Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your story here... Express yourself!"
                required
                className="min-h-[400px] border-gray-200 focus:ring-teal-500 focus:border-teal-500 rounded-lg shadow-sm"
              />
            </motion.div>

            {/* Tags */}
            <motion.div variants={itemVariants} className="space-y-4">
              <Label className="text-lg font-medium text-gray-700">Tags</Label>
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-teal-100 rounded-full px-3 py-1 flex items-center shadow-sm"
                  >
                    <span className="text-teal-800 mr-2">{tag}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="text-teal-600 hover:text-teal-800 transition-colors"
                    >
                      ×
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-3">
                <Input
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  placeholder="Add a tag (e.g., Technology, Travel)"
                  className="flex-grow border-gray-200 focus:ring-teal-500 focus:border-teal-500 rounded-lg shadow-sm"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                />
                <Button 
                  type="button" 
                  onClick={handleAddTag} 
                  variant="outline"
                  className="hover:bg-teal-50 transition-colors"
                >
                  Add
                </Button>
              </div>

              <motion.div 
                className="mt-4"
                variants={itemVariants}
              >
                <p className="text-sm text-gray-500 mb-2">Popular tags:</p>
                <TagsCloud />
              </motion.div>
            </motion.div>

            {/* Submit Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Publishing...
                  </>
                ) : (
                  'Publish Article'
                )}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate(-1)}
                className="hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </Button>
            </motion.div>
          </form>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default WriteArticle;