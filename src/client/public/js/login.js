
const API_BASE_URL = '/api/v1'; // Use relative path
const LOGIN_ENDPOINT = '/login';

function initLogin() {
  async function handleLogin(e) {
    e.preventDefault();

    const username = document.getElementById('tbxUsername').value;
    const password = document.getElementById('tbxPassword').value;

    const data = { username, password };

    try {
      const response = await fetch(`${API_BASE_URL}${LOGIN_ENDPOINT}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const result = await response.json();

      if (result.accessToken) {
        console.log('Welcome');
        // Consider using secure HttpOnly cookies instead of localStorage
        document.cookie = `accessToken=${result.accessToken}; path=/; secure; HttpOnly`;
        window.location.replace('/dashboard/');
      } else {
        throw new Error('No access token received');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  }

  const btnLogin = document.getElementById('btnLogin');
  if (btnLogin) {
    btnLogin.addEventListener('click', handleLogin);
  }
}

export { initLogin };
