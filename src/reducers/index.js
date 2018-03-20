import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ReducerActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ReducerActiveBook
});

export default rootReducer;
