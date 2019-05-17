import React, { Component } from 'react'
import Book from './Book'

class BookGrid extends Component {
    render() {
        return (
            <ol className="books-grid">
                {
                    this.props.books.filter((book) => (this.props.shelfState === undefined) || (book.shelfState === this.props.shelfState)).map( (book) => <Book key={book.title} book={book} onChangeShelfState={this.props.onChangeShelfState}/>)
                }
            </ol>
        )
    }
}

export default BookGrid;