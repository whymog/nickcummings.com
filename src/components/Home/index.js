import React, { Component } from 'react'
import BioFilters from '../BioFilters'
import './style.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <BioFilters />
        <div></div>
        <div></div>
      </div>
    )
  }
}

export default Home
