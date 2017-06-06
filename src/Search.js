import React from 'react';
import axios from 'axios';

class Search extends React.Component {
    constructor(){
        super()
        this.getBooks = this.getBooks.bind(this)
    }

    getBooks(e){
        let userInput = this.refs["user-input"].value;
        e.preventDefault();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${userInput}`)
            .then(function(response){
                this.props.handleUpdate(response.data.items)
                // return response.data.items
            }.bind(this))
    }

  render(){
 
    return(
        <form onSubmit={this.getBooks}>
            <input type="text" ref="user-input"/>
        </form>
    )
  }
}


export default Search;
