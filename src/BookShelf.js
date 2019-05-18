import React, { Component } from 'react'
import BookGrid from './BookGrid'

class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <BookGrid books={this.props.books} shelf={this.props.shelf} onChangeShelf={this.props.onChangeShelf}/>
                </div>
            </div>
        )
    }
}

export  default BookShelf;