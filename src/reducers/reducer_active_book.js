// only called when action occurs
// state argument is not application state,
// only the state this reducer is responsible for
//do not modify state! always return a fresh object
export default function(state = null, action){
  switch(action.type){
    case 'BOOK_SELECTED':
    return action.payload;
  }
  return state;
}
