import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

const filters = [
    {
        name: 'writer',
        displayName: 'writer',
    },
    {
        name: 'game-designer',
        displayName: 'game designer',
    },
    {
        name: 'web-developer',
        displayName: 'web developer',
    },
    {
        name: 'podcaster',
        displayName: 'podcaster',
    },
    {
        name: 'human-being',
        displayName: 'human being',
    },
]

class FilterToggle extends Component {
    static propTypes = {
        name: PropTypes.string,
        displayName: PropTypes.string,
    }
    
    render() {
        return (
            <div>
                <button className="filter" type="button" name={this.props.name}>
                    {this.props.displayName}
                </button>
            </div>
        )
    }
}

class BioFilters extends Component {
    render() {
        return (
            <div className="wrapper">
                <p>I'm a</p>
                {filters.map(filter => <FilterToggle key={filter.name} {...filter}/>)}
                <p>living in Portland, Oregon.</p>
            </div>
        )
    }
}

export default BioFilters
