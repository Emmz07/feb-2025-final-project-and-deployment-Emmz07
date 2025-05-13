document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    // Form validation setup
    const formFields = {
      name: {
        element: document.getElementById('name'),
        errorElement: document.querySelector('#name + .error-message'),
        validators: [
          {
            validate: value => value.trim() !== '',
            message: 'Name is required.'
          },
          {
            validate: value => value.trim().length >= 2,
            message: 'Name must be at least 2 characters long.'
          }
        ]
      },
      email: {
        element: document.getElementById('email'),
        errorElement: document.querySelector('#email + .error-message'),
        validators: [
          {
            validate: value => value.trim() !== '',
            message: 'Email is required.'
          },
          {
            validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message: 'Please enter a valid email address.'
          }
        ]
      },
      subject: {
        element: document.getElementById('subject'),
        errorElement: document.querySelector('#subject + .error-message'),
        validators: [
          {
            validate: value => value.trim() !== '',
            message: 'Subject is required.'
          },
          {
            validate: value => value.trim().length >= 5,
            message: 'Subject must be at least 5 characters long.'
          }
        ]
      },
      message: {
        element: document.getElementById('message'),
        errorElement: document.querySelector('#message + .error-message'),
        validators: [
          {
            validate: value => value.trim() !== '',
            message: 'Message is required.'
          },
          {
            validate: value => value.trim().length >= 10,
            message: 'Message must be at least 10 characters long.'
          }
        ]
      }
    };
    
    // Validate a single field
    function validateField(fieldName) {
      const field = formFields[fieldName];
      
      if (!field || !field.element || !field.errorElement) return true;
      
      const value = field.element.value;
      let isValid = true;
      let errorMessage = '';
      
      for (const validator of field.validators) {
        if (!validator.validate(value)) {
          isValid = false;
          errorMessage = validator.message;
          break;
        }
      }
      
      if (isValid) {
        field.element.classList.remove('invalid');
        field.errorElement.textContent = '';
        field.errorElement.style.display = 'none';
      } else {
        field.element.classList.add('invalid');
        field.errorElement.textContent = errorMessage;
        field.errorElement.style.display = 'block';
      }
      
      return isValid;
    }
    
    // Validate all fields
    function validateForm() {
      let isValid = true;
      
      for (const fieldName in formFields) {
        if (!validateField(fieldName)) {
          isValid = false;
        }
      }
      
      return isValid;
    }
    
    // Set up input validation events
    for (const fieldName in formFields) {
      const field = formFields[fieldName];
      
      if (field.element) {
        // Validate on blur
        field.element.addEventListener('blur', () => {
          validateField(fieldName);
        });
        
        // Clear error on input
        field.element.addEventListener('input', () => {
          field.element.classList.remove('invalid');
          field.errorElement.textContent = '';
          field.errorElement.style.display = 'none';
        });
      }
    }
    
    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (validateForm()) {
        // Simulate form submission
        contactForm.innerHTML = `
          <div class="success-message">
            <i class="fas fa-check-circle"></i>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
          </div>
        `;
        
        // Scroll to the success message
        contactForm.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});