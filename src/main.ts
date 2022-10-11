import './style.css'
// | this was const
// v                vvvvvvvv defines the string can ONLY be these two choices
let currentPlayer: 'X' | 'O' = 'X' //first click is always an 'X'
let moveCounter = 0
// const firstListItem = document.querySelector('li')
// generic and works for ANY 'li'
//
// because the event tells us the TARGET
// target is the thing we clicked on
function handleClickSquare(event: MouseEvent) {
  // console.log(event)
  event.stopPropagation() //after this handler, stop the bubbling up the chain

  event.preventDefault() // Don't do you'r natural behaviour... override
  const thingClickedOn = event.target

  // If the thing clicked on is an LI Element
  // - This does several things:
  // - 1. Checks that the target isn't null
  // - 2. Let's TypeScript know that *inside* this if statement
  //      the thingClickedOn is an LI element, and thus we can
  //      change its textContent
  if (thingClickedOn instanceof HTMLLIElement) {
    if (thingClickedOn.classList.contains('taken')) {
      console.log('No way José')
      return //<-- prevents the program from moving forward & gives us a msg in the console IF
      // clicked on when the square is already populated
    }
    moveCounter++ //could be for adding to scoreboard
    const header = document.querySelector('h1')
    if (header instanceof HTMLHeadingElement) {
      header.textContent = `Move ${moveCounter} of Tic Tac Toe`
    }
    thingClickedOn.textContent = currentPlayer //<--- this was 'X

    // add class="taken" to show the user = "cursor: not allowed" in
    // they can't select this element again
    thingClickedOn.classList.add('taken')

    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
  }
}
// firstListItem?.addEventListener('click', handleClickSquare)

// const allSquares = document.querySelectorAll('li')

// allSquares.forEach((square) =>
//   square.addEventListener('click', handleClickSquare)
// )
// vv event targets the "parent" of the unordered list not li's
const gameBoard = document.querySelector('ul')

if (gameBoard instanceof HTMLUListElement) {
  gameBoard?.addEventListener('click', handleClickSquare)
}
