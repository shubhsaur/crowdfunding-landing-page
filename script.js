const hamMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");
const nav = document.querySelector("nav");
const modalSelectionButton = document.querySelector(".mastercraft .btns button");
const modalSelectionMenu = document.querySelector(".modal-selection");
const closeModalSelection = document.querySelector(".modal-selection .header svg");
const radioBtn = document.querySelectorAll('input[type="radio"]');
const modal = document.querySelectorAll(".modal-selection .modal");
const pledge = document.querySelectorAll(".pledge-wrapper");
const pledgeContinueBtn = document.querySelectorAll(".modal-selected-pledge .pledge-input button");
const pledgeInput = document.querySelectorAll(".modal-selected-pledge .pledge-input input");
const modalCompleted = document.querySelector(".modal-completed");
const modalSelection = document.querySelector(".modal-selection");
const gotitBtn = document.querySelector(".modal-final-btn");
const bookmark = document.querySelector(".bookmark");
const bookmarkText = document.querySelector(".bookmark h3");
const bookmarkIcon = document.querySelector(".bookmark .bookmark-btn");
const rewardBambooBtn = document.querySelector(".modal.bamboo button.reward");
const rewardBlackEditionBtn = document.querySelector(".modal.black-edition button.reward");

// Function to show navbar

hamMenu.addEventListener("click", displayNav);
closeMenu.addEventListener("click", displayNav);

function displayNav() {
	if (nav.classList.contains("active-nav")) {
		hamMenu.style.display = "block";
		closeMenu.style.display = "none";
		nav.style.display = "none";
		nav.classList.remove("active-nav");
	} else {
		hamMenu.style.display = "none";
		closeMenu.style.display = "block";
		nav.style.display = "flex";
		nav.classList.add("active-nav");
	}
}

// Function to show Modal Selection Menu

modalSelectionButton.addEventListener("click", () => {
	modalSelectionMenu.style.display = "flex";
});

closeModalSelection.addEventListener("click", () => {
	modalDefaultState();
	modalSelectionMenu.style.display = "none";
});

//Function for default modal state

function modalDefaultState() {
	radioBtn.forEach((radio) => (radio.checked = "false"));

	for (const m of modal) {
		for (const pInput of pledgeInput) {
			pInput.value = null;
		}
		for (const p of pledge) {
			p.style.display = "none";
		}
		m.classList.remove("modal-active");
	}
}

//Function for checked radio

radioBtn.forEach((radio) =>
	radio.addEventListener("click", () => {
		let radioValue = radio.value;
		if (radio.checked) {
			for (const m of modal) {
				if (m.classList.contains(radioValue)) {
					m.classList.add("modal-active");
					for (const p of pledge) {
						if (p.classList.contains(`pledge-${radioValue}`)) {
							p.style.display = "block";
							for (const c of pledgeContinueBtn) {
								if (c.classList.contains(`pledge-continue-${radioValue}`)) {
									c.addEventListener("click", () => {
										modalSelection.style.display = "none";
										modalCompleted.style.display = "flex";
										// const initialStock = document.querySelectorAll(`.modal-selection div.modal.${radioValue} h2`);
										// let numberPattern = /\d+/g;
										// for (const i of initialStock) {
										// 	let leftStocks = i.textContent.match(numberPattern)[0];
										// 	leftStocks = leftStocks - 1;
										// 	i.innerHTML = `<h2>${leftStocks} <span>left</span></h2>`;
										// 	break;
										// }
									});
								}
							}
						} else {
							p.style.display = "none";
						}
					}
				} else {
					m.classList.remove("modal-active");
				}
			}
		}
	})
);

//Function to close thank you box

gotitBtn.addEventListener("click", () => {
	modalCompleted.style.display = "none";
	modalDefaultState();
});

//Bookmark Active State

bookmark.addEventListener("click", () => {
	bookmarkIcon.classList.toggle("active-bookmark");
	bookmarkText.classList.toggle("active-bookmark-text");
	if (bookmarkText.classList.contains("active-bookmark-text")) {
		bookmarkText.textContent = "Bookmarked";
	} else {
		bookmarkText.textContent = "Bookmark";
	}
});

//Reward button

rewardBambooBtn.addEventListener("click", () => {
	modalSelection.style.display = "flex";
	for (const radio of radioBtn) {
		for (const m of modal) {
			for (const p of pledge) {
				for (const c of pledgeContinueBtn) {
					if (
						radio.value === "bamboo" &&
						m.classList.contains("bamboo") &&
						p.classList.contains(`pledge-bamboo`) &&
						c.classList.contains(`pledge-continue-bamboo`)
					) {
						radio.checked = "true";

						m.classList.add("modal-active");
						p.style.display = "block";
						c.addEventListener("click", () => {
							modalSelection.style.display = "none";
							modalCompleted.style.display = "flex";
						});
					}
				}
			}
		}
	}
});

rewardBlackEditionBtn.addEventListener("click", () => {
	modalSelection.style.display = "flex";
	for (const radio of radioBtn) {
		for (const m of modal) {
			for (const p of pledge) {
				for (const c of pledgeContinueBtn) {
					if (
						radio.value === "black-edition" &&
						m.classList.contains("black-edition") &&
						p.classList.contains(`pledge-black-edition`) &&
						c.classList.contains(`pledge-continue-black-edition`)
					) {
						radio.checked = "true";	
						m.classList.add("modal-active");
						p.style.display = "block";
						c.addEventListener("click", () => {
							modalSelection.style.display = "none";
							modalCompleted.style.display = "flex";
						});
					}
				}
			}
		}
	}
});
