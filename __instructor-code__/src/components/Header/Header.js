import React, { Component } from 'react'
import logo from '../../assets/john_sombrero.png'
import './header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="header">
        <Link to='/'>
          <div className="logo">
            <img src={logo} alt="jonbrero logo" />
            <h1>Comprajuegos</h1>
          </div>
        </Link>
        <div className="login-form">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </div>
      </div>
    )
  }
}
