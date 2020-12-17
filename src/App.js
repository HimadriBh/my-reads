import { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Books from "./Books";
import './App.css';

class App extends Component {
  state = {
    books: [],
    // currentlyReading: [],
    // wantToRead: [],
    // read: []
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
    <div className="App">
      <header>
        <h1>MyReads</h1>
      </header>
      <Books books={this.filterBooksByShelf("currentlyReading")} title={"Currently Reading"} />
      <Books books={this.filterBooksByShelf("wantToRead")} title={"Want To Read"} />
      <Books books={this.filterBooksByShelf("read")} title={"Read"} />
    </div>
  );
 }
}

export default App;
