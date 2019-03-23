import React from 'react'

export default class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  login = () => {
    localStorage.setItem('username', this.state.username)

    this.setState(prevState => {
      return {
        username: '',
        password: ''
      }
    })
  }

  render() {
  return (
    <form onSubmit = { () => this.login() }>
      <input 
        type="text" 
        name="username"
        value = { this.state.username }
        placeholder="Username"
        onChange = { this.handleChange }
      />
      <input 
        type="password" 
        name="password"
        value = { this.state.password }
        placeholder="Password"
        onChange = { this.handleChange }
      />
      <input type="submit" value="Submit"/>
    </form>
  )
  }
}
