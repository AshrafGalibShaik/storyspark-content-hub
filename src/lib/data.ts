
import { Post, User, Comment } from '../types/blog';

// Mock users data
export const users: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop',
    bio: 'Tech writer passionate about UX design and emerging technologies.'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    email: 'marcus@example.com',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&auto=format&fit=crop',
    bio: 'Travel blogger exploring hidden gems and cultures around the world.'
  },
  {
    id: '3',
    name: 'Alexa Rivera',
    email: 'alexa@example.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop',
    bio: 'Food writer and chef sharing recipes and culinary adventures.'
  }
];

// Mock posts data
export const posts: Post[] = [
  {
    id: '1',
    title: 'The Future of Web Design: Trends to Watch in 2025',
    slug: 'future-web-design-trends-2025',
    excerpt: 'Discover the emerging web design trends that will shape the digital landscape in the coming year.',
    content: `
# The Future of Web Design: Trends to Watch in 2025

The digital landscape is constantly evolving, and staying ahead of the curve is essential for designers and developers alike. As we look toward 2025, several key trends are emerging that promise to redefine how we interact with the web.

## 1. Immersive 3D Experiences

Three-dimensional elements are no longer just for gaming or specialized industries. With advancements in WebGL and browser capabilities, we're seeing more websites incorporate subtle 3D elements to create depth and engagement without sacrificing performance.

> "The distinction between digital and physical experiences continues to blur. Tomorrow's most successful designs will seamlessly blend both worlds." — Design Futurist Magazine

## 2. Responsive Design 2.0

As device diversity continues to expand, responsive design is evolving beyond screen sizes. The next generation of responsive design considers:

- User context and environment
- Input methods (touch, voice, gesture)
- Connection speed and device capabilities
- Accessibility needs

## 3. AI-Driven Personalization

Machine learning algorithms are enabling unprecedented levels of content and layout personalization. Websites will increasingly adapt not just to user preferences, but to behavioral patterns and emotional states.

## 4. Sustainable Web Design

As awareness of digital carbon footprints grows, we're seeing a shift toward more energy-efficient websites. This includes:

- Optimized images and videos
- Reduced JavaScript dependency
- Efficient coding practices
- Streamlined user journeys

## 5. Micro-Interactions with Purpose

Subtle animations and interactions will continue to grow in importance, but with a stronger focus on enhancing usability rather than merely delighting users. Each micro-interaction should serve a clear purpose in the user journey.

## Conclusion

The web design landscape of 2025 will balance technological innovation with human-centered principles. Designers who can create experiences that are simultaneously immersive, efficient, personalized, and accessible will define the next era of the web.

What trends are you most excited about? Share your thoughts in the comments below!
    `,
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1280&h=720&auto=format&fit=crop',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop'
    },
    tags: ['Design', 'Technology', 'Trends'],
    createdAt: '2025-04-01T10:30:00.000Z',
    updatedAt: '2025-04-01T10:30:00.000Z',
    featured: true,
    likes: 127,
    commentCount: 24,
    readTime: 5
  },
  {
    id: '2',
    title: 'Hidden Gems of Southeast Asia: Beyond the Tourist Trail',
    slug: 'hidden-gems-southeast-asia',
    excerpt: 'Explore off-the-beaten-path destinations in Southeast Asia that offer authentic cultural experiences.',
    content: `
# Hidden Gems of Southeast Asia: Beyond the Tourist Trail

While destinations like Bangkok, Bali, and Angkor Wat attract millions of visitors each year, Southeast Asia holds countless lesser-known treasures waiting to be discovered. After spending three months exploring the region, I've compiled my favorite spots that offer authentic experiences away from the crowds.

## Phong Nha, Vietnam

Nestled in central Vietnam, Phong Nha-Ke Bang National Park houses some of the world's largest and most spectacular caves. While Paradise Cave and Phong Nha Cave see their share of visitors, the true adventure lies in multi-day spelunking expeditions to Hang En (the third-largest cave in the world) or the village homestays that offer glimpses into rural Vietnamese life.

> "The most remarkable thing about Phong Nha isn't just the caves—it's how the local community has embraced sustainable tourism to protect their natural heritage." — Local guide, Mr. Thanh

## Kampot, Cambodia

This riverside town offers a refreshing contrast to Siem Reap's tourist hustle. Famous for its pepper plantations, colonial architecture, and the mist-covered Bokor Mountain, Kampot provides a glimpse into Cambodia's quieter side. Rent a scooter to explore the countryside, where you'll find salt fields, secret swimming holes, and friendly villages rarely visited by tourists.

## Isaan Region, Thailand

Thailand's northeastern region remains surprisingly untouched by mass tourism despite offering some of the country's most distinctive cuisine and cultural experiences. Cities like Ubon Ratchathani feature captivating temples, while the surrounding countryside reveals fascinating Khmer ruins without the crowds of Ayutthaya. The annual Phi Ta Khon (Ghost Festival) in Dan Sai presents one of Southeast Asia's most unique celebrations.

## Conclusion

The true magic of Southeast Asia often lies beyond the pages of guidebooks. By venturing just a little off the established tourist circuits, travelers can discover authentic experiences, support local communities, and create memories that few others share.

Have you discovered any hidden gems in Southeast Asia? Share your experiences in the comments below!
    `,
    coverImage: 'https://images.unsplash.com/photo-1464095557328-061c8745a0b0?w=1280&h=720&auto=format&fit=crop',
    author: {
      id: '2',
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&auto=format&fit=crop'
    },
    tags: ['Travel', 'Asia', 'Adventure'],
    createdAt: '2025-03-25T14:15:00.000Z',
    updatedAt: '2025-03-27T09:45:00.000Z',
    featured: true,
    likes: 89,
    commentCount: 16,
    readTime: 4
  },
  {
    id: '3',
    title: 'Seasonal Cooking: Spring Recipes Using Farmers Market Finds',
    slug: 'seasonal-cooking-spring-recipes',
    excerpt: 'Embrace the flavors of spring with these fresh, simple recipes highlighting seasonal produce.',
    content: `
# Seasonal Cooking: Spring Recipes Using Farmers Market Finds

There's something magical about cooking with ingredients at the peak of their season. As farmers markets burst with spring offerings, it's the perfect time to create dishes that celebrate these fleeting flavors. Here are three favorite recipes that showcase the best of spring produce.

## Asparagus and Pea Risotto with Lemon

Spring's tender asparagus and sweet peas create a vibrant risotto that feels both luxurious and light.

### Ingredients:
- 1 bunch asparagus, woody ends removed and cut into 1-inch pieces
- 1 cup fresh or frozen peas
- 1.5 cups arborio rice
- 1 shallot, finely diced
- 2 cloves garlic, minced
- 4 cups vegetable stock, kept warm
- 1/2 cup dry white wine
- Zest and juice of 1 lemon
- 1/3 cup grated Parmesan cheese
- 2 tablespoons butter
- Fresh mint leaves for garnish
- Salt and pepper to taste

### Method:
1. In a large pot, blanch asparagus for 2 minutes, adding peas in the final 30 seconds. Drain and place in ice water to preserve the bright color. Drain again and set aside.
2. In a heavy-bottomed pan, sauté shallot in olive oil until translucent. Add garlic and rice, stirring to coat each grain with oil.
3. Add wine and stir until absorbed. Begin adding warm stock one ladle at a time, stirring frequently and waiting until each addition is absorbed before adding more.
4. When rice is almost tender (about 18 minutes), fold in asparagus, peas, lemon zest, and juice. Cook for 2 more minutes.
5. Remove from heat and stir in butter and Parmesan. Season with salt and pepper.
6. Serve garnished with mint leaves and additional Parmesan if desired.

## Strawberry-Rhubarb Galette with Honey and Thyme

This rustic free-form tart balances the tartness of rhubarb with sweet strawberries and a hint of thyme.

> "The beauty of a galette lies in its imperfection—the more rustic it looks, the more charming it becomes." — Culinary wisdom

### Ingredients:
- 1 pie crust (homemade or store-bought)
- 2 cups strawberries, hulled and halved
- 2 stalks rhubarb, cut into 1/2-inch pieces
- 3 tablespoons honey, plus more for drizzling
- 1 tablespoon cornstarch
- 1 teaspoon fresh thyme leaves
- 1 egg, beaten (for egg wash)
- Coarse sugar for sprinkling

### Method:
1. Preheat oven to 375°F (190°C).
2. In a bowl, gently combine strawberries, rhubarb, honey, cornstarch, and thyme.
3. Roll out pie crust on a parchment-lined baking sheet into a 12-inch circle.
4. Arrange fruit mixture in the center, leaving a 2-inch border. Fold the edges over, pleating as you go.
5. Brush crust with egg wash and sprinkle with coarse sugar.
6. Bake for 35-40 minutes until crust is golden and filling is bubbling.
7. Drizzle with additional honey while still warm.

Have you visited your local farmers market yet this spring? What seasonal ingredients are you excited to cook with? Share in the comments below!
    `,
    coverImage: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1280&h=720&auto=format&fit=crop',
    author: {
      id: '3',
      name: 'Alexa Rivera',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop'
    },
    tags: ['Food', 'Recipes', 'Seasonal'],
    createdAt: '2025-04-05T08:45:00.000Z',
    updatedAt: '2025-04-05T08:45:00.000Z',
    featured: false,
    likes: 63,
    commentCount: 8,
    readTime: 6
  },
  {
    id: '4',
    title: 'Mindful Productivity: Working Smarter in a Distracted World',
    slug: 'mindful-productivity-working-smarter',
    excerpt: 'Learn how to apply mindfulness techniques to improve focus and productivity in today\'s distraction-filled environment.',
    content: `
# Mindful Productivity: Working Smarter in a Distracted World

In an age of endless notifications and information overload, maintaining focus has become increasingly challenging. The solution might not be more productivity apps or stricter schedules, but rather a more mindful approach to how we work.

## The Attention Crisis

Research suggests that the average person checks their phone 96 times a day—that's once every 10 minutes. Each interruption takes us about 23 minutes to fully recover from, meaning we're rarely operating at our cognitive best. This fragmented attention doesn't just slow us down; it fundamentally changes how we think, often prioritizing quick wins over deep thinking.

## Mindfulness as a Productivity Tool

Mindfulness—the practice of bringing complete attention to the present moment without judgment—offers practical tools for reclaiming our focus:

### 1. Single-Tasking

Despite its glorification, multitasking reduces productivity by up to 40%. Mindful single-tasking involves:

- Selecting one meaningful task
- Setting a realistic timeframe (25-90 minutes)
- Removing obvious distractions
- Bringing full attention to the task
- Gently redirecting focus when it wanders

### 2. Mindful Transitions

The spaces between tasks are often where distraction takes hold. Practice mindful transitions by:

- Consciously closing one task before beginning another
- Taking three deep breaths between activities
- Setting a clear intention for the next task

> "How we spend our days is, of course, how we spend our lives." — Annie Dillard

### 3. Technology Boundaries

Create a healthier relationship with your digital tools through:

- Designated device-free times and spaces
- Batching communications at set intervals
- Using apps that promote focus rather than fracture it
- Creating friction for distracting apps (remove from home screen, use app blockers)

## Implementing Mindful Productivity

Start small with these practical steps:

1. Begin each day with 5 minutes of mindful breathing or reflection
2. Set 3 meaningful priorities each morning
3. Work in focused blocks with short mindful breaks
4. End each day with a brief review and appreciation practice

The ultimate goal isn't to do more, but to bring more intention, awareness, and meaning to what we do.

What mindful productivity practices have worked for you? Share your experiences in the comments below!
    `,
    coverImage: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1280&h=720&auto=format&fit=crop',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop'
    },
    tags: ['Productivity', 'Mindfulness', 'Work'],
    createdAt: '2025-03-18T11:20:00.000Z',
    updatedAt: '2025-03-19T13:10:00.000Z',
    featured: false,
    likes: 104,
    commentCount: 19,
    readTime: 7
  },
  {
    id: '5',
    title: 'Urban Gardening: Growing Food in Small Spaces',
    slug: 'urban-gardening-small-spaces',
    excerpt: 'Discover how to create a thriving garden in your apartment or small urban space with these innovative techniques.',
    content: `# Urban Gardening: Growing Food in Small Spaces

Living in the heart of the city doesn't mean you can't enjoy the rewards of growing your own food. Urban gardening combines creativity with practicality, allowing you to produce fresh herbs, vegetables, and even fruits in surprisingly small spaces.

## Assessing Your Space

Before diving in, evaluate what you're working with:

- **Light conditions**: Most edible plants need 6+ hours of direct sunlight daily. Map the sun patterns in your space.
- **Available space**: Window sills, balconies, fire escapes (if legal), walls, and ceilings all offer growing potential.
- **Climate considerations**: Your hardiness zone and microclimate will dictate what you can grow and when.

## Container Growing Fundamentals

The foundation of urban gardening is understanding container dynamics:

- **Container selection**: Look beyond traditional pots—repurposed buckets, wooden crates, grow bags, and even old furniture can serve as planters.
- **Soil matters**: Use high-quality potting mix specifically formulated for containers, not garden soil which compacts easily.
- **Drainage is crucial**: Every container needs drainage holes to prevent root rot.
- **Consider weight**: Particularly for balconies, calculate the weight of containers when saturated with water.

## Space-Maximizing Growing Methods

Several techniques maximize yield in minimal space:

### Vertical Growing

Utilize your wall space with:
- Hanging planters for trailing herbs and strawberries
- Wall-mounted pocket planters
- Trellises for climbing vegetables like cucumbers and beans
- Stackable planting systems

### Intensive Planting

Apply these space-efficient planting strategies:
- Square foot gardening: Divide growing areas into 1'×1' squares with specific plant counts per square
- Intercropping: Planting quick-growing crops (radishes, lettuce) between slower-growing ones (tomatoes, peppers)
- Succession planting: As one crop finishes, immediately replace it with another

> "When space is limited, think cubes rather than squares—use height, intercropping, and succession planting to maximize every inch." — City Gardener Magazine

## Best Crops for Small Spaces

Some plants deliver exceptional value in limited space:

### High-Value Herbs
- Basil, cilantro, mint, parsley, rosemary, and thyme yield continuous harvests and cost several dollars per bunch at stores.

### Productive Vegetables
- Cherry tomatoes (one plant can produce pounds of fruit)
- Leafy greens (multiple harvests from one planting)
- Peppers (compact plants with high yields)
- Bush varieties of zucchini and cucumbers

### Surprising Possibilities
- Dwarf fruit trees in large containers
- Microgreens for continuous, super-quick harvests
- Mushrooms in repurposed containers under sinks or in closets

## Year-Round Growing

Extend your growing season with:
- Cold frames for winter growing
- Indoor grow lights for darker months
- Windowsill herb gardens
- Microgreens under basic clip lamps

Urban gardening connects us to our food, reduces grocery bills, and brings nature into our city lives. The satisfaction of harvesting dinner from your window box or balcony garden makes the effort worthwhile.

What are you growing in your urban space? Share your successes and challenges in the comments below!`,
    coverImage: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=1280&h=720&auto=format&fit=crop',
    author: {
      id: '3',
      name: 'Alexa Rivera',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop'
    },
    tags: ['Gardening', 'Sustainability', 'Food'],
    createdAt: '2025-03-30T16:40:00.000Z',
    updatedAt: '2025-03-30T16:40:00.000Z',
    featured: false,
    likes: 76,
    commentCount: 12,
    readTime: 8
  }
];

