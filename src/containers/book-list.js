import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList () {
    return this.props.books.map(el => {
      return (
        <li
        key={el.title}
        onClick={() => this.props.selectBook(el)}
        className='list-group-item'>
        {el.title}
        </li>
      )
    })
  }
  render () {
    return (
      <ul className='list-group col-md-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}


// anything returned from this function will end up as props
// on the BookList container
// so in the cont we can call this.props.selectBook
function mapDispatchToProps(disp) {
  // whenever selectBook is called the result should be passed
  // to all the reducers
  // disp is a function that does that
  return bindActionCreators({selectBook: selectBook}, disp);
}

// promote BookList from component to container,
// it needs to know about the new selectBook method,
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
