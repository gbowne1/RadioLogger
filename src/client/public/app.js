// /src/client/app.js
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    window.location.href = '/login/login.html';
  });

  const loginForm = document.getElementById('login-form');
  const rememberCheckbox = document.getElementById('remember-checkbox');

  loginForm.addEventListener('submit', (event) => {
    if (!rememberCheckbox.checked) {
      event.preventDefault();
      alert('Please check the "Keep me logged in" box to proceed.');
    }
  });

  $(document).ready(function () {
    $('#themeToggle').on('click', function () {
      $('body').toggleClass('dark-theme');
    });
  });

  const toggleColorMode = e => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      localStorage.setItem('color-mode', 'light');
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('color-mode', 'dark');
    }
  };

  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', toggleColorMode);
});
