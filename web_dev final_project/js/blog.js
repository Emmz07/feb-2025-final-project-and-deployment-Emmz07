document.addEventListener('DOMContentLoaded', function() {
  const blogGrid = document.getElementById('blog-grid');
  const categoryFilters = document.querySelectorAll('.category-btn');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const pageNumbers = document.getElementById('page-numbers');
  const prevPageBtn = document.getElementById('prev-page');
  const nextPageBtn = document.getElementById('next-page');
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Everyday Applications',
      excerpt: 'Exploring how artificial intelligence is becoming an essential part of our daily lives.',
      category: 'technology',
      author: 'Sarah Johnson',
      date: 'May 15, 2025',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'Principles of Minimalist Web Design',
      excerpt: 'Mastering the art of simplicity in modern web interfaces.',
      category: 'design',
      author: 'Michael Chen',
      date: 'May 12, 2025',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'Remote Work Strategies That Actually Work',
      excerpt: 'Proven methods to stay productive and balanced while working from home.',
      category: 'productivity',
      author: 'Emma Wilson',
      date: 'May 10, 2025',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
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
  
  // Pagination variables
  const postsPerPage = 6;
  let currentPage = 1;
  let filteredPosts = [...blogPosts];
  
  // Initialize the blog grid
  function initBlogGrid() {
    updateUrlFromParams();
    filterPosts();
    renderPosts();
    renderPagination();
  }
  
  // Check URL parameters
  function updateUrlFromParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam) {
      categoryFilters.forEach(btn => {
        if (btn.dataset.category === categoryParam) {
          categoryFilters.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }
      });
      
      filterPosts();
    }
  }
  
  // Filter posts based on category and search
  function filterPosts() {
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    filteredPosts = blogPosts.filter(post => {
      // Filter by category
      const categoryMatch = activeCategory === 'all' || post.category === activeCategory;
      
      // Filter by search term
      const searchMatch = !searchTerm || 
        post.title.toLowerCase().includes(searchTerm) || 
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.author.toLowerCase().includes(searchTerm);
      
      return categoryMatch && searchMatch;
    });
    
    // Reset to first page when filtering
    currentPage = 1;
    
    renderPosts();
    renderPagination();
  }
  
  // Render posts to the grid
  function renderPosts() {
    if (!blogGrid) return;
    
    blogGrid.innerHTML = '';
    
    // Get posts for current page
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = Math.min(startIndex + postsPerPage, filteredPosts.length);
    const currentPosts = filteredPosts.slice(startIndex, endIndex);
    
    if (currentPosts.length === 0) {
      blogGrid.innerHTML = `
        <div class="no-posts">
          <h3>No posts found</h3>
          <p>Try a different search term or category.</p>
        </div>
      `;
      return;
    }
    
    currentPosts.forEach(post => {
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
          <p class="post-excerpt">${post.excerpt}</p>
          <a href="post.html?id=${post.id}" class="read-more">Continue Reading</a>
        </div>
      `;
      
      blogGrid.appendChild(postCard);
    });
  }
  
  // Render pagination controls
  function renderPagination() {
    if (!pageNumbers) return;
    
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    
    // Update pagination buttons state
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
    
    // Generate page numbers
    pageNumbers.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.className = 'page-number';
      if (i === currentPage) {
        pageBtn.classList.add('active');
      }
      pageBtn.textContent = i;
      
      pageBtn.addEventListener('click', () => {
        currentPage = i;
        renderPosts();
        renderPagination();
        
        // Scroll to top of blog grid
        blogGrid.scrollIntoView({ behavior: 'smooth' });
      });
      
      pageNumbers.appendChild(pageBtn);
    }
    
    // Hide pagination if only one page
    if (totalPages <= 1) {
      document.querySelector('.pagination').style.display = 'none';
    } else {
      document.querySelector('.pagination').style.display = 'flex';
    }
  }
  
  // Event listeners
  if (categoryFilters) {
    categoryFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterPosts();
      });
    });
  }
  
  if (searchInput && searchBtn) {
    searchBtn.addEventListener('click', filterPosts);
    searchInput.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        filterPosts();
      }
    });
  }
  
  if (prevPageBtn && nextPageBtn) {
    prevPageBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderPosts();
        renderPagination();
        
        // Scroll to top of blog grid
        blogGrid.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
    nextPageBtn.addEventListener('click', () => {
      const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        renderPosts();
        renderPagination();
        
        // Scroll to top of blog grid
        blogGrid.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  // Initialize
  initBlogGrid();
});