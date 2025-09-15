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

const detailBtns = document.querySelectorAll(".detailBtn");
const certificateBtns = document.querySelectorAll(".certificateBtn");
const modals = document.querySelectorAll(".modal");

detailBtns.forEach((detailBtn, index) => {
  const modal = modals[index];
  const closeBtn = modal.querySelector("#close");
  const minimizeBtn = modal.querySelector("#minimize");
  const modalContent = modal.querySelector("#modalContent");
  const modalCertificate = modal.querySelector("#modalCertificate");
  const certificateBtn = modal.querySelector("#openCertificate");
  const certificateImg = modal.querySelector("#certificateImg");
  const prevBtn = modal.querySelector("#prevBtn");
  const nextBtn = modal.querySelector("#nextBtn");

  let certArray = [];
  let certIndex = 0;

  detailBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    modalContent.classList.remove("hidden");
    modalCertificate.classList.add("hidden");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  if (certificateBtn) {
    certificateBtn.addEventListener("click", () => {
      certArray = certificateBtn.dataset.certificates.split(",");
      certIndex = 0;
      certificateImg.src = certArray[certIndex];

      modalContent.classList.add("hidden");
      modalCertificate.classList.remove("hidden");
    });
  }

  if (minimizeBtn) {
    minimizeBtn.addEventListener("click", () => {
      modalContent.classList.remove("hidden");
      modalCertificate.classList.add("hidden");
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (certArray.length > 1 && certificateImg) {
        certIndex = (certIndex - 1 + certArray.length) % certArray.length;
        certificateImg.src = certArray[certIndex];
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (certArray.length > 1 && certificateImg) {
        certIndex = (certIndex + 1) % certArray.length;
        certificateImg.src = certArray[certIndex];
      }
    });
  }
});

certificateBtns.forEach((certBtn) => {
  // 1) coba ambil modal dari data-modal bila ada
  const modalSelector = certBtn.dataset.modal; // ex: "#modal-html"
  let modal = modalSelector ? document.querySelector(modalSelector) : null;

  // 2) fallback: kalau tidak ada data-modal, cari modal yang ada setelah <p>
  if (!modal) {
    const p = certBtn.closest("p");
    modal = p ? p.nextElementSibling : null;
  }

  if (!modal) {
    console.warn("Modal tidak ditemukan untuk tombol:", certBtn);
    return; // skip kalau modal memang nggak ada
  }

  const closeBtn = modal.querySelector("#close");
  const modalCertificate = modal.querySelector("#modalCertificate");
  const certificateImg = modal.querySelector("#certificateImg");
  const prevBtn = modal.querySelector("#prevBtn");
  const nextBtn = modal.querySelector("#nextBtn");

  let certArray = [];
  let certIndex = 0;

  certBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    // buka modal
    modal.classList.remove("hidden");
    modal.classList.add("flex");

    // ambil gambar dari data-certificates (pisah dengan koma)
    const raw = certBtn.dataset.certificates || "";
    certArray = raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (certArray.length === 0) {
      console.warn("Tidak ada gambar di data-certificates untuk tombol:", certBtn);
      return;
    }

    certIndex = 0;
    if (certificateImg) certificateImg.src = certArray[certIndex];
    if (modalCertificate) {
      modalCertificate.classList.remove("hidden");
      modalCertificate.classList.add("flex");
    }
  });

  // close (jika ada tombol close di modal)
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      if (modalCertificate) modalCertificate.classList.add("hidden");
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (certArray.length > 1 && certificateImg) {
        certIndex = (certIndex - 1 + certArray.length) % certArray.length;
        certificateImg.src = certArray[certIndex];
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (certArray.length > 1 && certificateImg) {
        certIndex = (certIndex + 1) % certArray.length;
        certificateImg.src = certArray[certIndex];
      }
    });
  }
});
