function closeMenuAndGoTo(query) {
  document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show')
  setTimeout(() => {
    const element = document.querySelector(query)
    window.scrollTo({
      top: element.getBoundingClientRect().top,
      behavior: 'smooth'
    })
  }, 250);
}

document.addEventListener('DOMContentLoaded', function () {
  const fadeInElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  });

  fadeInElements.forEach(element => {
    observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const testimonialCards = document.querySelectorAll('.testimonial-card-1');

  // Fungsi untuk mengecek apakah elemen ada di viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Fungsi untuk menambahkan class "visible" ketika elemen terlihat
  const showTestimonials = () => {
    testimonialCards.forEach((card, index) => {
      if (isInViewport(card)) {
        // Menambahkan delay pada animasi untuk tiap elemen
        card.style.animationDelay = `${index * 0.5}s`;
        card.classList.add('visible');
      }
    });
  };

  // Panggil fungsi ketika halaman di-scroll atau dimuat ulang
  window.addEventListener('scroll', showTestimonials);
  window.addEventListener('load', showTestimonials);
});


document.querySelector('#hero-menu').
  querySelectorAll('[href]').
  forEach(function (link) {
    link.onclick = function (event) {
      event.preventDefault()
      closeMenuAndGoTo(link.getAttribute('href'))
    }
  })

  function submitContactForm(event) {
    event.preventDefault(); // Prevent default form submission
    // Implement your form submission logic here, e.g., using fetch API to send form data to your server
    alert('Your message has been sent!');
  }
  
  document.getElementById('animate-button').addEventListener('click', function() {
    const productImage = document.getElementById('product-image');
    productImage.classList.add('animate');
});


// Fungsi untuk memvalidasi format email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Fungsi untuk menangani submit form dan melakukan validasi
function submitContactForm(event) {
  event.preventDefault(); // Mencegah form dari submit otomatis

  const emailInput = document.getElementById('email');
  const email = emailInput.value;

  // Validasi email
  if (!validateEmail(email)) {
    alert('Silakan masukkan email yang valid.');
    emailInput.focus(); // Memindahkan fokus ke input email jika tidak valid
    return false;
  }

  // Jika validasi berhasil, lanjutkan pengiriman form
  alert('Pesan berhasil dikirim!');
  
  // Jika ingin mengirimkan form secara manual menggunakan AJAX atau form submit biasa, bisa tambahkan logika di sini.
  // Contoh: document.querySelector('form').submit();
}