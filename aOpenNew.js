(function () {
  const elements = document.querySelectorAll(".open-new");
  elements.forEach((element) => {
    const elementNodeName = element.nodeName;
    if (!elementNodeName === "A") {
      console.log(
        `aOpenNew.js : error : .open-new used on invalid element : ${element.nodeName}`
      );
      return;
    } else {
      element.addEventListener("click", (event) => {
        event.preventDefault();
        const href = element.getAttribute("href");
        if (href.startsWith("mailto:")) {
          window.location.href = href;
        } else {
          window.open(href, "_blank").focus();
        }
      });
    }
  });
})();
