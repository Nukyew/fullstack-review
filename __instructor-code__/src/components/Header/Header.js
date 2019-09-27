import React, { Component } from 'react'
import logo from '../../assets/john_sombrero.png'
import './header.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { updateUser } from '../../ducks/reducer'
import { connect } from 'react-redux'
import swal from 'sweetalert2'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange(e, key) {
    this.setState({
      [key]: e.target.value
    })
  }

  login = async () => {
    const { password, email } = this.state
    const res = await axios.post('/auth/login', { email, password })
    if (res.data.user) {
      this.props.updateUser(res.data.user)
    }
    swal.fire(res.data.message)
  }

  logout = async () => {
    const res = await axios.delete('/auth/logout')
    this.props.updateUser(null)
    swal.fire(res.data.message)
  }

  render() {
    return (
      <div className="header">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="jonbrero logo" />
            <h1>Comprajuegos</h1>
          </div>
        </Link>
        {this.props.user ? (
          <button onClick={this.logout}>Logout</button>
        ) : (
          <div className="login-form">
            <input
              onChange={e => this.handleChange(e, 'email')}
              type="text"
              placeholder="Email"
            />
            <input
              onChange={e => this.handleChange(e, 'password')}
              type="password"
              placeholder="Password"
            />
            <button onClick={this.login}>Login</button>
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  const { user } = reduxState
  return { user }
}

export default connect(
  mapStateToProps,
  { updateUser }
)(Header)
