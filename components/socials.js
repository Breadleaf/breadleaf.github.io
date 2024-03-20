class Socials extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.classList.add(
			"flex",
			"flex-col",
			"sm:flex-row",
			"justify-center",
			"items-center",
			"p-2",
		);

		const left_wrapper = document.createElement("div");
		left_wrapper.classList.add(
			"flex",
			"flex-row",
			"justify-center",
			"items-center",
		);

		const right_wrapper = document.createElement("div");
		right_wrapper.classList.add(
			"flex",
			"flex-row",
			"justify-center",
			"items-center",
		);

		const github = document.createElement("i");
		github.classList.add(
			"fa-brands",
			"fa-github",
			"p-2",
		);
		github.style.color = "#5e5c64";
		github.addEventListener("click", () => {
			window.open("https://github.com/breadleaf");
		});

		left_wrapper.appendChild(github);

		const gitlab = document.createElement("i");
		gitlab.classList.add(
			"fa-brands",
			"fa-gitlab",
			"p-2",
		);
		gitlab.style.color = "#5e5c64";
		gitlab.addEventListener("click", () => {
			window.open("https://gitlab.com/breadleaf");
		}

		left_wrapper.appendChild(gitlab);

		const linkedin = document.createElement("i");
		linkedin.classList.add(
			"fa-brands",
			"fa-linkedin",
			"p-2",
		);
		linkedin.style.color = "#5e5c64";
		linkedin.addEventListener("click", () => {
			window.open(
				"https://www.linkedin.com/in/bradley-k-hutchings/",
			);
		});

		left_wrapper.appendChild(linkedin);

		const twitter = document.createElement("i");
		twitter.classList.add(
			"fa-brands",
			"fa-x-twitter",
			"p-2",
		);
		twitter.style.color = "#5e5c64";
		twitter.addEventListener("click", () => {
			window.open("https://twitter.com/breadleaf_");
		});

		right_wrapper.appendChild(twitter);

		const instagram = document.createElement("i");
		instagram.classList.add(
			"fa-brands",
			"fa-instagram",
			"p-2",
		);
		instagram.style.color = "#5e5c64";
		instagram.addEventListener("click", () => {
			window.open("https://www.instagram.com/salt_breadleaf/");
		});

		right_wrapper.appendChild(instagram);

		const rss = document.createElement("i");
		rss.classList.add(
			"fa-solid",
			"fa-rss",
			"p-2",
		);
		rss.style.color = "#5e5c64";
		rss.addEventListener("click", () => {
			window.open("/rss.xml");
		});

		right_wrapper.appendChild(rss);

		this.appendChild(left_wrapper);
		this.appendChild(right_wrapper);
	}
}

customElements.define("socials-component", Socials);
