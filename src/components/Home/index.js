import React, { Component } from 'react'
import BioFilters from '../BioFilters'
import { WhatIDo } from '../WhatIDo'
import './style.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <BioFilters />
        <WhatIDo />
        <div></div>
      </div>
    )
  }
}

export default Home
