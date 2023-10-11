'use strict';

class Show {
	#timestamp = 0;
	#venue = "Venue";
	#location = "Location";

	constructor(timestamp, venue, location) {
		this.#timestamp = timestamp;
		this.#venue = venue;
		this.#location = location;
	}

	getVenue() {
		return this.#venue;
	}

	getLocation() {
		return this.#location;
	}

	getDate() {
		let date = new Date(this.#timestamp);

		let day = date.toLocaleString("default", { weekday: "short" });
		let m = date.toLocaleString("default", { month: "short" });
		const d = date.getDate().toString().padStart(2, "0");
		const y = date.getFullYear();

		return `${day} ${m} ${d} ${y}`;
	}
}


export default Show;