import React, { Component } from 'react'
import '../App.css'

export default class HogCardFront extends Component {

    render() {

        return (
            <div className="card-front" style={{backgroundImage: `url(../hog-imgs/${this.props.hog.name.toLowerCase().split(" ").join("_")}.jpg)`}}>
                {/* <div className="image">
                    <img src={"/hog-imgs/" + this.props.hog.name.toLowerCase().split(" ").join("_") + ".jpg"} />
                </div> */}
            </div>
        )
    }
}