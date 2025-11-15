import { initThemeToggle } from './js/theme.js';
import { initVhfLog } from './js/vhflog.js';
import { initPasswordReset, initSignUp } from './js/signUp.js';

document.addEventListener("DOMContentLoaded", function () {

  initThemeToggle();
  initVhfLog();
  initPasswordReset();
  initSignUp();

  // Redirect to login page
  const button = document.getElementById('index_login_button');
  if (button) {
    button.addEventListener('click', () => {
      window.location.href = './login.html';
    });
  }

});
