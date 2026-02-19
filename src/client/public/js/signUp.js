
function initPasswordReset() {
  const form = document.getElementById("resetPasswordForm");

  if (!form) {
    return;
  }

  function handlePasswordReset(e) {
    e.preventDefault();

    const formData = {
      email: form.email.value,
      oldPassword: form.pass_old.value,
      newPassword: form.pass_new.value
    };

    fetch('/api/v1/password/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(function(response) {
      if (response.ok) {
        return response.json().then(function(data) {
          console.log('Password reset successful:', data.message);
          // You could display the success message to the user
          // For example:
          alert(data.message || 'Password successfully reset');
          // window.location.href = '/login';
        });
      } else {
        return response.json().then(function(data) {
          throw new Error(data.message || 'Failed to reset password');
        });
      }
    })
    .catch(function(error) {
      console.error('Password reset failed:', error.message);
      // Display error to user
      alert(error.message);
    });
  }

  form.addEventListener('submit', handlePasswordReset);
}

function initSignUp() {
  const submitButton = document.getElementById('register_submit');
  if (!submitButton) {
    return;
  }

  async function handleClick(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const reenterPassword = document.getElementById('reenter-password').value;

    // Perform validation checks once
    if (!name || !email || !password || !reenterPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== reenterPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Create data object and send request
    const data = {
      username: name,
      email: email,
      password: password
    };

    const response = await fetch('/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.status === 201) {
      // Redirect the user to a success page
      window.location.href = '/dashboard';
    } else {
      const data = await response.json();
      alert(data.message);
    }
  }

  submitButton.addEventListener('click', handleClick);
}

export { initPasswordReset, initSignUp };
