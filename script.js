// =========================================================
// WANSTEKNIK - JAVASCRIPT
// Menu mobile, tahun otomatis, animasi reveal, dan WhatsApp.
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const year = document.getElementById("year");
  const floatingWa = document.getElementById("floatingWa");

  // Tahun footer otomatis
  year.textContent = new Date().getFullYear();

  // Menu mobile
  menuToggle.addEventListener("click", () => {
    const opened = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(opened));
  });

  // Tutup menu setelah klik link
  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Tombol WhatsApp mengambang
  floatingWa.addEventListener("click", () => {
    const phone = "6285384577964";
    const message = encodeURIComponent(
      "Halo WansTeknik, saya ingin konsultasi mengenai service."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank", "noopener");
  });

  // Animasi elemen ketika masuk viewport
  const targets = document.querySelectorAll(
    ".service-card, .advantage, .step, .contact-box"
  );

  targets.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
});
