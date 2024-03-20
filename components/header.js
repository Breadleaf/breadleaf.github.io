class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.classList.add(
			"flex",
			"justify-center",
			"items-center",
			"p-2",
		);

		const logo = document.createElement("logo-component");

		this.appendChild(logo);

		const socials = document.createElement("socials-component");

		this.appendChild(socials);
	}
}

customElements.define("header-component", Header);
