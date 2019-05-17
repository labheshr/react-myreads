import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookObject from './BookObject'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
    // state = {
    //   /**
    //    * TODO: Instead of using this state variable to keep track of which page
    //    * we're on, use the URL in the browser's address bar. This will ensure that
    //    * users can use the browser's back and forward buttons to navigate between
    //    * pages, as well as provide a good URL they can bookmark and share.
    //    */
    //   showSearchPage: false
    // }
    state = {
        books: [new BookObject("Ender's game", "Orson Scott Card", "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api", "currentlyReading"),
            new BookObject("1776", "David McCullough", "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api", "wantToRead"),
            new BookObject("The Hobbit", "J.R.R. Tolkien", "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api", "read")]
    };

    populateBooks = () => {

    };

    onChangeBookShelfState = (book, newShelfState) => {
        book.shelfState = newShelfState;
        this.setState((currState) => ({
                books: currState.books.filter((b) => {
                    return b.title !== book.title
                }).concat([book])
            })
        )
        console.log(this.state)
    };

    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <div className="search-books">
                        <div className="search-books-bar">
                            <button className="close-search"
                                    onClick={() => this.setState({showSearchPage: false})}>Close
                            </button>
                            <div className="search-books-input-wrapper">
                                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                                <input type="text" placeholder="Search by title or author"/>

                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid"></ol>
                        </div>
                    </div>
                ) : (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <BookShelf books={this.state.books} title="Currently Reading"
                                           shelfState={"currentlyReading"} onChangeShelfState={this.onChangeBookShelfState}/>
                                <BookShelf books={this.state.books} title="Want to Read" shelfState={"wantToRead"} onChangeShelfState={this.onChangeBookShelfState}/>
                                <BookShelf books={this.state.books} title="Read" shelfState={"read"} onChangeShelfState={this.onChangeBookShelfState}/>
                            </div>
                        </div>
                        <div className="open-search">
                            <button onClick={() => this.setState({showSearchPage: true})}>Add a book</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default BooksApp
