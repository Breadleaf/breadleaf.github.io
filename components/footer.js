class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<hr>
		<p class="small_text">It is my goal to learn about as much as I can while I can!</p>
		`;
	}
}

customElements.define("footer-component", Footer);
