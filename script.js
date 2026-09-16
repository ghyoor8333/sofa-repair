document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Close mobile navbar after clicking a link
  document.querySelectorAll("#mainNav .nav-link").forEach(function(link) {
    link.addEventListener("click", function() {
      const nav = document.getElementById("mainNav");
      if (nav.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  // Demo enquiry form
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

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
