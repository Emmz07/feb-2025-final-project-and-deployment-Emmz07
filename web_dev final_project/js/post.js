document.addEventListener('DOMContentLoaded', function() {
  const blogPostContainer = document.getElementById('blog-post');
  const authorBioContainer = document.getElementById('author-bio');
  const relatedPostsContainer = document.getElementById('related-posts');
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Everyday Applications',
      content: `
        <div class="post-header">
          <span class="post-category">Technology</span>
          <h1 class="post-title">The Future of AI in Everyday Applications</h1>
          <div class="post-meta">
            <img src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sarah Johnson">
            <div class="post-meta-details">
              <span class="post-meta-detail"><i class="fas fa-user"></i> Sarah Johnson</span>
              <span class="post-meta-detail"><i class="fas fa-calendar"></i> May 15, 2025</span>
              <span class="post-meta-detail"><i class="fas fa-comments"></i> 8 Comments</span>
            </div>
          </div>
        </div>
        
        <div class="post-featured-image">
          <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="AI Technology">
        </div>
        
        <div class="post-content">
          <p>Artificial Intelligence (AI) has rapidly evolved from a sci-fi concept to an integral part of our everyday lives. The technology that once seemed distant is now embedded in the devices we use daily, the services we rely on, and the decisions that affect our lives in subtle but significant ways.</p>
          
          <h2>The Current State of AI</h2>
          
          <p>Today's AI applications are already impressive. From voice assistants like Siri and Alexa to recommendation engines on streaming platforms, AI quietly enhances our digital experiences. Smart home devices learn our preferences to create more comfortable living environments, while navigation apps use AI to predict traffic patterns and recommend faster routes.</p>
          
          <p>In professional settings, AI-powered tools help with everything from email sorting to complex data analysis. Healthcare professionals use AI algorithms to assist with diagnoses, and financial institutions employ AI for fraud detection and risk assessment.</p>
          
          <h2>Emerging AI Trends</h2>
          
          <p>Several key trends are shaping how AI will continue to integrate into our lives:</p>
          
          <ul>
            <li><strong>Ambient Computing</strong>: AI will become more invisible, operating in the background of our environment rather than through explicit interfaces.</li>
            <li><strong>Multimodal AI</strong>: Future systems will combine understanding across text, images, video, and audio for more comprehensive interactions.</li>
            <li><strong>Edge AI</strong>: Processing will increasingly happen on local devices rather than in the cloud, improving privacy and reducing latency.</li>
            <li><strong>Human-AI Collaboration</strong>: Rather than replacing humans, AI tools will enhance human capabilities in creative and knowledge work.</li>
          </ul>
          
          <h2>Ethical Considerations</h2>
          
          <p>As AI becomes more pervasive, ethical considerations become increasingly important. Issues around privacy, bias, transparency, and accountability need careful attention. AI systems are only as objective as the data they're trained on, and without careful oversight, they can perpetuate or even amplify societal biases.</p>
          
          <blockquote>
            "The question isn't whether AI will transform everyday life—it's how, and who will benefit from that transformation."
          </blockquote>
          
          <h2>What to Expect</h2>
          
          <p>In the near future, we can expect AI to become more personalized, contextual, and proactive. Applications might include:</p>
          
          <ul>
            <li>Health monitoring systems that predict potential issues before symptoms appear</li>
            <li>Educational tools that adapt precisely to each student's learning style</li>
            <li>Smart cities with infrastructure that adjusts to real-time needs</li>
            <li>Workspaces that optimize for productivity and wellbeing</li>
          </ul>
          
          <p>The most profound impacts may come from AI applications we haven't yet imagined—just as few predicted how smartphones would transform daily life before they became ubiquitous.</p>
          
          <h2>Conclusion</h2>
          
          <p>The future of AI in everyday applications is not just about smarter technology, but about more intuitive, helpful, and accessible tools that enhance human capabilities rather than replace them. As these technologies continue to evolve, the most successful implementations will be those that thoughtfully balance innovation with ethical considerations, creating genuine value in people's lives.</p>
        </div>
        
        <div class="post-tags">
          <a href="#" class="post-tag">Artificial Intelligence</a>
          <a href="#" class="post-tag">Technology</a>
          <a href="#" class="post-tag">Future Tech</a>
          <a href="#" class="post-tag">Innovation</a>
        </div>
      `,
      author: {
        name: 'Sarah Johnson',
        bio: 'Tech journalist with over 10 years of experience covering emerging technologies and their impact on society.',
        avatar: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        twitter: '#',
        linkedin: '#'
      },
      category: 'technology',
      relatedPosts: [4, 8, 2]
    },
    {
      id: 2,
      title: 'Principles of Minimalist Web Design',
      content: `
        <div class="post-header">
          <span class="post-category">Design</span>
          <h1 class="post-title">Principles of Minimalist Web Design</h1>
          <div class="post-meta">
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Michael Chen">
            <div class="post-meta-details">
              <span class="post-meta-detail"><i class="fas fa-user"></i> Michael Chen</span>
              <span class="post-meta-detail"><i class="fas fa-calendar"></i> May 12, 2025</span>
              <span class="post-meta-detail"><i class="fas fa-comments"></i> 6 Comments</span>
            </div>
          </div>
        </div>
        
        <div class="post-featured-image">
          <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Minimalist Design">
        </div>
        
        <div class="post-content">
          <p>Minimalist web design has become increasingly popular in recent years, and for good reason. By stripping away unnecessary elements and focusing on essential content, minimalist designs create cleaner, more effective user experiences. In this article, we'll explore the core principles that make minimalist web design so powerful.</p>
          
          <h2>The Philosophy of Less is More</h2>
          
          <p>At its core, minimalist design is about removing the superfluous to highlight what truly matters. This approach isn't about making designs empty or boring—it's about creating purposeful simplicity that enhances usability and aesthetic appeal.</p>
          
          <p>When executed well, minimalist designs feel effortless to users while actually requiring meticulous attention to detail from designers. Every element that remains must earn its place by serving a clear purpose.</p>
          
          <h2>Key Principles of Minimalist Web Design</h2>
          
          <h3>1. Generous White Space</h3>
          
          <p>White space (or negative space) is perhaps the most distinctive characteristic of minimalist design. By surrounding elements with ample breathing room, designers create visual hierarchy, improve readability, and guide user attention. Don't think of white space as empty space—think of it as an active design element that frames and enhances your content.</p>
          
          <h3>2. Limited Color Palette</h3>
          
          <p>Minimalist designs typically employ a restrained color palette, often featuring monochromatic schemes with one or two accent colors. This constraint creates visual harmony and makes strategic color use more impactful. When every color serves a purpose, users can more easily understand visual cues and information hierarchy.</p>
          
          <h3>3. Typography as a Design Element</h3>
          
          <p>In the absence of decorative elements, typography takes center stage in minimalist design. Clean, readable fonts with thoughtful sizing and spacing become key design features. Typography isn't just about legibility—it's a central aesthetic component that contributes to the overall visual language.</p>
          
          <blockquote>
            "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." — Antoine de Saint-Exupéry
          </blockquote>
          
          <h3>4. Functional Imagery</h3>
          
          <p>Minimalist designs use images selectively and purposefully. Every visual should serve a specific function, whether communicating information, establishing brand identity, or creating emotional connection. High-quality, relevant imagery with consistent treatment reinforces the clean aesthetic while adding depth to the experience.</p>
          
          <h3>5. Intuitive Navigation</h3>
          
          <p>Simplified navigation is essential to minimalist web design. Clear, straightforward pathways help users find what they need without unnecessary complexity. This often means:
          </p>
          
          <ul>
            <li>Reducing the number of menu items</li>
            <li>Creating logical hierarchy in navigation structures</li>
            <li>Using familiar patterns that don't require explanation</li>
            <li>Incorporating subtle animations that guide user attention</li>
          </ul>
          
          <h2>Common Misconceptions</h2>
          
          <p>Minimalist design is sometimes misunderstood as being simplistic or lacking depth. In reality, successful minimalist designs require complex problem-solving to present information in its most essential form. The approach isn't about designing less—it's about designing more thoughtfully.</p>
          
          <p>Another misconception is that minimalist design must be cold or impersonal. While these designs often feature clean lines and geometric shapes, they can still incorporate warmth through carefully selected colors, typography with character, and strategic use of organic elements.</p>
          
          <h2>Conclusion</h2>
          
          <p>Minimalist web design principles create interfaces that feel natural and effortless to users while effectively communicating information. By embracing restraint, designers can create experiences that stand the test of time and allow content to truly shine. In a digital landscape increasingly cluttered with distractions, the disciplined simplicity of minimalist design offers welcome clarity.</p>
        </div>
        
        <div class="post-tags">
          <a href="#" class="post-tag">Web Design</a>
          <a href="#" class="post-tag">Minimalism</a>
          <a href="#" class="post-tag">UX/UI</a>
          <a href="#" class="post-tag">Design Principles</a>
        </div>
      `,
      author: {
        name: 'Michael Chen',
        bio: 'UX designer and educator specializing in user-centered design approaches and accessibility.',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        twitter: '#',
        dribbble: '#'
      },
      category: 'design',
      relatedPosts: [5, 7, 1]
    },
    {
      id: 3,
      title: 'Remote Work Strategies That Actually Work',
      content: `
        <div class="post-header">
          <span class="post-category">Productivity</span>
          <h1 class="post-title">Remote Work Strategies That Actually Work</h1>
          <div class="post-meta">
            <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Emma Wilson">
            <div class="post-meta-details">
              <span class="post-meta-detail"><i class="fas fa-user"></i> Emma Wilson</span>
              <span class="post-meta-detail"><i class="fas fa-calendar"></i> May 10, 2025</span>
              <span class="post-meta-detail"><i class="fas fa-comments"></i> 12 Comments</span>
            </div>
          </div>
        </div>
        
        <div class="post-featured-image">
          <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Remote Work">
        </div>
        
        <div class="post-content">
          <p>Remote work has evolved from a temporary pandemic response to a permanent fixture in the modern workplace. Yet many professionals still struggle to find a sustainable approach that balances productivity, wellbeing, and connection. In this article, we'll explore evidence-based strategies that help remote workers thrive.</p>
          
          <h2>Creating an Effective Workspace</h2>
          
          <p>Your physical environment significantly impacts your focus, productivity, and mental health. An effective remote workspace doesn't require an elaborate home office, but it should incorporate these key elements:</p>
          
          <ul>
            <li><strong>Dedicated space</strong>: Even if it's just a specific corner of a room, having a consistent work location helps your brain switch into work mode.</li>
            <li><strong>Ergonomic setup</strong>: Proper chair height, monitor positioning, and keyboard placement prevent physical strain during long work sessions.</li>
            <li><strong>Natural light</strong>: Position your workspace near a window when possible. Natural light improves mood, energy, and sleep quality by supporting healthy circadian rhythms.</li>
            <li><strong>Minimal distractions</strong>: Identify your common distractions and create systems to manage them, whether that means noise-cancelling headphones, a door that closes, or apps that block distracting websites.</li>
          </ul>
          
          <h2>Establishing Boundaries</h2>
          
          <p>Without the physical separation between work and home, creating psychological boundaries becomes essential. Consider these approaches:</p>
          
          <h3>Time Boundaries</h3>
          
          <p>Set consistent working hours and communicate them to colleagues and household members. Include a deliberate "shutdown ritual" at the end of each workday—this could be as simple as closing your laptop, changing clothes, or taking a short walk to signal the transition from work to personal time.</p>
          
          <h3>Space Boundaries</h3>
          
          <p>If possible, work in a space that's separate from where you relax and sleep. If you're working in a multipurpose area, use visual cues to transform the space: a specific desk lamp that's only on during work hours, or a tablecloth that covers your workspace at the end of the day.</p>
          
          <blockquote>
            "Productivity isn't about how much you do; it's about how much you accomplish that matters."
          </blockquote>
          
          <h2>Communication Strategies</h2>
          
          <p>Clear, proactive communication becomes even more important in remote settings where casual interactions are limited.</p>
          
          <h3>Intentional Visibility</h3>
          
          <p>Remote work can make your contributions less visible. Be intentional about sharing progress, challenges, and accomplishments with your team. This isn't about self-promotion—it's about creating the transparency that happens naturally in an office setting.</p>
          
          <h3>Communication Norms</h3>
          
          <p>Work with your team to establish shared expectations about:</p>
          
          <ul>
            <li>Which communication channels to use for different types of messages</li>
            <li>Expected response times for various priorities</li>
            <li>Meeting protocols (camera use, agenda sharing, etc.)</li>
            <li>How to communicate availability and focus time</li>
          </ul>
          
          <h2>Productivity Systems</h2>
          
          <p>Remote work often offers more autonomy but requires greater self-management. Effective productivity systems share these characteristics:</p>
          
          <h3>Task Batching</h3>
          
          <p>Group similar tasks together and schedule them for specific blocks. This reduces the cognitive load of context-switching and helps maintain focus. For example, designate certain times for meetings, email processing, creative work, and administrative tasks.</p>
          
          <h3>Time Boxing</h3>
          
          <p>Allocate fixed time periods to specific activities, and when the time is up, move on. This creates urgency that combats perfectionism and helps maintain momentum throughout the day.</p>
          
          <h2>Well-being Practices</h2>
          
          <p>Sustainable remote work requires deliberate attention to physical and mental health:</p>
          
          <h3>Movement Integration</h3>
          
          <p>Build movement into your daily routine. This might include:</p>
          
          <ul>
            <li>Morning exercise before work</li>
            <li>Walking meetings for phone calls</li>
            <li>Stretching breaks between focused work sessions</li>
            <li>Standing desks or alternating sitting and standing</li>
          </ul>
          
          <h3>Connection Rituals</h3>
          
          <p>Combat isolation by creating regular opportunities for meaningful interaction, both work-related and social. Schedule coffee chats with colleagues, join interest-based groups within your organization, or participate in community activities that align with your schedule.</p>
          
          <h2>Conclusion</h2>
          
          <p>Effective remote work isn't about recreating office conditions at home—it's about thoughtfully designing a work experience that leverages the unique advantages of remote work while mitigating its challenges. By creating intentional systems for your environment, boundaries, communication, productivity, and wellbeing, you can build a sustainable remote work experience that enhances both your professional contributions and personal quality of life.</p>
        </div>
        
        <div class="post-tags">
          <a href="#" class="post-tag">Remote Work</a>
          <a href="#" class="post-tag">Productivity</a>
          <a href="#" class="post-tag">Work-Life Balance</a>
          <a href="#" class="post-tag">Workplace</a>
        </div>
      `,
      author: {
        name: 'Emma Wilson',
        bio: 'Former lifestyle editor with a passion for productivity systems and personal development.',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        twitter: '#',
        instagram: '#'
      },
      category: 'productivity',
      relatedPosts: [9, 6, 5]
    }
  ];
  
  // Get additional blog posts from blog.js
  const additionalPosts = [
    {
      id: 4,
      title: '2025 Tech Trends to Watch',
      excerpt: 'The most promising technological innovations that will shape our future.',
      category: 'technology',
      author: 'Sarah Johnson',
      date: 'May 8, 2025',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      title: 'UX Practices That Drive Conversion',
      excerpt: 'How effective user experience design can significantly increase conversion rates.',
      category: 'design',
      author: 'Michael Chen',
      date: 'May 6, 2025',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 6,
      title: 'Building a Morning Routine for Success',
      excerpt: 'How the first hours of your day can set the tone for productivity and wellbeing.',
      category: 'lifestyle',
      author: 'Emma Wilson',
      date: 'May 4, 2025',
      image: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 7,
      title: 'The Psychology of Color in Marketing',
      excerpt: 'Understanding how color choices affect consumer perception and behavior.',
      category: 'design',
      author: 'Michael Chen',
      date: 'May 2, 2025',
      image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 8,
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Simple yet effective ways for small businesses to protect their digital assets.',
      category: 'technology',
      author: 'Sarah Johnson',
      date: 'April 30, 2025',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 9,
      title: 'Mindfulness Techniques for Busy Professionals',
      excerpt: 'How to incorporate mindfulness into your workday for better focus and reduced stress.',
      category: 'productivity',
      author: 'Emma Wilson',
      date: 'April 28, 2025',
      image: 'https://images.pexels.com/photos/914472/pexels-photo-914472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];
  
  // Initialize the blog post page
  function initBlogPost() {
    // Get post ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = Number(urlParams.get('id'));
    
    // Find the post
    const post = blogPosts.find(post => post.id === postId);
    
    if (post) {
      // Update page title
      document.title = `${post.title} - InsightBlog`;
      
      // Render post content
      if (blogPostContainer) {
        blogPostContainer.innerHTML = post.content;
      }
      
      // Render author bio
      if (authorBioContainer) {
        renderAuthorBio(post.author);
      }
      
      // Render related posts
      if (relatedPostsContainer) {
        renderRelatedPosts(post.relatedPosts);
      }
    } else {
      // Post not found
      if (blogPostContainer) {
        blogPostContainer.innerHTML = `
          <div class="post-header">
            <h1 class="post-title">Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist or has been removed.</p>
            <a href="blog.html" class="btn btn-primary">Back to Blog</a>
          </div>
        `;
      }
    }
  }
  
  // Render author bio
  function renderAuthorBio(author) {
    if (!authorBioContainer || !author) return;
    
    authorBioContainer.innerHTML = `
      <div class="author-avatar">
        <img src="${author.avatar}" alt="${author.name}">
      </div>
      <div class="author-info">
        <h3>${author.name}</h3>
        <p>${author.bio}</p>
        <div class="author-social">
          ${author.twitter ? `<a href="${author.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>` : ''}
          ${author.linkedin ? `<a href="${author.linkedin}" target="_blank"><i class="fab fa-linkedin-in"></i></a>` : ''}
          ${author.instagram ? `<a href="${author.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>` : ''}
          ${author.dribbble ? `<a href="${author.dribbble}" target="_blank"><i class="fab fa-dribbble"></i></a>` : ''}
        </div>
      </div>
    `;
  }
  
  // Render related posts
  function renderRelatedPosts(relatedPostIds) {
    if (!relatedPostsContainer || !relatedPostIds) return;
    
    // Combine main posts and additional posts
    const allPosts = [...blogPosts, ...additionalPosts];
    
    // Get unique posts by filtering out duplicates
    const uniquePosts = allPosts.filter((post, index, self) => 
      index === self.findIndex((p) => p.id === post.id)
    );
    
    // Get related posts
    const related = relatedPostIds.map(id => uniquePosts.find(post => post.id === id)).filter(Boolean);
    
    relatedPostsContainer.innerHTML = '';
    
    related.forEach(post => {
      const postCard = document.createElement('div');
      postCard.className = 'post-card';
      
      postCard.innerHTML = `
        <div class="post-card-image">
          <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="post-card-content">
          <span class="category">${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
          <h3>${post.title}</h3>
          <p class="post-meta">By ${post.author} • ${post.date}</p>
          <a href="post.html?id=${post.id}" class="read-more">Read Article</a>
        </div>
      `;
      
      relatedPostsContainer.appendChild(postCard);
    });
  }
  
  // Initialize
  initBlogPost();
});