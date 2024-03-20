class MetaData extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const metaCharset = document.createElement("meta");
		metaCharset.setAttribute("charset", "UTF-8");

		const metaViewport = document.createElement("meta");
		metaViewport.setAttribute("name", "viewport");
		metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");

		const linkIcons = document.createElement("link");
		linkIcons.setAttribute("href", "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500;700&display=swap");
		linkIcons.setAttribute("rel", "stylesheet");

		const scriptFontAwesome = document.createElement("script");
		scriptFontAwesome.setAttribute("src", "https://kit.fontawesome.com/50746c9988.js");
		scriptFontAwesome.setAttribute("crossorigin", "anonymous");

		const linkStylesheet = document.createElement("link");
		linkStylesheet.setAttribute("rel", "stylesheet");
		linkStylesheet.setAttribute("type", "text/css");
		linkStylesheet.setAttribute("href", "style.css");

		document.head.append(
			metaCharset,
			metaViewport,
			linkIcons,
			scriptFontAwesome,
			linkStylesheet
		);
	}
}

customElements.define("metadata-component", MetaData);
