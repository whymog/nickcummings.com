import React, { Component } from 'react'
import styles from './Header.module.css'

export class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <span className={styles.title}>
          Nick Cummings
        </span>
        <ul className={styles.links}>
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
