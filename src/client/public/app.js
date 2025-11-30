import { initThemeToggle } from './js/theme.js';
import { initVhfLog } from './js/vhflog.js';
import { initPasswordReset, initSignUp } from './js/signUp.js';
import { initScanLog } from './js/scanlog.js';
import { initLogin } from './js/login.js';
import { initProfile } from './js/profile.js';
import { initSwlLog } from './js/swllog.js';

document.addEventListener("DOMContentLoaded", function () {

  initThemeToggle();
  initVhfLog();
  initPasswordReset();
  initSignUp();
  initScanLog();
  initLogin();
  initProfile();
  initSwlLog();

  // Redirect to login page
  const button = document.getElementById('index_login_button');
  if (button) {
    button.addEventListener('click', () => {
      window.location.href = './login.html';
    });
  }

});
