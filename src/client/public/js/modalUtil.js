const openModal = function () {
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.classList.add("show");
  const modalContent = document.querySelector(".modal-content");
  modalContent.innerHTML = ""; // Clear the modal content
  // Load the modal content from the separate HTML file
  fetch("modal.html")
    .then(response => response.text())
    .then(data => {
      modalContent.innerHTML = data;
    });
};

const closeModal = function () {
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.classList.remove("show");
};

const openModalBtn = document.querySelector(".btn-open");
openModalBtn.addEventListener("click", openModal);

const closeModalBtn = document.querySelector(".btn-close");
closeModalBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
