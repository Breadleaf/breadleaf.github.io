class SideNav extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<style>
		.sidenav {
			background-color: #212230;
			overflow-x: hidden;
			transition: 0.5s;
			position: fixed;
			height: 100%;
			z-index: 1;
			width: 0%;
			left: 0;
			top: 0;
		}

		.sidenav #close {
			transition: all 0.3s ease;
			/*position: absolute;*/
			padding-top: 20px;
			margin-left: 220px;
			color: #7D6B91;
		}

		.sidenav #close:hover {
			color: #989FCE;
		}

		.sidenav a {
			padding: 16px 8px 8px 16px;
			text-decoration: none;
			display: block;
		}

		@media screen and (max-height: 450px) {
			.sidenav {
				padding-top: 15px;
			}

			.sidenav a {
				font-weight: 300;
			}
		}
		</style>

		<div id="sideNav" class="sidenav">
			<i id="close" onclick="closeNav()" class="fa-regular fa-circle-xmark"></i>
			<a href="index.html">Home</a>
			<a href="about.html">About</a>
			<a href="contact.html">Contact</a>
			<a href="blog.html">Blog</a>
		</div>
		`;
	}
}

function openNav() {
	document.getElementById("sideNav").style.width = "300px";
}

function closeNav() {
	document.getElementById("sideNav").style.width = "0";
}

customElements.define("sidenav-component", SideNav);
