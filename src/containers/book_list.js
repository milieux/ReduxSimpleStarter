import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={ book.title }
            className="list-group-item"
            onClick={ () => this.props.selectBook(book) }>
        { book.title }
        </li>
        );
    })
  }

  render() {
    return(
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned from here will show up as props
  // inside of BookList
  return {
    books: state.books
  }
}

// bindActionCreators is the connector between actions and reducers
// anything returned from this function will end up as props on the
// BookList container so there is a this.props.selectBook
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all
  // of our reducers - this is done by dispatch
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect is the connector between state and components
// It needs to know about this new dispatch method, selectBook. Make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

// Containers are component that should connect react and redux
// NOT necessarily the most parent component
// should be the components that care about change in state
//
// When there is a connection between react and redux,
// the component becomes a container or a smart component
//
// Whenever there is a container, the container needs to be
// exported, not the original component
//
// Whenever the applications state changes, the component will
// automatically re-render
//
// Whenever the application state changes, the object in the connect
// function will be assigned as the props


