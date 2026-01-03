document.addEventListener("DOMContentLoaded", () => {
    const bookmark = document.querySelector(".bookmark");

    // Initial stretch on page load
    bookmark.classList.add("stretch");
    setTimeout(() => {
        bookmark.classList.remove("stretch");
    }, 500);

    // Repeat stretch every 10 seconds
    setInterval(() => {
        bookmark.classList.add("stretch");
        setTimeout(() => {
            bookmark.classList.remove("stretch");
        }, 500);
    }, 6000 );

    // ...your other bookmark logic (visibility, click, etc.)...
    const snapContainer = document.querySelector(".snap-container");
    const snapSections = document.querySelectorAll(".snap-section");

    function checkBookmarkVisibility() {
        const scrollTop = snapContainer.scrollTop;
        const firstSectionHeight = snapSections[0].offsetHeight;
        if (scrollTop < firstSectionHeight) {
            bookmark.style.opacity = "1";
            bookmark.style.pointerEvents = "auto";
            bookmark.style.visibility = "visible";
        } else {
            bookmark.style.opacity = "0";
            bookmark.style.pointerEvents = "none";
            bookmark.style.visibility = "hidden";
        }
    }

    checkBookmarkVisibility();
    snapContainer.addEventListener("scroll", checkBookmarkVisibility);

    bookmark.addEventListener("click", () => {
        const section2 = snapSections[1];
        section2.scrollIntoView({ behavior: "smooth" });
    });



    // dropdown hamburger (top-right) toggle
    const hamburger = document.querySelector('.hamburger');
    const dropdown = document.getElementById('dropdown-menu');
    if (hamburger && dropdown) {
      function setDropdown(open) {
        hamburger.classList.toggle('open', open);
        dropdown.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
        dropdown.setAttribute('aria-hidden', open ? 'false' : 'true');
      }
      hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        setDropdown(!hamburger.classList.contains('open'));
      });
      // close when clicking outside
      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && !hamburger.contains(e.target)) setDropdown(false);
      });
      // close on Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setDropdown(false);
      });
      // prevent closing when clicking inside the menu
      dropdown.addEventListener('click', (e) => e.stopPropagation());
    }
});