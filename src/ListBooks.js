import React, {Component} from 'react'
import BookShelf from "./BookShelf";
import {Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {

    state = {
        books: []
    };

    populateBooks() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => (
                    {books}
                ))
            })
    }

    componentDidMount() {
        this.populateBooks()
    }

    onChangeBookShelf = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then(
            () => this.populateBooks()
        )
    };

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf books={this.state.books} title="Currently Reading"
                                   shelf={"currentlyReading"} onChangeShelf={this.onChangeBookShelf}/>
                        <BookShelf books={this.state.books} title="Want to Read" shelf={"wantToRead"}
                                   onChangeShelf={this.onChangeBookShelf}/>
                        <BookShelf books={this.state.books} title="Read" shelf={"read"}
                                   onChangeShelf={this.onChangeBookShelf}/>
                    </div>
                </div>
                <Link to='/search'
                      className="open-search">
                    <button>Add a book</button>
                </Link>
            </div>
        )
    }
}


export default ListBooks;