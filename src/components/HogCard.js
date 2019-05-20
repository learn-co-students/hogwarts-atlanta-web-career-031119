import React, { Component } from 'react'
import '../App.css'
import HogCardBack from './HogCardBack'
import HogCardFront from './HogCardFront'

export default class HogCard extends Component {

    render() {
        return (
            <div className="ui eight wide column" className="hog-card">
                <HogCardFront hog={this.props.hog} />
                <HogCardBack hog={this.props.hog} />
            </div>
        )
    }
}