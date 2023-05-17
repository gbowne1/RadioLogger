// /src/client/app.js
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    window.location.href = '/login/login.html';
  });
});

const loginForm = document.getElementById('login-form');
const rememberCheckbox = document.getElementById('remember-checkbox');

loginForm.addEventListener('submit', (event) => {
  if (!rememberCheckbox.checked) {
    event.preventDefault();
    alert('Please check the "Keep me logged in" box to proceed.');
  }
});
