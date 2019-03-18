import React, { Component } from 'react'
import './style.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <span className="title">
          Nick Cummings
        </span>
        <ul className="links">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="https://www.whymog.net/blog">Blog</a>
          </li>
          <li>
            <a href="mailto:nick@nickcummings.com">Contact</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header;
