import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import Search from './Search'
import ListBooks from './ListBooks'
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {

    state = {
        shelfBooks: []
    };

    populateShelfBooks() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => (
                    {shelfBooks: books}
                ))
            })
    }

    componentDidMount() {
        this.populateShelfBooks()
    }

    onChangeBookShelf = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then(
            () => this.populateShelfBooks()
        )
    };

    render() {
        return (
            <div className="app">
                <Route exact path='/search' render={({history}) => (
                    <Search onSearch={() => {
                        history.push('/')
                    }} shelfBooks={this.state.shelfBooks} onChangeShelf={this.onChangeBookShelf}/>
                )
                }/>
                <Route exact path='/' render={
                    () => (
                        <ListBooks shelfBooks={this.state.shelfBooks} onChangeShelf={this.onChangeBookShelf}/>
                    )
                }/>
            </div>
        )
    }
}

export default BooksApp
