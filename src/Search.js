import React, { Component } from 'react'
import Books from './Books'
import * as BooksAPI from './BooksAPI'
import ErrorBoundary from './ErrorBoundary'
import { Link } from 'react-router-dom'

export default class Search extends Component {
  state = {
    query: '',
    books: []
  }

 updateQuery = (query) => {
    this.setState(() => ({
      query
    }))
    if(query !== ""){
      this.getSearchedBooks(query)
    }
  }

  getSearchedBooks = async (query) => {
    await BooksAPI.search(query)
      .then(books => {
        this.setState({
          books
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { query, books } = this.state

    const filteredBooks = query !== "" ? books.filter(b => (b.hasOwnProperty("authors")) && (b.hasOwnProperty("imageLinks"))): []

    return (
      <ErrorBoundary>
        <div className="search">
          <div className="search-books-top">
             <Link
          className="close-search"
          to='/'
         >
           Close
         </Link>
            <input type="text" className="search-books"
              placeholder="Search Books"
              value={query}
              onChange={(e) => this.updateQuery(e.target.value)}
            />

            </div>
            {filteredBooks.length > 0 && (<Books books={filteredBooks} />) }
            {console.log(filteredBooks)}
        </div>
      </ErrorBoundary>
    )
  }
}
