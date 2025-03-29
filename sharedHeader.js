(function () {
  const head = document.head;

  const Link = (rel, href, crossorigin = false) => {
    const link = document.createElement("link");
    link.href = href;
    link.rel = rel;
    if (typeof crossorigin === "boolean" && crossorigin)
      link.setAttribute("crossorigin", "");
    if (typeof crossorigin === "string")
      link.setAttribute("crossorigin", crossorigin);
    head.appendChild(link);
  };

  // Google Fonts: Init
  Link("preconnect", "https://fonts.googleapis.com");
  Link("preconnect", "https://fonts.gstatic.com", true);

  // Google Fonts: Zen Maru Gothic
  Link(
    "stylesheet",
    "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;900&display=swap"
  );

  // Google Fonts: Rampart One
  Link(
    "stylesheet",
    "https://fonts.googleapis.com/css2?family=Rampart+One&display=swap"
  );

  // Bootstrap
  Link(
    "stylesheet",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
    "anonymous"
  );
  const bootstrapScript = document.createElement("script");
  bootstrapScript.src =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
  bootstrapScript.integrity =
    "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
  bootstrapScript.crossOrigin = "anonymous";
  head.appendChild(bootstrapScript);

  // Font Awesome
  const fontAwesomeScript = document.createElement("script");
  fontAwesomeScript.src = "https://kit.fontawesome.com/a395431cf2.js";
  fontAwesomeScript.crossOrigin = "anonymous";
  head.appendChild(fontAwesomeScript);

  // My styles
  Link("stylesheet", "style.css");
  Link("stylesheet", "theme.css");
})();
