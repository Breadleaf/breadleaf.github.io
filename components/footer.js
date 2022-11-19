class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<hr>
		<p>Hello World!</p>
		`;
	}
}

customElements.define("footer-component", Footer);
