import React from 'react';

const HogCardFront = (props) => {

    return(
        <div>
            <img src={require(`../hog-imgs/${props.path}.jpg`)} />
        </div>
    )
}

export default HogCardFront