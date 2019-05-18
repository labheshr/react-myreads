import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import Search from './Search'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
    render() {
        return (
            <div className="app">
                <Route exact path='/search' render={({history}) => (
                    <Search onSearch={() => {
                        history.push('/')
                    }}/>
                )
                }/>
                <Route exact path='/' component={ListBooks} />
            </div>
        )
    }
}

export default BooksApp
