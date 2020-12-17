import React, { Component } from 'react'
import { update } from './BooksAPI'
import Menu from './Menu'

export default class Book extends Component {
  state ={
    showMenu: false
  }

  handleClick = () => {
    this.setState({
      showMenu: true
    })
  }

  handleSelect = (selectedOption) => {
    this.setState({
      showMenu: false
    })
    update(this.props.book, selectedOption.value)
  }

  render() {
    const {imageLinks, title, authors, shelf } = this.props.book
    if(authors === "undefined" || imageLinks === "undefined"){
      throw new Error("Something went wrong, Search again!")
    }
    return (
      <div className="book" >
        <div className="book-image" onClick={this.handleClick}>
          <img src={imageLinks.smallThumbnail}  alt="book cover" />
          <span className="btn">v</span>
          {this.state.showMenu && (<Menu onSelect={this.handleSelect} shelf={shelf} />)}
        </div>
        <h5 className="book-title">{title}</h5>
        {authors.map((a, index) => (
          <p key={index}>{a}</p>
        ))}
      </div>
    )
  }
}
