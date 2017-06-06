import React, { Component } from 'react';
import Search from './Search'
import BookLists from './BookLists'

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      books: []
    }
    this.updateState = this.updateState.bind(this)
  }

  updateState(data){
    this.setState((prevState, props) => {
      return {books: data}
    })
  }

  render() {
    return (
      <div>
        <Search handleUpdate={this.updateState}/>
        <BookLists books={this.state.books}/>
      </div>
    );
  }
}

export default App;
