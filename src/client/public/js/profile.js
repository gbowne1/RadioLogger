document.addEventListener('DOMContentLoaded', () => {
  // Get the edit profile button
  const editProfileButton = document.querySelector('#edit-profile-btn');

  // Get the edit profile modal
  const editProfileModal = document.querySelector('#edit-profile-modal');

  // Add event listener to the edit profile button
  editProfileButton.addEventListener('click', () => {
    // Show the edit profile modal
    editProfileModal.classList.add('show');
  });

  // Get the message button
  const messageButton = document.getElementById('message-btn');

  // Add event listener to the message button
  messageButton.addEventListener('click', async () => {
    try {
      const response = await fetch('/message', { // Replace with your endpoint URL
        method: 'GET'
      });
      if (response.ok) {
        // Handle the response from the server here
        const data = await response.json();
        console.log(data); // Example: log the response data
      } else {
        console.error('Error fetching messages:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending message request:', error);
    }
  });

  // Get the carousel and its items and indicators
  const carousel = document.getElementById('carouselExampleIndicators');
  const carouselItems = carousel.querySelectorAll('.carousel-item');
  const carouselIndicators = carousel.querySelectorAll('.carousel-indicators button');

  // Add event listeners to the carousel indicators
  carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      // Remove active class from all carousel items and indicators
      carouselItems.forEach((item) => item.classList.remove('active'));
      carouselIndicators.forEach((indicator) => indicator.classList.remove('active'));

      // Add active class to the clicked indicator and item
      indicator.classList.add('active');
      carouselItems[index].classList.add('active');
    });
  });

  // Get the follow and like buttons and follow count element
  const followButton = document.querySelector('.btn-outline-secondary:first-of-type');
  const likeButton = document.querySelector('.btn-outline-secondary:last-of-type');
  const followCount = document.querySelector('.follow-count');

  // Add event listeners to the follow and like buttons
  followButton.addEventListener('click', () => {
    // Implement follow functionality (e.g., send AJAX request)
    console.log('Follow button clicked');
    // Update follow count (consider server-side updates for reliability)
    const currentCount = parseInt(followCount.textContent, 10);
    followCount.textContent = currentCount + 1;
  });

  likeButton.addEventListener('click', () => {
    // Implement like functionality (e.g., send AJAX request)
    console.log('Like button clicked');
  });
});
