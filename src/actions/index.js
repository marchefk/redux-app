export function selectBook(book) {
  // selectBook is an action creator,
  // it needs to return an action - an object with property 'type'
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
};
//payload is more information about the action
