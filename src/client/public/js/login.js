// Connect.js
/*$('#register').on('click', function () {
  $('.register').siblings().hide();
  $('.register').slideToggle();
});
$('#login').on('click', function () {
  $('.login').siblings().hide();
  $('.login').slideToggle();
});
$('#reset').on('click', function () {
  $('.reset').siblings().hide();
  $('.reset').slideToggle();
});*/

const handleLogin = function(e) {
  const API_V = 'http://localhost:3001/api/v1'; //We need create a file with constant
  const END_POINT = '/login';
  const username = document.querySelector('#tbxUsername').value;
  const password = document.querySelector('#tbxPassword').value;
  const data = {
    username: username,
    password: password
  }
  const headers = {
    "Content-type": "application/json; charset=UTF-8",
    'Access-Control-Allow-Origin': '*'
  }

  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  }
  e.preventDefault();

  fetch(`${API_V}${END_POINT}`, options)
  .then(response => response.json())
  .then(data => {
      if(data.data) {
        console.log('Welcome')
        localStorage.setItem('accessToken', data.accessToken);
        window.location.replace('http://localhost:3001/dashboard/')
      }
    })
  .catch(err => console.log(err));
}

const btnLogin = document.querySelector('#btnLogin');
btnLogin.addEventListener('click', handleLogin);

