const mainContainer = document.getElementById("main-container") as HTMLElement
const ratingBtn: NodeListOf<HTMLInputElement> = document.querySelectorAll(".rating-btn") 
const btnSubmit = document.querySelector(".btn-submit") as HTMLInputElement
const ratingContainer = document.querySelector(".rating-container") as HTMLElement
const thankYouContainer = document.querySelector(".thankYou-container") as HTMLElement
const rateSpan = document.querySelector(".rate-span") as HTMLElement

interface RatingButton extends HTMLInputElement{
  value: string
}

function handleButtonClick(e: MouseEvent) {
    const clickedButton = e.target as RatingButton;
  
    ratingBtn.forEach((button: RatingButton) => {
      if (button === clickedButton) {
        button.classList.add("rating-btn-active");
      } else {
        button.classList.remove("rating-btn-active");
      }
    });
  }
  
  ratingBtn.forEach((button: RatingButton) => {
    button.addEventListener("click", handleButtonClick);
  });

  btnSubmit.addEventListener("click", (e: MouseEvent)=>{
    e.preventDefault()
    const rating = document.querySelector(".rating-btn-active") as RatingButton;
    if (rating) {
        ratingContainer.classList.remove("rating-container-show");
        ratingContainer.classList.add("rating-container");
        thankYouContainer.classList.remove("thankYou-container");
        thankYouContainer.classList.add("thankYou-container-show");
        rateSpan.innerText = rating.value
      }
  })
