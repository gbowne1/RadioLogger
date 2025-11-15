
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) {
    return;
  }
  const body = document.body;

  // Check for saved preference
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Dark Mode';
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDark
      ? '<i class="fas fa-sun"></i> Dark Mode'
      : '<i class="fas fa-moon"></i> Light Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

export { initThemeToggle };
