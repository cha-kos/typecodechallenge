import React, { Component } from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (<h1>ERROR: Article Does Not Exist</h1>);
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
