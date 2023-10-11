'use strict';

import Show from './show.js';
import Api from './api.js';

// // MARK: DAT
const shows = [
	new Show(1630986400000, "Ronald Lane", "San Francisco, CA"),
	new Show(1632282400010, "Pier 3 East", "San Francisco, CA"),
	new Show(1634356000010, "View Lounge", "San Francisco, CA"),
	new Show(1636256800010, "Hyatt Agency", "San Francisco, CA"),
	new Show(1637984800010, "Moscow Center", "San Francisco, CA"),
	new Show(1639626400010, "Press Club", "San Francisco, CA"),
];

// MARK: FUNCTIONS
function displayShowsHeader() {
	let showsList = document.querySelector(".shows__container");
	let card = document.createElement("article");
	card.classList.add("shows__title-card");

	let title1 = document.createElement("p");
	title1.classList.add("shows__card-title--header");
	let title2 = document.createElement("p");
	title2.classList.add("shows__card-title--header");
	let title3 = document.createElement("p");
	title3.classList.add("shows__card-title--header");
	let filler = document.createElement("div");
	filler.classList.add("shows__title-filler");

	title1.innerText = "Date";
	title2.innerText = "Venue";
	title3.innerText = "Location";

	card.appendChild(title1);
	card.appendChild(title2);
	card.appendChild(title3);
	card.appendChild(filler);

	showsList.appendChild(card);
}

function displayShow(show) {
	let showsList = document.querySelector(".shows__container");
	let card = document.createElement("article");
	card.classList.add("shows__card");

	let dateT = document.createElement("p");
	dateT.classList.add("shows__card-title");
	let venueT = document.createElement("p");
	venueT.classList.add("shows__card-title");
	let locationT = document.createElement("p");
	locationT.classList.add("shows__card-title");
	let date = document.createElement("p");
	date.classList.add("shows__card-date");
	let venue = document.createElement("p");
	venue.classList.add("shows__card-text");
	let location = document.createElement("p");
	location.classList.add("shows__card-text");

	let btn = document.createElement("button");
	btn.classList.add("btn");
	btn.classList.add("shows__card-btn");
	let divider = document.createElement("div");
	divider.classList.add("shows__divider");

	dateT.innerText = "Date";
	date.innerText = show.getDate();
	venueT.innerText = "Venue";
	venue.innerText = show.getVenue();
	locationT.innerText = "Location";
	location.innerText = show.getLocation();
	btn.innerText = "Buy Tickets";

	card.appendChild(dateT);
	card.appendChild(date);
	card.appendChild(venueT);
	card.appendChild(venue);
	card.appendChild(venue);
	card.appendChild(location);
	card.appendChild(btn);

	showsList.appendChild(card);
	showsList.appendChild(divider);
}

function clearList() {
	let items = document.querySelectorAll(".shows__card");
	for (let i = 0; i < items.length; i++) items[i].remove();
	let dividers = document.querySelectorAll(".shows__divider");
	for (let i = 0; i < dividers.length; i++) dividers[i].remove();
	let header = document.querySelector(".shows__title-card");
	header.remove();
}

// MARK: MAIN
// clearList();
var selectedRow = null;
displayShowsHeader();
for (let i = 0; i < shows.length; i++) displayShow(shows[i]);
let rows = document.querySelectorAll(".shows__card");
for (let i = 0; i < rows.length; i++) {
	rows[i].addEventListener("click", function (e) {
		if (selectedRow != null) selectedRow.style.backgroundColor = ""; // revert to the original style
		selectedRow = rows[i];
		selectedRow.style.backgroundColor = "#E1E1E1";
	});
}
