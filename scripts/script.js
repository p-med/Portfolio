  const form = document.getElementById('contact-form');
  const submitBtn = document.querySelector('.btn-submit');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        form.innerHTML = `
          <div style="text-align: center; padding: 40px; color: #354f52;">
            <h3 style="margin-bottom: 10px;">✓ Message Sent!</h3>
            <p style="color: #52796f;">Thanks for reaching out. I'll get back to you soon.</p>
          </div>
        `;
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      alert('Oops! Something went wrong. Please try emailing me directly at pcmedina.avalos@gmail.com');
    }
  });