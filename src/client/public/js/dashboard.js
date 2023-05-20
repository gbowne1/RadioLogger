const toggleColorMode = e => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    localStorage.setItem('color-mode', 'light');
  } else {
    document.body.classList.add('dark');
    localStorage.setItem('color-mode', 'dark');
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', toggleColorMode);
});
