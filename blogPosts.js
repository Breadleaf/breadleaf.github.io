import sourceMap from "./posts/sourceMap.js";

customElements.define(
  "blog-posts",
  class extends HTMLElement {
    connectedCallback() {
      const container = document.createElement("div");
      container.classList.add("row", "g-4"); // Use Bootstrap's grid gap utility

      const posts = sourceMap();
      posts.forEach(([title, date, preview, htmlFilePath]) => {
        const col = document.createElement("div");
        col.classList.add(
          "col-12",
          "col-sm-6",
          "col-md-4",
          "col-lg-3",
          "d-flex" // Use flexbox for equal height
        );

        const card = document.createElement("div");
        card.classList.add("post", "card", "w-100");
        card.addEventListener("click", () => {
          window.location.href = htmlFilePath;
        });

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "d-flex", "flex-column");

        const titleEl = document.createElement("h2");
        titleEl.textContent = title;
        titleEl.classList.add("card-title", "post-title");
        cardBody.appendChild(titleEl);

        const dateEl = document.createElement("p");
        dateEl.textContent = date;
        dateEl.classList.add("card-text", "date");
        cardBody.appendChild(dateEl);

        const previewEl = document.createElement("p");
        previewEl.textContent = preview;
        previewEl.classList.add("card-text", "preview", "flex-grow-1");
        cardBody.appendChild(previewEl);

        card.appendChild(cardBody);
        col.appendChild(card);
        container.appendChild(col);
      });

      this.appendChild(container);
    }
  }
);
