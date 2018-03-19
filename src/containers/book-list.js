import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
  renderList () {
    return this.props.books.map(el => {
      return (
        <li key={el.title} className='list-group-item'>{el.title}</li>
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
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
