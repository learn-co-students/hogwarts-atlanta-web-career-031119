import React, { Component } from 'react'
import '../App.css'

export default class HogCardBack extends Component {

    render() {
        return (
            <div className="card-back">
                <h3><strong><u>{this.props.hog.name}</u></strong></h3>
                <p><b>Specialty:</b> {this.props.hog.specialty}</p>
                <p><b>Greased:</b> {this.props.hog.greased ? "Slimy" : "Clean"}</p>
                <p><b>Weight:</b> {this.props.hog.weight}</p>
                <p><strong>Highest Medal Achieved: {this.props.hog.highest_medal_achieved}</strong></p>
            </div>
        )
    }
}