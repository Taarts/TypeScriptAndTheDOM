import './style.css'

let currentPlayer: 'X' | 'O' = 'X'

// Defines a method for us to handle the click
function handleClickSquare(event: MouseEvent) {
  // Get the target of the click
  const thingClickedOn = event.target

  // If the thing clicked on is an LI Element
  // - This does several things:
  // - 1. Checks that the target isn't null
  // - 2. Let's TypeScript know that *inside* this if statement
  //      the thingClickedOn is an LI element, and thus we can
  //      change its textContent
  if (thingClickedOn instanceof HTMLLIElement) {
    thingClickedOn.textContent = currentPlayer

    thingClickedOn.classList.add('taken')
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
  }
}

const allSquares = document.querySelectorAll('li')

allSquares.forEach((square) =>
  square.addEventListener('click', handleClickSquare)
)
