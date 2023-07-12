/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
(function () {
  const sideScrollers = Array.from(
    document.querySelectorAll(".side-scrolling")
  );
  const toggleOverflowClass = (elem) => {
    elem.classList.toggle("overflowing", elem.scrollWidth > elem.clientWidth);
  };

  for (let ss of sideScrollers) {
    if ("ResizeObserver" in window) {
      new ResizeObserver((entries) => {
        toggleOverflowClass(entries[0].target);
      }).observe(ss);
    }

    if ("MutationObserver" in window) {
      new MutationObserver((entries) => {
        toggleOverflowClass(entries[0].target);
      }).observe(ss, { childList: true });
    }
  }
})();
