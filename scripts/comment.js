'use strict';

class Comment {
	#username = "Username";
	#timestamp = 0;
	#comment = "Comment";

	constructor(name, time, comm) {
		this.#username = name;
		this.#timestamp = time;
		this.#comment = comm;
	}

	getUsername() {
		return this.#username;
	}

	getTimestamp() {
		return this.#timestamp;
	}

	getComment() {
		return this.#comment;
	}

	getDDMMYYYY() {
		const date = new Date(this.#timestamp);

		const m = (date.getMonth() + 1).toString().padStart(2, "0");
		const d = date.getDate().toString().padStart(2, "0");
		const y = date.getFullYear();

		return `${m}/${d}/${y}`; // must use backticks
	}

	apiSerialize(){
		return{
			name: this.#username,
			comment: this.#comment,
		}
	}
}

export default Comment;