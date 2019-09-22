import React from 'react';

const HogCardBack = (props) => {

    return(
        <div>
            <h3>
                Specialty: {props.hog.specialty}
            </h3>
            <h3>
                Greased?: {props.hog.greased ? "Hell Yeah! Greasy Pig!" : "Heck Gnaw..."}
            </h3>
            <h3>
                Weight: {1000/props.hog.weight}
            </h3>
            <h3>
                Highest Medal Achieved: {props.hog['highest medal achieved']}
            </h3>
        </div>
    )
}

export default HogCardBack