class Logo extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.classList.add(
			"flex",
			"justify-center",
			"items-center",
		);

		const a = document.createElement("a");
		a.href = "/";
		a.classList.add(
			"flex",
			"items-center",
			"mx-auto",
			"p-2",
		);

		const icon_wrapper = document.createElement("div");
		icon_wrapper.classList.add(
			"rotate-[340deg]",
			"p-2",
		);

		const bread = document.createElement("i");
		bread.classList.add(
			"fa-solid",
			"fa-bread-slice",
		);
		bread.style.color = "#5e5c64";

		icon_wrapper.appendChild(bread);

		const leaf = document.createElement("i");
		leaf.classList.add(
			"fa-solid",
			"fa-leaf",
		);
		leaf.style.color = "#5e5c64";

		icon_wrapper.appendChild(leaf);

		a.appendChild(icon_wrapper);

		const nameWrapper = document.createElement("div");
		nameWrapper.classList.add(
			"flex",
			"flex-col",
			"sm:flex-row",
		);

		const firstNameSpan = document.createElement("span");
		firstNameSpan.textContent = "Bradley";
		firstNameSpan.classList.add(
			"flex-shrink-0",
			"p-1",
		);

		nameWrapper.appendChild(firstNameSpan);

		const lastNameSpan = document.createElement("span");
		lastNameSpan.textContent = "Hutchings";
		lastNameSpan.classList.add(
			"flex-shrink-0",
			"p-1",
		);

		nameWrapper.appendChild(lastNameSpan);

		a.appendChild(nameWrapper);

		this.appendChild(a);
	}
}

customElements.define("logo-component", Logo);
