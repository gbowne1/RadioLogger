$(document).ready(() => {
  // Get the message button
  const messageButton = $('#message-btn');

  // Add event listener to the message button
  messageButton.click(() => {
    // Send AJAX request to the server
    $.ajax({
      url: '/message', // Replace with the URL of your server endpoint
      type: 'GET',
      success: (response) => {
        // Handle the response from the server here
      },
      error: (error) => {
        console.log(error);
      }
    });
  });

  // Get the carousel and its items and indicators
  const carousel = $('#carouselExampleIndicators');
  const carouselItems = carousel.find('.carousel-item');
  const carouselIndicators = carousel.find('.carousel-indicators button');

  // Add event listeners to the carousel indicators
  carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      // Remove the active class from all carousel items and indicators
      carouselItems.forEach((item) => item.classList.remove('active'));
      carouselIndicators.forEach((indicator) => indicator.classList.remove('active'));

      // Add the active class to the clicked indicator and item
      indicator.classList.add('active');
      carouselItems[index].classList.add('active');
    });
  });

  // Get the follow and like buttons
  const followButton = $('.btn-outline-secondary:first-of-type');
  const likeButton = $('.btn-outline-secondary:last-of-type');
    const followCount = document.querySelector('.follow-count');

  // Add event listeners to the follow and like buttons
  followButton.click(() => {
    // TODO: Implement follow functionality
    console.log('Follow button clicked');
    // Increment the follow count and update the follow count element
    const currentCount = parseInt(followCount.textContent);
    followCount.textContent = currentCount + 1;
  });

  likeButton.click(() => {
    // TODO: Implement like functionality
    console.log('Like button clicked');
  });
});
