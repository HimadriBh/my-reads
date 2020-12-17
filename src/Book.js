import React, { Component } from 'react'

export default class Book extends Component {

  render() {
    const {imageLinks, title, authors } = this.props.book
    return (
      <div className="book" onClick={this.handleClick}>
        <img src={imageLinks.smallThumbnail}  alt="book cover" />
        <h5 className="book-title">{title}</h5>
        {authors.map(a => (
          <p>{a}</p>
        ))}
      </div>
    )
  }
}
