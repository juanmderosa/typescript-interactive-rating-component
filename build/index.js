"use strict";
const mainContainer = document.getElementById("main-container");
const ratingBtn = document.querySelectorAll(".rating-btn");
const btnSubmit = document.querySelector(".btn-submit");
const ratingContainer = document.querySelector(".rating-container");
const thankYouContainer = document.querySelector(".thankYou-container");
const rateSpan = document.querySelector(".rate-span");
function handleButtonClick(e) {
    const clickedButton = e.target;
    ratingBtn.forEach((button) => {
        if (button === clickedButton) {
            button.classList.add("rating-btn-active");
        }
        else {
            button.classList.remove("rating-btn-active");
        }
    });
}
ratingBtn.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const rating = document.querySelector(".rating-btn-active");
    if (rating) {
        ratingContainer.classList.remove("rating-container-show");
        ratingContainer.classList.add("rating-container");
        thankYouContainer.classList.remove("thankYou-container");
        thankYouContainer.classList.add("thankYou-container-show");
        rateSpan.innerText = rating.value;
    }
});
