import React, {Component} from 'react'
import BookGrid from "./BookGrid";
import {Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import AwesomeDebouncePromise from 'awesome-debounce-promise';

class Search extends Component {
    state = {
        query: '',
        books: []
    };

    search = query => {
        const token = {};
        this.token = token;
        BooksAPI.search(query)
            .then(books => {
                if (this.token === token) {
                    const booksFetched = Array.isArray(books) ? books : [];
                    this.setState({ books: booksFetched });
                }
            });
    };

    searchDebounced = AwesomeDebouncePromise(this.search, 500);

    handleTextChange = async query => {
        query = query.trim();
        this.setState({ query, results: [] });
        this.searchDebounced(query);
    };

    render() {
        const {query} = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search'
                          to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               value={query}
                               onChange={(event) => this.handleTextChange(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BookGrid books={this.state.books}/>
                </div>
            </div>
        )
    }
}

export default Search;