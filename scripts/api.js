'use strict';
import Comment from './comment.js';
import Show from './show.js';

class Api {
	// avoided constructor with the API key as an argument intentionally
	// it's redundant to declare the api key in every single JS file over again
	// down the line it'd be in a .env file
	// you can see my knowledge of constructors demonstrated in comment.js and show.js
	// thanks!
	#apiKey = "17185a63-657e-4c5b-8012-d36a55027788";
	#baseURL = "https://project-1-api.herokuapp.com";

	// MARK: POST
	postComment(comment) {
		const url = this.#baseURL + "/comments";

		return axios.post(url, comment, {
			headers:{
				'Content-Type': 'application/json',
			},
			params: {
				api_key: this.#apiKey,
			},
		})
		.then(response =>{
			console.log(response.data);
		})
		.catch(error =>{
			console.log(error.message);
		});
	}

	// MARK: GET
	getComments() {
        const url = this.#baseURL + "/comments";
		return axios
			.get(url, {
				params: {
					api_key: this.#apiKey,
				},
			})
			.then(response => {
                return(response.data);
			})
			.catch(errur => {
				console.error(errur.message);
			});
	}

	getShows() {
        const url = this.#baseURL + "/showdates";
		return axios
			.get(url, {
				params: {
					api_key: this.#apiKey,
				},
			})
			.then(response => {
				return(response.data);
			})
			.catch(errur => {
				console.error(errur.message);
			});
	}
}

export default Api;