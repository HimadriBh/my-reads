import React, { Component } from 'react'
import Books from "./Books";
import { Link } from "react-router-dom"

import * as BooksAPI from './BooksAPI'

export default class Home extends Component {
    state = {
    books: [],
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({
          books
        })
      })
  }

  filterBooksByShelf = (shelf) => {
    return this.state.books.filter(book => book.shelf === shelf)
  }

  render() {
    return (
      <>
      <header>
        <h1>MyReads</h1>
      </header>
      <Books books={this.filterBooksByShelf("currentlyReading")} title={"Currently Reading"} />
      <Books books={this.filterBooksByShelf("wantToRead")} title={"Want To Read"} />
      <Books books={this.filterBooksByShelf("read")} title={"Read"} />
      <Link to="/search"><button className="app-button">+</button></Link>
      </>
    )
  }
}
