document.addEventListener("DOMContentLoaded", function() {
  fetch('banner.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('banner-placeholder').innerHTML = data;
      // Highlight the current page's nav button
      const page = window.location.pathname.toLowerCase();
      if(page.includes('index.html')) document.getElementById('home-link').classList.add('active');
      else if(page.includes('about.html')) document.getElementById('about-link').classList.add('active');
      else if(page.includes('services.html')) document.getElementById('services-link').classList.add('active');
      else if(page.includes('contact.html')) document.getElementById('contact-link').classList.add('active');
    });
});
