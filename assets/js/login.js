document.addEventListener('DOMContentLoaded', function () {
  const tombol = document.querySelector('#tombol');
  const txtUsername = document.querySelector('#username');
  const txtPassword = document.querySelector('#password');

  tombol.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman otomatis

    const emailValue = txtUsername.value.trim();
    const passwordValue = txtPassword.value.trim();

    // Menghapus pesan kesalahan sebelumnya
    clearErrorMessages();

    // Validasi apakah email dan password diisi
    if (emailValue === '' || passwordValue === '') {
      if (emailValue === '') {
        displayErrorMessage(txtUsername, 'Email tidak boleh kosong');
      }
      if (passwordValue === '') {
        displayErrorMessage(txtPassword, 'Password tidak boleh kosong');
      }
    } else if (!isValidEmail(emailValue)) {
      displayErrorMessage(txtUsername, 'Email tidak valid');
    } else if (emailValue !== 'fravv@gmail.com' && passwordValue !== 'okee') {
      displayErrorMessage(txtUsername, 'Email dan password Anda salah');
    } else if (emailValue !== 'fravv@gmail.com') {
      displayErrorMessage(txtUsername, 'Email Anda salah');
    } else if (passwordValue !== 'okee') {
      displayErrorMessage(txtPassword, 'Password Anda salah');
    } else {
      window.location.href = 'index.html'; // Ganti dengan URL halaman tujuan
    }
  });

  function displayErrorMessage(inputElement, message) {
    // Membuat elemen span untuk pesan kesalahan
    const errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;

    // Menyisipkan pesan kesalahan di bawah input
    inputElement.insertAdjacentElement('afterend', errorMessage);
  }

  function clearErrorMessages() {
    // Menghapus semua pesan kesalahan yang ada
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (message) {
      message.remove();
    });
  }

  function isValidEmail(email) {
    // Regular expression untuk validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
