// app_nobookmark.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const dropdown = document.getElementById("dropdown-menu");

  if (hamburger && dropdown) {
    function setDropdown(open) {
      hamburger.classList.toggle("open", open);
      dropdown.classList.toggle("open", open);
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
      dropdown.setAttribute("aria-hidden", open ? "false" : "true");
    }

    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      setDropdown(!hamburger.classList.contains("open"));
    });

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target) && !hamburger.contains(e.target)) {
        setDropdown(false);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setDropdown(false);
    });

    dropdown.addEventListener("click", (e) => e.stopPropagation());
  }
});


