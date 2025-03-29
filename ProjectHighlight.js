customElements.define(
  "project-highlight",
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const project = document.createElement("p");
      project.textContent =
        "Recently I have been working with C, Golang, and Lua, " +
        "which have culminated in my latest project, LuaNet, " +
        "a project that reimagines the modern web using Lua instead of JavaScript.";
      this.appendChild(project);
    }
  }
);
