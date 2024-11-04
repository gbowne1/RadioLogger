document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the theme toggle button
  const themeToggle = document.querySelector('#themeToggle');

  // Function to toggle between light and dark themes
  function toggleTheme() {
    // Toggle the "dark-theme" and "light-theme" classes on the body element
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    // Set the text and class of the theme toggle button based on the current theme
    if (document.body.classList.contains('dark-theme')) {
      themeToggle.textContent = 'Switch to light mode';
      themeToggle.classList.remove('dark-theme');
      themeToggle.classList.add('light-theme');
    } else {
      themeToggle.textContent = 'Switch to dark mode';
      themeToggle.classList.remove('light-theme');
      themeToggle.classList.add('dark-theme');
    }
  }

  // Attach a click event listener to the theme toggle button
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
});
