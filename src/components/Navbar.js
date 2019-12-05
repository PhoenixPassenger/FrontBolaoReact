import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      nickname: '',
      email: '',
      type: '' ,
      errors: {}
    }
  }
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
    window.location.reload();
  }
  componentWillMount() {
    if(localStorage.usertoken)
    {
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      this.setState({
        type : decoded.isAdmin
      })
    }
    
  }
type(){
  if (this.state.type) {
   return <td>Admin</td>
  }else{
  return  <td>Normal</td>
  }
}

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )

    const userAdmin = (<ul className="navbar-nav">
    <li className="nav-item">
      <Link to="/profile" className="nav-link">
        User
      </Link>
    </li>
    <li className="nav-item">
      <a href="" onClick={this.logOut.bind(this)} className="nav-link">
        Logout
      </a>
    </li>
    <li className="nav-item">
      <Link to="/round" className="nav-link">
        Round
      </Link>
    </li>
  </ul>)

  const userCommon = (<ul className="navbar-nav">
  <li className="nav-item">
    <Link to="/profile" className="nav-link">
      User
    </Link>
  </li>
  <li className="nav-item">
      <Link to="/roundname" className="nav-link">
        Bet
      </Link>
    </li>
  <li className="nav-item">
    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
      Logout
    </a>
  </li>
</ul>)

    const userLink = (!this.state.type ? userCommon : userAdmin)

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)
