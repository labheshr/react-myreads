import React, {Component} from 'react'
import BookShelf from "./BookShelf";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

class ListBooks extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf books={this.props.shelfBooks} title="Currently Reading"
                                   shelf={"currentlyReading"} onChangeShelf={this.props.onChangeShelf}/>
                        <BookShelf books={this.props.shelfBooks} title="Want to Read" shelf={"wantToRead"}
                                   onChangeShelf={this.props.onChangeShelf}/>
                        <BookShelf books={this.props.shelfBooks} title="Read" shelf={"read"}
                                   onChangeShelf={this.props.onChangeShelf}/>
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

ListBooks.propTypes = {
    shelfBooks: PropTypes.array,
    onChangeShelf: PropTypes.func.isRequired
};
export default ListBooks;