customElements.define(
  "project-highlight",
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const project = document.createElement("p");
      project.textContent =
	"Recently I have been working on a new project, Muserve! It is a " +
	"self hosted, music streaming app that supports multiple users. " +
	"I began this project to bring my vinyl, CD, and cassette tape " +
	"collection with me on the go! Some of my friends were interested in " +
	"using it, so I decided to make it a collaborative streaming service."
      this.appendChild(project);
    }
  }
);
