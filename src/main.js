// Navbar Dropdown
const btn = document.getElementById("menu-btn");
const dropdown = document.getElementById("dropdown");

let isOpen = false;

btn.addEventListener("click", () => {
  if (isOpen) {
    dropdown.classList.remove("p-4", "max-h-96", "mt-4");
    dropdown.classList.add("p-0", "max-h-0", "mt-0");
  } else {
    dropdown.classList.remove("p-0", "max-h-0", "mt-0");
    dropdown.classList.add("p-4", "max-h-96", "mt-4");
  }
  isOpen = !isOpen;
});

// Modal
const detailBtn = document.querySelector("#detail");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modalContent");
const modalCertificate = document.querySelector("#modalCertificate");
const certificateBtn = document.querySelector("#openCertificate");
const certificateImg = document.querySelector("#certificateImg");
const closeBtn = document.querySelector("#close");
const minimizeBtn = document.querySelector("#minimize");

detailBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  modalContent.classList.remove("hidden");
  modalCertificate.classList.add("hidden");
});

certificateBtn.addEventListener("click", () => {
  modalContent.classList.add("hidden");
  modalCertificate.classList.remove("hidden");
  certificateImg.src = "src/img/UiUx1.jpg";
});

minimizeBtn.addEventListener("click", () => {
  modalContent.classList.remove("hidden");
  modalCertificate.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
});

const images = ["src/img/UiUx1.jpg", "src/img/UiUx2.jpg"];

let currentIndex = 0;
