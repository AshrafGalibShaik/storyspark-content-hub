
  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import Navbar from '@/components/Navbar';
  import Footer from '@/components/Footer';
  import { Button } from '@/components/ui/button';
  import { Textarea } from '@/components/ui/textarea';
  import { Input } from '@/components/ui/input';
  import { Label } from '@/components/ui/label';
  import TagsCloud from '@/components/TagsCloud';
  import { toast } from '@/hooks/use-toast';
  import { Upload, ImagePlus, Loader2 } from 'lucide-react';

  const WriteArticle = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [coverImage, setCoverImage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentTag, setCurrentTag] = useState('');

    const handleAddTag = () => {
      if (currentTag.trim() && !tags.includes(currentTag.trim())) {
        setTags([...tags, currentTag.trim()]);
        setCurrentTag('');
      }
    };

    const handleRemoveTag = (tagToRemove: string) => {
      setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        // In a real app, you would upload this to your server/cloud storage
        // For now, we'll just use a local URL
        const imageUrl = URL.createObjectURL(file);
        setCoverImage(imageUrl);
      }
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!title.trim() || !content.trim() || !excerpt.trim() || tags.length === 0) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields and add at least one tag.",
          variant: "destructive"
        });
        return;
      }

      setIsSubmitting(true);

      try {
        // Here you would typically send the data to your backend
        // For this example, we'll just simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast({
          title: "Article submitted",
          description: "Your article has been submitted successfully!",
        });

        navigate('/posts');
      } catch (error) {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Write Your Story</h1>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Cover Image Upload */}
              <div className="space-y-2">
                <Label htmlFor="coverImage">Cover Image</Label>
                <div className="border-2 border-dashed border-light-gray rounded-lg p-6 text-center">
                  {coverImage ? (
                    <div className="relative">
                      <img 
                        src={coverImage} 
                        alt="Cover preview" 
                        className="mx-auto max-h-60 object-cover rounded-md"
                      />
                      <Button 
                        type="button"
                        variant="outline"
                        className="mt-4"
                        onClick={() => setCoverImage(null)}
                      >
                        Replace Image
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <ImagePlus className="mx-auto h-12 w-12 text-navy/30" />
                      <div>
                        <Label 
                          htmlFor="image-upload" 
                          className="btn-primary cursor-pointer inline-flex items-center px-4 py-2"
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
                      <p className="text-sm text-navy/60">
                        Recommended: 1200 x 800 pixels, JPG or PNG
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a captivating title for your article"
                  required
                  className="text-lg"
                />
              </div>
              
              {/* Excerpt */}
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea 
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Write a brief summary of your article (will appear in previews)"
                  required
                  className="resize-none h-24"
                />
              </div>
              
              {/* Content */}
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea 
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your story here... Express yourself!"
                  required
                  className="min-h-[300px]"
                />
              </div>
              
              {/* Tags */}
              <div className="space-y-4">
                <Label>Tags</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map((tag, index) => (
                    <div key={index} className="bg-light-gray rounded-full px-3 py-1 flex items-center">
                      <span className="text-navy mr-2">{tag}</span>
                      <button 
                        type="button" 
                        onClick={() => handleRemoveTag(tag)}
                        className="text-navy/70 hover:text-coral"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Input 
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    placeholder="Add a tag (e.g., Technology, Travel)"
                    className="flex-grow"
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
                  >
                    Add
                  </Button>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm text-navy/60 mb-2">Popular tags:</p>
                  <TagsCloud />
                </div>
              </div>
              
              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  type="submit" 
                  className="bg-teal hover:bg-teal/90 text-white"
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
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  export default WriteArticle;
