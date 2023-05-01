// /src/client/app.js
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    window.location.href = '/login/login.html';
  });
});
