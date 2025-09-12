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
