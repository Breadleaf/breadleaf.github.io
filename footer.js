customElements.define(
  "footer-links",
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const container = document.createElement("div");
      container.classList.add("footer-links");

      const IconButton = (url, classNames) => {
        const a = document.createElement("a");
        a.href = url;
        a.classList.add("open-new");

        const i = document.createElement("i");
        i.classList.add(...classNames);

        a.innerHTML = i.outerHTML;

        container.appendChild(a);
      };

      IconButton("mailto:bkhnapa@gmail.com", [
        "fa-solid",
        "fa-square-envelope",
        "fa-2xl",
      ]);

      IconButton("https://github.com/Breadleaf", [
        "fa-brands",
        "fa-square-github",
        "fa-2xl",
      ]);

      IconButton("https://gitlab.com/Breadleaf", [
        "fa-brands",
        "fa-square-gitlab",
        "fa-2xl",
      ]);

      IconButton("https://www.linkedin.com/in/bradley-k-hutchings/", [
        "fa-brands",
        "fa-linkedin",
        "fa-2xl",
      ]);

      IconButton("posts/rss.xml", ["fa-solid", "fa-square-rss", "fa-2xl"]);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "footer.css";
      this.appendChild(link);

      this.appendChild(container);
    }
  }
);
