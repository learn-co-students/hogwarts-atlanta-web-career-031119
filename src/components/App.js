import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';

class App extends Component {

  state={
    hogsList: [],
    greased: false,
    term: "none"
  }

  componentDidMount = () => {
    console.log(hogs)
    this.setState({hogsList: hogs})
  }

  toggledGreased = () => {
    this.setState({greased: !this.state.greased})

  }

  handleSort=()=>{
    if(this.state.term === "name"){
      const sortedHogs = [...this.state.hogsList].sort((a,b)=>{
        if(b.name > a.name){
          return -1
        }else if(b.name < a.name){
          return 1
        }else{
          return 0
        }
      })
      return sortedHogs
    }else if(this.state.term === "weight"){
      const sortedHogs = [...this.state.hogsList].sort((a,b)=>{
        if(a.weight > b.weight){
          return 1
        }else if( a.weight < b.weight){
          return -1
        }else{
          return 0
        }
      })
      return sortedHogs
    }else{
      this.setState({sort: false})
      return this.state.hogsList
    }
  }

  toggleSort = (e) => {
    this.setState({term: e.target.value})
  }
  

  renderHogs = () => {
    if(this.state.greased){
      let greasedHogs = [...this.state.hogsList].filter( hog => hog.greased === true )
      return <HogContainer hogs={greasedHogs} />
    }else if(this.state.term !== "none"){
      let sortedHogs = this.handleSort()
      return <HogContainer hogs={sortedHogs} />
    }else{
      return <HogContainer hogs={this.state.hogsList} />
    }
  }

  render() {
    console.log('rendered')
    return (
      <div className="App">
          < Nav toggleSort={this.toggleSort} greased={this.state.greased} toggleGreased={this.toggledGreased}/>
        {this.renderHogs()}
      </div>
    )
  }
}

export default App;
