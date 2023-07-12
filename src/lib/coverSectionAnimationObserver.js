/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
(function () {
  if ("IntersectionObserver" in window) {
    const targets = Array.from(document.querySelectorAll(".covering"));
    targets.forEach((t) => t.setAttribute("data-observe", ""));
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        entry.target.setAttribute("data-visible", entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(callback);
    targets.forEach((t) => observer.observe(t));
  }
})();
