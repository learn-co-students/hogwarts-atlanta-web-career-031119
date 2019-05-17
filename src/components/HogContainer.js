import React, { Component } from 'react';
import HogCard from './HogCard'

class HogContainer extends Component{

  render(){
    return(
      <div className="ui grid container">
       {this.props.allHogs.map(hog => <HogCard hogData={hog}/>)}
      </div>
    )
  }
}

export default HogContainer
