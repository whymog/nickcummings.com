import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './WhatIDo.module.css'

const thingsIDo = [
    {
        imagePath: '',
        title: 'Whymog',
        description: 'My portfolio and design/development blog.',
        href: 'https://www.whymog.net/',
    },
    {
        imagePath: '',
        title: 'whymog.itch.io',
        description: 'My games.',
        href: 'https://whymog.itch.io',
    },
    {
        imagePath: '',
        title: 'Silicon Sasquatch',
        description: 'I\'m editor-in-chief of a games criticism blog.',
        href: 'https://www.siliconsasquatch.com',
    }
]

const ThingIDo = React.memo(({ imagePath, title, description, href }) => (
    <div className={styles.thing}>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
))

ThingIDo.propTypes = {
    imagePath: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    href: PropTypes.string,
}

export class WhatIDo extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                {thingsIDo.map(thing => (
                    <ThingIDo
                        imagePath={thing.imagePath}
                        title={thing.title}
                        description={thing.description}
                        href={thing.href}
                    />
                ))}
            </div>
        )
    }
}