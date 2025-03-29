customElements.define(
  "nav-bar",
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const barContainer = document.createElement("div");
      barContainer.id = "navContainer";

      [
        ["home", "/"],
        ["blog", "blog.html"],
        ["resume", "resume.html"],
      ].forEach(([title, href]) => {
        const div = document.createElement("div");
        div.classList.add("navButton");

        const a = document.createElement("a");
        a.href = href;
        a.textContent = title;

        a.addEventListener("mouseenter", () => {
          const angle = Math.random() * 20 - 10;
          a.style.transform = `rotate(${angle}deg)`;
        });

        a.addEventListener("mouseleave", () => {
          a.style.transform = "";
        });

        div.appendChild(a);
        barContainer.appendChild(div);
      });

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "navBar.css";
      this.appendChild(link);

      this.appendChild(barContainer);
    }
  }
);
