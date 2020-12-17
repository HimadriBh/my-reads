import React, { Component } from 'react'
import Book from './Book'
export default class Books extends Component {
  render() {
    const {title, books } = this.props
    return (
      <div className="books">
        <h1>{title}</h1>
        <hr />
        <ul className="books-list">
          {books.map((book, index) => (
            <li key={index}>
              <Book book={book}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
