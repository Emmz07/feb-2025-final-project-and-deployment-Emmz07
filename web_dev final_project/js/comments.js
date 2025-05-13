document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('comment-form');
  const commentsContainer = document.getElementById('comments-container');
  
  // Sample default comments
  const defaultComments = [
    {
      name: 'Alex Morgan',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: '2 days ago',
      text: 'Really insightful article! I\'ve been implementing some of these techniques in my own work and have seen significant improvements.'
    },
    {
      name: 'Jamie Smith',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: '4 days ago',
      text: 'I appreciate how you broke down these complex concepts into actionable steps. Looking forward to more articles like this!'
    }
  ];
  
  // Initialize comments system
  function initComments() {
    loadComments();
    setupCommentForm();
  }
  
  // Load comments from localStorage or use defaults
  function loadComments() {
    // Get post ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    // Try to get comments from localStorage
    let comments = [];
    try {
      const storedComments = localStorage.getItem(`comments_${postId}`);
      comments = storedComments ? JSON.parse(storedComments) : defaultComments;
    } catch (error) {
      console.error('Error loading comments:', error);
      comments = defaultComments;
    }
    
    renderComments(comments);
  }
  
  // Render comments to the container
  function renderComments(comments) {
    if (!commentsContainer) return;
    
    commentsContainer.innerHTML = '';
    
    if (comments.length === 0) {
      commentsContainer.innerHTML = '<p class="no-comments">Be the first to leave a comment!</p>';
      return;
    }
    
    comments.forEach(comment => {
      const commentElement = document.createElement('div');
      commentElement.className = 'comment';
      
      commentElement.innerHTML = `
        <div class="comment-avatar">
          <img src="${comment.avatar}" alt="${comment.name}">
        </div>
        <div class="comment-content">
          <div class="comment-header">
            <span class="comment-author">${comment.name}</span>
            <span class="comment-date">${comment.date}</span>
          </div>
          <div class="comment-text">
            <p>${comment.text}</p>
          </div>
        </div>
      `;
      
      commentsContainer.appendChild(commentElement);
    });
  }
  
  // Setup comment form submission
  function setupCommentForm() {
    if (!commentForm) return;
    
    commentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const nameInput = document.getElementById('commenter-name');
      const emailInput = document.getElementById('commenter-email');
      const commentInput = document.getElementById('comment-text');
      
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const text = commentInput.value.trim();
      
      // Validate inputs
      if (!name || !email || !text) {
        alert('Please fill in all fields.');
        return;
      }
      
      // Create new comment
      const newComment = {
        name: name,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
        date: 'Just now',
        text: text
      };
      
      // Get post ID from URL
      const urlParams = new URLSearchParams(window.location.search);
      const postId = urlParams.get('id');
      
      // Add comment to localStorage
      try {
        let comments = [];
        const storedComments = localStorage.getItem(`comments_${postId}`);
        
        if (storedComments) {
          comments = JSON.parse(storedComments);
        } else {
          comments = [...defaultComments];
        }
        
        comments.unshift(newComment);
        localStorage.setItem(`comments_${postId}`, JSON.stringify(comments));
        
        // Render updated comments
        renderComments(comments);
        
        // Reset form
        commentForm.reset();
        
        // Show success message
        const formContainer = commentForm.parentElement;
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = 'Your comment has been added successfully!';
        
        formContainer.insertBefore(successMessage, commentForm);
        
        // Remove success message after 3 seconds
        setTimeout(() => {
          successMessage.remove();
        }, 3000);
        
      } catch (error) {
        console.error('Error saving comment:', error);
        alert('There was an error saving your comment. Please try again.');
      }
    });
  }
  
  // Initialize
  initComments();
});