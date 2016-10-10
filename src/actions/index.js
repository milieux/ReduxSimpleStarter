// an ActionCreator is just a function that returns action
export function selectBook(book) {
  // selectBook is an actionCreator, it needs to return an action
  // as an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
