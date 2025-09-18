// NSBLPA Prototype - Vanilla JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      const isOpen = mobileMenu.classList.contains('active');
      mobileMenuToggle.setAttribute('aria-expanded', isOpen);
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenu.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  // Contact form handling
  const contactForm = document.querySelector('form.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get('name') || 'there';
      const email = formData.get('email') || 'your email';
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'card';
      successMessage.style.background = 'var(--primary)';
      successMessage.style.color = 'white';
      successMessage.style.marginTop = 'var(--space-md)';
      successMessage.style.textAlign = 'center';
      successMessage.innerHTML = `
        <h3>Thank you, ${name}!</h3>
        <p>Your message has been received. We'll get back to you at ${email} soon.</p>
      `;
      
      contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
      contactForm.reset();
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        if (successMessage.parentNode) {
          successMessage.parentNode.removeChild(successMessage);
        }
      }, 5000);
    });
  }
  
  // Investment form handling
  const investmentForm = document.querySelector('form[aria-label="Investment inquiry form"]');
  if (investmentForm) {
    investmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(investmentForm);
      const name = formData.get('name') || 'there';
      const email = formData.get('email') || 'your email';
      const investmentType = formData.get('investment-type') || 'your investment interest';
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'card';
      successMessage.style.background = 'var(--primary)';
      successMessage.style.color = 'white';
      successMessage.style.marginTop = 'var(--space-md)';
      successMessage.style.textAlign = 'center';
      successMessage.innerHTML = `
        <h3>Thank you, ${name}!</h3>
        <p>Your investment inquiry regarding ${investmentType} has been received. We'll get back to you at ${email} soon.</p>
      `;
      
      investmentForm.parentNode.insertBefore(successMessage, investmentForm.nextSibling);
      investmentForm.reset();
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        if (successMessage.parentNode) {
          successMessage.parentNode.removeChild(successMessage);
        }
      }, 5000);
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add fade-in animation to cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all cards and sections
  document.querySelectorAll('.card, .news-card, .highlight-card, .team-card, .app-card').forEach(element => {
    observer.observe(element);
  });
  
  // Add loading states to external links
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
      // Add a small delay to show the click was registered
      this.style.opacity = '0.7';
      setTimeout(() => {
        this.style.opacity = '1';
      }, 200);
    });
  });
  
  // Add hover effects to team cards
  document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Add hover effects to app cards
  document.querySelectorAll('.app-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Add click effects to buttons
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });
  
  // Add search functionality (if search input exists)
  const searchInput = document.querySelector('input[type="search"]');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const searchableElements = document.querySelectorAll('.news-card, .team-card, .app-card');
      
      searchableElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
    });
  }
  
  // Add keyboard navigation for mobile menu
  if (mobileMenu) {
    const menuItems = mobileMenu.querySelectorAll('a');
    menuItems.forEach((item, index) => {
      item.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' && index < menuItems.length - 1) {
          e.preventDefault();
          menuItems[index + 1].focus();
        } else if (e.key === 'ArrowUp' && index > 0) {
          e.preventDefault();
          menuItems[index - 1].focus();
        } else if (e.key === 'Escape') {
          mobileMenu.classList.remove('active');
          mobileMenuToggle.focus();
        }
      });
    });
  }
  
  // Add form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        if (this.value.trim() === '') {
          this.style.borderColor = '#ef4444';
        } else {
          this.style.borderColor = 'var(--border)';
        }
      });
      
      input.addEventListener('input', function() {
        if (this.value.trim() !== '') {
          this.style.borderColor = 'var(--border)';
        }
      });
    });
  });
  
  // Add loading animation for external links
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function() {
      const originalText = this.textContent;
      this.textContent = 'Opening...';
      this.style.opacity = '0.7';
      
      setTimeout(() => {
        this.textContent = originalText;
        this.style.opacity = '1';
      }, 1000);
    });
  });
});
