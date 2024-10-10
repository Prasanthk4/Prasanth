var typed = new Typed('#typed', {
  strings: ["Sai Rama Prasanth", "a Data Analyst", "a Front-end Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// Form validation (basic example)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
});

// Sample interaction: Show more info on travel card click
document.querySelectorAll('.travel-card').forEach(card => {
  card.addEventListener('click', () => {
      alert(`More information about ${card.querySelector('h3').textContent}`); // Use backticks here
  });
});
