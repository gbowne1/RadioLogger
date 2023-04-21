document.querySelector('#p1').addEventListener('change', function () {
  document.querySelector('#p2').pattern = this.value;
});

document.querySelector('form[action="signUp.js"]').addEventListener('submit', function (e) {
  checkpass();
});
