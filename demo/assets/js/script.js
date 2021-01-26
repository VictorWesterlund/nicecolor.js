import { NiceColor } from "./modules/NiceColor.mjs";

class Main {

	static element = document.getElementsByTagName("main")[0];

	static setTheme(hexcolor) {
		if(hexcolor) {
			hexcolor = "#" + hexcolor;
		}
		const themeColor = new NiceColor();
		const color = hexcolor || themeColor.get(); // Generate a color if hexcolor is strict falsey

		// Update parent theme-color and readyState if we can
		try {
			parent.hook_setTheme(color);
			parent.hook_ready();
		} catch {
			// Looks like we're not contained
		}

		document.documentElement.style.setProperty("--theme-color",color); // Set CSS :root variable
		document.getElementById("themeColor").innerText = color;
	}

	static getParentTheme() {
		const searchParams = new URLSearchParams(window.location.search);

		Main.element.classList.add("active");

		if(searchParams.has("color")) {
			return searchParams.get("color");
		}

		return false;
	}

	static init() {
		Main.setTheme(Main.getParentTheme());

		// Let me do something before I'm closed by the parent (1000ms)
		window.hook_close = () => {
			Main.element.classList.remove("active");
		}
	}

}

Main.init();