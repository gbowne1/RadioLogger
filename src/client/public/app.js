document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector('button');

  // Redirect to login page
  // button.addEventListener('click', () => {
  //     window.location.href = './login.html';
  // });

  // Theme toggle functionality
  const themeToggle = document.getElementById('themeToggle');

  if (themeToggle) {
      themeToggle.addEventListener('click', toggleColorMode);
  }

  function toggleColorMode() {
      if (document.body.classList.contains('dark')) {
          document.body.classList.remove('dark');
          localStorage.setItem('color-mode', 'light');
      } else {
          document.body.classList.add('dark');
          localStorage.setItem('color-mode', 'dark');
      }
  }
});
