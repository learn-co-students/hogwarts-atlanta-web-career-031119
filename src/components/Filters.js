import React from 'react';

function Filters(props){
  return(
    <div className="ui container">
    <label for="filter-select">Sort By:</label>

      <select onChange={props.onChange} id="filter-select">
        <option value="Name">Name</option>
        <option value="Greased">Greased</option>
        <option value="Weight">Weight</option>
      </select>

    </div>
  )
}

export default Filters
