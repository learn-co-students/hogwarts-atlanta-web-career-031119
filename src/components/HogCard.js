import React from 'react';
import HogCardFront from './HogCardFront';
import HogCardBack from './HogCardBack';


class HogCard extends React.Component {

    state={
        toggle: false
    }

    getImage = (name) => {
        return name.split(' ').join('_').toLowerCase()
    }

    toggleView = () => {
        this.setState({toggle: !this.state.toggle})
    }

    render(){
        return(
            <div onClick={()=>this.toggleView()} className="pigTile">
                {this.state.toggle ? 
                    <HogCardBack hog={this.props.hog} />
                    :
                    <HogCardFront path={this.getImage(this.props.hog.name)} />
                }
                <h3>{this.props.hog.name}</h3>
            </div>
        )
    }
}

export default HogCard