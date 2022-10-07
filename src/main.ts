import './style.css'

// const firstListItem = document.querySelector('li')

// generic and works for ANY 'li'
//
// because the event tells us the TARGET
// target is the thing we clicked on
function handleClickSquare(event) {
  const thingCLickedOn = event.target

  thingCLickedOn.textContent = 'X'
}
// firstListItem?.addEventListener('click', handleClickSquare)

const allSquares = document.querySelectorAll('li')

allSquares.forEach((square) =>
  square.addEventListener('click', handleClickSquare)
)
// console.log(allSquares)
