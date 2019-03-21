import React, { Component } from 'react'
import { BioFilters } from '../BioFilters'
import { WhatIDo } from '../WhatIDo'
import styles from './Home.module.css'

export class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <BioFilters />
        <WhatIDo />
        <div></div>
      </div>
    )
  }
}