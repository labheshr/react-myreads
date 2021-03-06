import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Book extends Component {

    handleOptionChange = (e) => {
        const selected = e.target.value;
        if (this.props.onChangeShelf) {
            this.props.onChangeShelf(this.props.book, selected)
        }
    };

    render() {
        let thumbnail = undefined;
        try {
            thumbnail = this.props.book.imageLinks.thumbnail;
        } catch {
            thumbnail = "";
        }
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 188,
                            backgroundImage: `url(${thumbnail})`
                        }}/>
                        <div className="book-shelf-changer">
                            <select id="select_id" onChange={this.handleOptionChange}
                                    value={this.props.book.shelf === undefined ? "none" : this.props.book.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div
                        className="book-authors">{this.props.book.authors !== undefined ? this.props.book.authors.join() : ""}</div>
                </div>
            </li>
        )
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired
};

export default Book;