// Mock comments data
export const comments: Comment[] = [
  {
    id: '1',
    postId: '1',
    userId: '2',
    userName: 'Marcus Chen',
    userAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&auto=format&fit=crop',
    content: 'Great insights on the future of web design! I particularly agree with the emphasis on sustainable design practices. As developers, we need to be more conscious of our digital carbon footprint.',
    createdAt: '2025-04-02T08:15:00.000Z'
  },
  {
    id: '2',
    postId: '1',
    userId: '3',
    userName: 'Alexa Rivera',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop',
    content: 'I\'m excited about the potential of AI-driven personalization, but I hope we don\'t lose the human touch in design. Finding that balance will be key.',
    createdAt: '2025-04-02T14:30:00.000Z'
  },
  {
    id: '3',
    postId: '2',
    userId: '1',
    userName: 'Sarah Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop',
    content: 'Phong Nha has been on my bucket list for years! Did you find the local cuisine there as amazing as people say?',
    createdAt: '2025-03-26T11:45:00.000Z'
  }
];

// Helper functions for data manipulation
export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getPostById = (id: string): Post | undefined => {
  return posts.find(post => post.id === id);
};

export const getPostsByAuthor = (authorId: string): Post[] => {
  return posts.filter(post => post.author.id === authorId);
};

export const getCommentsByPostId = (postId: string): Comment[] => {
  return comments.filter(comment => comment.postId === postId);
};

export const getFeaturedPosts = (): Post[] => {
  return posts.filter(post => post.featured);
};

export const getRecentPosts = (count: number = 3): Post[] => {
  return [...posts]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, count);
};

export const getUniqueTagsWithCount = (): {tag: string, count: number}[] => {
  const tagCount = new Map<string, number>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      if (tagCount.has(tag)) {
        tagCount.set(tag, tagCount.get(tag)! + 1);
      } else {
        tagCount.set(tag, 1);
      }
    });
  });
  
  return Array.from(tagCount.entries()).map(([tag, count]) => ({ tag, count }));
};

export const getPostsByTag = (tag: string): Post[] => {
  return posts.filter(post => post.tags.includes(tag));
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};
