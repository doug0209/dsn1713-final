

(function () {
    const defaults = {
      offset: 0.15, 
      once: true    
    };
  
    function applyTiming(el) {
      const delay = el.getAttribute("data-aos-delay");
      const duration = el.getAttribute("data-aos-duration");
  
      if (delay) {
        el.style.transitionDelay = parseInt(delay, 10) / 1000 + "s";
      }
      if (duration) {
        el.style.transitionDuration = parseInt(duration, 10) / 1000 + "s";
      }
    }
  
    function init(options = {}) {
      const opts = Object.assign({}, defaults, options);
      const elements = document.querySelectorAll("[data-aos]");
  
      if (!elements.length) return;
  
      // Fallback for very old browsers
      if (!("IntersectionObserver" in window)) {
        elements.forEach((el) => {
          applyTiming(el);
          el.classList.add("aos-animate");
        });
        return;
      }
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target;
  
            if (entry.isIntersecting) {
              applyTiming(el);
              el.classList.add("aos-animate");
              if (opts.once) observer.unobserve(el);
            } else if (!opts.once) {
              el.classList.remove("aos-animate");
            }
          });
        },
        {
          threshold: opts.offset
        }
      );
  
      elements.forEach((el) => observer.observe(el));
    }
  
    // Expose globally
    window.AOSLite = { init };
  })();
  