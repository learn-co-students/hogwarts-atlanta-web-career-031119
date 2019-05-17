import React from 'react';
// import { Card } from 'semantic-ui-react';

function hogImg(props){
  let img = props.hogData.name.toLowerCase().split(" ").join("_") + ".jpg"
  return(<img src={require(`../hog-imgs/${img}`)}/>)
}

function showInfo(){

}

function HogCard(props){

  return(
      <div className="ui move right reveal">
        <div className="visible content">
          <div className="image">
            {hogImg(props)}
          </div>
          <div className="content">
            <h2 className="header">{props.hogData.name}</h2>
          </div>
        </div>
        <div className="hidden content">
          <p>Specialty: {props.hogData.specialty}</p>
          <p>{props.hogData.greased ? "I am greased" : "I am not greased"}</p>
          <p>Weight Ratio To Fridge: {props.hogData['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
          <p>Highest Medal Achieved: {props.hogData['highest medal achieved']}</p>
        </div>
      </div>
  )
}

export default HogCard
