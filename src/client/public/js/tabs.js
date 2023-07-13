const registerTabButton = document.querySelector('#register');
const loginTabButton = document.querySelector('#login');
const resetTabButton = document.querySelector('#reset');

const registerForm = document.querySelector('.register');
const loginForm = document.querySelector('.login');
const resetForm = document.querySelector('.reset');

registerTabButton.addEventListener('click', function () {
  registerForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
  resetForm.classList.add('hidden');
});

loginTabButton.addEventListener('click', function () {
  registerForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
  resetForm.classList.add('hidden');
});

resetTabButton.addEventListener('click', function () {
  registerForm.classList.add('hidden');
  loginForm.classList.add('hidden');
  resetForm.classList.remove('hidden');
});
