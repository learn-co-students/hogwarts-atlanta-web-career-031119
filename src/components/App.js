import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import Filters from './Filters'

class App extends Component {
  constructor(){
    super()

    this.state = {
      allHogs: hogs.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })
    }
  }

  handleFilter = (e) => {
    if(e.target.value == "Name"){
      this.setState({
        allHogs: hogs.sort(function(a, b) {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        })
      })
    } else if(e.target.value == "Greased"){
      this.setState({
        allHogs: hogs.filter(hog=>hog.greased === true)
      })
    } else {
      const weightKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
      this.setState({
        allHogs: hogs.sort(function (a, b) {
          return a[weightKey] - b[weightKey];
        })
      })
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <Filters onChange={this.handleFilter}/>
          <br></br>
          <HogContainer allHogs={this.state.allHogs} />
      </div>
    )
  }
}

export default App;
