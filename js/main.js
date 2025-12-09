document.addEventListener("DOMContentLoaded", () => {
    // Init custom AOS if loaded
    if (window.AOSLite && typeof window.AOSLite.init === "function") {
      window.AOSLite.init({
        offset: 0.2, // how much of the element must be visible
        once: true   // only animate the first time
      });
    }
  
    // Example: live label for any range inputs (if you add them later)
    document.querySelectorAll('input[type="range"]').forEach((range) => {
      const label = range.nextElementSibling;
      range.addEventListener("input", () => {
        if (label) label.textContent = range.value;
      });
    });
  
    // Example: buttons that scroll to sidebar (if you add data-jump="sidebar")
    document.querySelectorAll('[data-jump="sidebar"]').forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelector("aside")?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  });
  