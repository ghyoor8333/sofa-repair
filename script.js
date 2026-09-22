document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Close mobile navbar after clicking a link
  document.querySelectorAll("#mainNav .nav-link").forEach(function(link) {
    link.addEventListener("click", function() {
      const nav = document.getElementById("mainNav");
      if (nav.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  const galleryTrack = document.querySelector(".gallery-track");
  const previousGalleryButton = document.querySelector(".gallery-control-prev");
  const nextGalleryButton = document.querySelector(".gallery-control-next");

  if (galleryTrack && previousGalleryButton && nextGalleryButton) {
    const moveGallery = function (direction) {
      const galleryItem = galleryTrack.querySelector(".gallery-item");
      if (!galleryItem) {
        return;
      }

      const gap = parseFloat(getComputedStyle(galleryTrack).gap) || 0;
      galleryTrack.scrollBy({
        left: direction * (galleryItem.offsetWidth + gap),
        behavior: "smooth"
      });
    };

    previousGalleryButton.addEventListener("click", function () {
      moveGallery(-1);
    });
    nextGalleryButton.addEventListener("click", function () {
      moveGallery(1);
    });
  }

  // Demo enquiry form
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (!form || !message) {
    return;
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;

    if (!name || !phone || !service) {
      message.textContent = "Please fill all fields.";
      message.style.color = "#c0392b";
      return;
    }

    message.textContent = "Thank you! Your enquiry has been received.";
    message.style.color = "#27824b";
    form.reset();
  });
});
