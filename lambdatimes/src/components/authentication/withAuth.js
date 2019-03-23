import React, { Component } from 'react';

const withAuth = Times => Login => class extends Component {
  state = {
    loggedIn: false
  }

  componentDidMount() {
    const username = localStorage.getItem('username');

    this.setState({ loggedIn: username !== null ? true : false })
  }

  render() {
    return (
      <React.Fragment>
        { this.state.loggedIn ? <Times /> : <Login /> }
      </React.Fragment>
    )
  }
}

export default withAuth;

