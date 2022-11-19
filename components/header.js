class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<style>
		#header {
			display: flex;
			height: 100%;
			width: 100%;
		}

		#header_left {
			text-align: left;
			width: 50%;
		}

		#header_right {
			width: 50%;
		}

		#icon_pannel {
			margin-top: 10px;
			float: right;
		}

		#social_button {
			transition: all 0.3s ease;
			color: #7D6B91;
		}

		#social_button:hover {
			color: #989FCE;
		}

		#name {
			transition: all 0.3s ease;
			text-decoration: none;
			font-weight: 700;
			font-size: 26px;
			color: #7D6B91;
		}

		#name:hover {
			text-decoration: none;
			font-weight: 700;
			font-size: 26px;
			color: #989FCE;
		}
		</style>

		<div id="header">
			<div id="header_left">
				<a href="index.html" id="name" class="big_text">Bradley Hutchings</a>
			</div>
			<div id="header_right">
				<div id="icon_pannel">
					<i id="social_button" onclick="openLink('https://linkedin.com/in/bradley-k-hutchings')" class="fa-brands fa-linkedin" fa-7x></i>
					<i id="social_button" onclick="openLink('https://stackoverflow.com/users/18411475/breadleaf')" class="fa-brands fa-stack-overflow" fa-7x></i>
					<i id="social_button" onclick="openLink('https://github.com/breadleaf')" class="fa-brands fa-square-github fa-7x:"></i>
					<i id="social_button" onclick="openLink('https://gitlab.com/breadleaf')" class="fa-brands fa-square-gitlab" fa-7x></i>
					<i id="social_button" onclick="openNav()" class="fa-solid fa-bars" fa-7x></i>
				</div>
			</div>
		</div>

		<hr>
		`;
	}
}

function openLink(url) {
	window.open(url, "_blank");
}

customElements.define("header-component", Header);
