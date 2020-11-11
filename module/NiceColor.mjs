export class NiceColor {

	constructor() {
		this.hex = [
			null, // R
			null, // G
			null  // B
		],
		this.selected = this.randomDec(3)
	}

	// 8-bit
	randomHex() {
		return [...Array(2)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
	}

	randomDec(ceil) {
		return Math.floor(Math.random() * ceil) + 0;
	}

	// Generate a 32-bit hexadecimal RGB string
	generate() {
		let binary = this.randomDec(2);

		this.hex[this.selected] = this.randomHex();

		this.hex.forEach((value,index) => {
			// Continue if index is our special value
			if(this.hex[index] !== null) {
				return;
			}

			// Assign index and ignore if(binary) next run
			if(binary) {
				this.hex[index] = "16";
				binary = 0;
				return;
			}

			// Assign index and enter if(binary) next run
			binary = 1;
			this.hex[index] = "ff";
		})
	}

	// Generate and return HEX-color (#RRGGBB)
	get() {
		this.generate();

		return "#" + this.hex.join("");
	}

}
// Victor Westerlund