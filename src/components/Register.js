import React, { Component } from 'react'
import { register } from './UserFunctions'
import Switch from "react-switch";

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      isAdmin: false ,
      email: '',
      password: '',
      nickname: '',
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange(isAdmin) {
    this.setState({ isAdmin });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      name: this.state.name,
      isAdmin: this.state.isAdmin,
      email: this.state.email,
      password: this.state.password,
      nickname: this.state.nickname
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
          <div className = 'jumbotron'>
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Nickname</label>
                <input
                  type="text"
                  className="form-control"
                  name="nickname"
                  placeholder="Enter your nickname"
                  value={this.state.nickname}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="admin">Administrator</label>
                <div>
                <Switch onChange={this.handleChange} checked={this.state.checked} />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
