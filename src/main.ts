import './style.css'

// const firstListItem = document.querySelector('li')

// generic and works for ANY 'li'
//
// because the event tells us the TARGET
// target is the thing we clicked on
function handleClickSquare(event: MouseEvent) {
  const thingCLickedOn = event.target

  // If the thing clicked on is an LI Element
  // - This does several things:
  // - 1. Checks that the target isn't null
  // - 2. Let's TypeScript know that *inside* this if statement
  //      the thingClickedOn is an LI element, and thus we can
  //      change its textContent
  if (thingCLickedOn instanceof HTMLLIElement) {
    thingCLickedOn.textContent = 'X'
  }
}
// firstListItem?.addEventListener('click', handleClickSquare)

const allSquares = document.querySelectorAll('li')

allSquares.forEach((square) =>
  square.addEventListener('click', handleClickSquare)
)
// console.log(allSquares)
