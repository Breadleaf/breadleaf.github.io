customElements.define(
  "resume-section",
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const title = this.getAttribute("title");
      const iconClasses = this.getAttribute("icon")?.split(" ") ?? [];

      this.innerHTML = "";

      const span = document.createElement("span");
      const icon = document.createElement("i");
      icon.classList.add(...iconClasses);
      const heading = document.createElement("h2");
      heading.textContent = title;
      span.append(icon, heading);

      const hr = document.createElement("hr");
      const br = document.createElement("br");
      this.append(span, hr, br);

      if (!document.head.querySelector('link[href="ResumeSection.css"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "ResumeSection.css";
        document.head.appendChild(link);
      }
    }
  }
);
