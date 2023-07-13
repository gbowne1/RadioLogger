// Get the carousel element
const carousel = document.querySelector("#carouselExampleIndicators");

// Get the carousel items
const carouselItems = carousel.querySelectorAll(".carousel-item");

// Get the carousel indicators
const carouselIndicators = carousel.querySelectorAll(
  ".carousel-indicators button"
);

// Add event listeners to the carousel indicators
carouselIndicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    // Remove the active class from all carousel items and indicators
    carouselItems.forEach((item) => item.classList.remove("active"));
    carouselIndicators.forEach((indicator) =>
      indicator.classList.remove("active")
    );

    // Add the active class to the clicked indicator and item
    indicator.classList.add("active");
    carouselItems[index].classList.add("active");
  });
});

// Get the follow, like, and message buttons
const followButton = document.querySelector(".btn-outline-secondary:first-of-type");
const likeButton = document.querySelector(".btn-outline-secondary:last-of-type");
const messageButton = document.querySelector(".btn-outline-secondary:nth-of-type(2)");

// Add event listeners to the follow, like, and message buttons
followButton.addEventListener("click", () => {
  // TODO: Implement follow functionality
  console.log("Follow button clicked");
});

likeButton.addEventListener("click", () => {
  // TODO: Implement like functionality
  console.log("Like button clicked");
});

messageButton.addEventListener("click", () => {
  // TODO: Implement message functionality
  console.log("Message button clicked");
});