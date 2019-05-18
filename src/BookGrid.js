import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types';

class BookGrid extends Component {
    render() {
        //let books = this.props.books !== undefined ? this.props.books: [];
        return this.props.books === undefined || this.props.books.length === 0 ? (<p>No Results</p>) : (
            <ol className="books-grid">
                {
                    this.props.books.filter((book) => (this.props.shelf === undefined) || (book.shelf === this.props.shelf)).map((book) =>
                        <Book key={book.id} book={book} onChangeShelf={this.props.onChangeShelf}/>)
                }
            </ol>
        )
    }
}

BookGrid.propTypes = {
    books: PropTypes.array,
    shelf: PropTypes.string,
    onChangeShelf: PropTypes.func.isRequired
};

export default BookGrid;