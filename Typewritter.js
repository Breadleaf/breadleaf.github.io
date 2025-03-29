customElements.define(
  "type-writter",
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const typewritter = document.createElement("span");
      typewritter.classList.add("typewritter");

      this.appendChild(typewritter);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "Typewritter.css";
      this.appendChild(link);

      const texts = [
        "Software Engineer",
        "Lifelong Learner",
        "Linux Enthusiast",
        "Musician",
        "Leader and Team Player",
        "Home Cook",
      ];

      let textIndex = 0;
      let charIndex = 0;

      const typeSpeed = 80;
      const eraseSpeed = 50;
      const delayBetweenTexts = 1000;

      const writeText = () => {
        if (charIndex < texts[textIndex].length) {
          typewritter.innerHTML += texts[textIndex].charAt(charIndex);
          charIndex++;
          setTimeout(writeText, typeSpeed);
        } else {
          setTimeout(deleteText, delayBetweenTexts);
        }
      };

      const deleteText = () => {
        if (charIndex > 0) {
          typewritter.innerHTML = texts[textIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(deleteText, eraseSpeed);
        } else {
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(writeText, delayBetweenTexts);
        }
      };

      writeText();
    }
  }
);
