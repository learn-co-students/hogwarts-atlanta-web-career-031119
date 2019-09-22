import React from 'react';
import HogCard from './HogCard';

const HogContainer = (props) => {

    return(
        <div className="ui grid container">
            {props.hogs.map(hog => {
                return <HogCard hog={hog} />
            })}
        </div>
    )
}

export default HogContainer