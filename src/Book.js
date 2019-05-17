import React, { Component } from 'react'

class Book extends Component {

    handleOptionChange = (e) => {
        //let selected = document.getElementById("select_id").value;
        let selected = e.target.value;
        console.log(selected);
        if (this.props.onChangeShelfState) {
            console.log("onChangeSelfState exists");
            this.props.onChangeShelfState(this.props.book, selected)
        }
    };
    render() { return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.props.book.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select id="select_id" onChange={this.handleOptionChange} value={this.props.book.shelfState}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        </li>
    )

    }
}

export default Book;