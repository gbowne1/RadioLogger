// theme.js

const lightTheme = {
  name: 'light-theme',
  backgroundColor: 'white',
  textColor: 'black',
};

const darkTheme = {
  name: 'dark-theme',
  backgroundColor: '#121212',
  textColor: '#eee',
};

function setTheme(theme) {
  document.body.classList.remove(lightTheme.name, darkTheme.name);
  document.body.classList.add(theme.name);
  localStorage.setItem('theme', theme.name);
}

function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || lightTheme.name;

  if (currentTheme === lightTheme.name) {
    setTheme(darkTheme);
  } else {
    setTheme(lightTheme);
  }
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme') || lightTheme.name;
  setTheme(savedTheme === lightTheme.name ? lightTheme : darkTheme);
}

export { toggleTheme, applySavedTheme };
