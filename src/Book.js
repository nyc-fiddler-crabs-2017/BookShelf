import React from 'react'

class Book extends React.Component {
  render(){
    let book = this.props.bookInfo.volumeInfo
    debugger
    return (
      <div>
        <h4>Title: {book.title}</h4>
        <p>Author: {book.authors ? book.authors[0] : "Iuliia"}</p>
        <p>Description: {book.description}</p>
        <img src="http://books.google.com/books/content?id=eU4UVmNyLGIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"/>
      </div>
    )
  }
}


export default Book;
