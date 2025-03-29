(function () {
  function applyTheme() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    document.body.classList.toggle("dark-theme", prefersDarkScheme.matches);
  }

  function initializeTheme() {
    applyTheme();
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.addEventListener) {
      prefersDarkScheme.addEventListener("change", applyTheme);
    } else if (prefersDarkScheme.addListener) {
      prefersDarkScheme.addListener(applyTheme);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeTheme);
  } else {
    initializeTheme();
  }
})();
