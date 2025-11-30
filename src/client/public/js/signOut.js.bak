// Fetch JWT and check for validity
const jwt = localStorage.getItem("jwt");
if (!jwt) {
  window.location.href = './login.html'; // Redirect if JWT is absent
}

// Function to load user data
async function loadUser() {
  try {
    const response = await fetch("{api}", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwt
      }
    });

    if (response.ok) {
      const data = await response.json();
      if (data.status === "ok") {
        const user = data.user;
        document.getElementById("fname").textContent = user.fname;
        document.getElementById("avatar").src = user.avatar;
        document.getElementById("username").textContent = user.username;
      } else {
        // Handle potential errors from server response
        console.error("Error loading user data:", data.message);
        // Consider redirecting to login if appropriate
      }
    } else {
      // Handle HTTP errors
      console.error("Error fetching user data:", response.statusText);
      // Consider redirecting to login or showing an error message
    }
  } catch (error) {
    console.error("Error:", error);
    // Handle any network errors or other issues
  }
}

loadUser();

function logout() {
  localStorage.removeItem("jwt");
  window.location.href = './login.html';
}
