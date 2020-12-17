import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = {
    error: null,
    errorInfo: null
  }
  componentDidCatch(error, errorInfo){
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }
  render() {
     if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
