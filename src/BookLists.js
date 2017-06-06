import React, {Component} from 'react'
import Book from './Book'


class BookLists extends Component {
    render(){
        return(
            <div>
            {
                this.props.books.map((book, id) => {
                    return  <Book key={id} bookInfo={book}/>
                })
            }
            </div>
        )
    }

}

export default BookLists