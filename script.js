document.addEventListener('DOMContentLoaded', function() {
      const header = document.querySelector('header');
      const hero = document.querySelector('.hero');
      const services = document.querySelector('.services');
      const about = document.querySelector('.about');
      const contact = document.querySelector('.contact');
      const calendar = document.querySelector('.calendar');
      const testimonials = document.querySelector('.testimonials');
      const footer = document.querySelector('footer');
      const serviceItems = document.querySelectorAll('.service');

      header.classList.add('fade-in');
      hero.classList.add('fade-in');
      services.classList.add('fade-in');
      about.classList.add('fade-in');
      contact.classList.add('fade-in');
      calendar.classList.add('fade-in');
      testimonials.classList.add('fade-in');
      footer.classList.add('fade-in');

      serviceItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('fade-in');
        }, 200 * index);
      });

      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const name = contactForm.querySelector('input[name="name"]').value;
          const email = contactForm.querySelector('input[name="email"]').value;
          const message = contactForm.querySelector('textarea[name="message"]').value;
          alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        });
      }

      const testimonialSlider = document.querySelector('.testimonial-slider');
      const testimonialList = document.querySelector('.testimonial-list');
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      const sliderIndicators = document.querySelector('.slider-indicators');
      const testimonialsArray = Array.from(testimonialList.children);
      let currentIndex = 0;

      function updateSlider() {
        testimonialList.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateIndicators();
      }

      function updateIndicators() {
        sliderIndicators.innerHTML = '';
        testimonialsArray.forEach((_, index) => {
          const indicator = document.createElement('span');
          indicator.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
          });
          if (index === currentIndex) {
            indicator.classList.add('active');
          }
          sliderIndicators.appendChild(indicator);
        });
      }

      prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        updateSlider();
      });

      nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(testimonialsArray.length - 1, currentIndex + 1);
        updateSlider();
      });

      updateIndicators();
    });
