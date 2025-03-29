customElements.define(
  "accordion-container",
  class Accordion extends HTMLElement {
    static counter = 0;

    constructor() {
      super();
    }

    connectedCallback() {
      const accordionId = "accordion-" + Accordion.counter;
      Accordion.counter++;

      const container = document.createElement("div");
      container.classList.add("accordion");
      container.id = accordionId;

      const children = Array.from(this.children);
      children.forEach((child, index) => {
        const title = child.getAttribute("title") || `Item ${index + 1}`;
        const content = child.innerHTML;

        const itemId = `${accordionId}-item-${index}`;
        const headerId = `${itemId}-header`;
        const collapseId = `${itemId}-collapse`;

        const accordionItem = document.createElement("div");
        accordionItem.classList.add("accordion-item");

        const header = document.createElement("h2");
        header.classList.add("accordion-header");
        header.id = headerId;

        const button = document.createElement("button");
        button.classList.add("accordion-button", "collapsed");
        button.type = "button";
        button.setAttribute("data-bs-toggle", "collapse");
        button.setAttribute("data-bs-target", `#${collapseId}`);
        button.setAttribute("aria-controls", collapseId);
        button.textContent = title;

        header.appendChild(button);
        accordionItem.appendChild(header);

        const collapseDiv = document.createElement("div");
        collapseDiv.id = collapseId;
        collapseDiv.classList.add("accordion-collapse", "collapse");
        collapseDiv.setAttribute("aria-labeledby", headerId);
        collapseDiv.setAttribute("data-bs-parent", `#${accordionId}`);

        const bodyDiv = document.createElement("div");
        bodyDiv.classList.add("accordion-body");
        bodyDiv.innerHTML = content;

        collapseDiv.appendChild(bodyDiv);
        accordionItem.appendChild(collapseDiv);
        container.appendChild(accordionItem);
      });

      this.innerHTML = "";
      this.appendChild(container);
    }
  }
);
