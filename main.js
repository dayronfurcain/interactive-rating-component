const ratingState = document.getElementById('rating_state')
const thankYouState = document.getElementById('thank_you_state')
const number = document.getElementById('number')

let rate = null

document.addEventListener('click', (event) => {
  if (event.target.matches('.rating-state__number')) {
    rate = event.target.textContent
  }

  if (event.target.matches('.rating-state__button') && rate) {
    number.innerHTML = rate
    ratingState.classList.add('hidden')
    thankYouState.classList.remove('hidden')
  }
})
