document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Form validation for the contact form
    const contactForm = document.querySelector('.contact form');
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const nameInput = document.querySelector('input[type="text"]');
      const emailInput = document.querySelector('input[type="email"]');
      const messageInput = document.querySelector('textarea');
  
      if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return;
      }
  
      if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
      }
  
      if (messageInput.value.trim() === '') {
        alert('Please enter your message.');
        messageInput.focus();
        return;
      }
  
      // If all fields are valid, you can submit the form here
      alert('Form submitted successfully!');
      contactForm.reset();
    });
  
    // Helper function to validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  