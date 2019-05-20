import React, { Component } from 'react'
import '../App.css'
import porkers_data from '../porkers_data'
import HogCard from './HogCard'

export default class HogContainer extends Component {
    constructor() {
        super()
        this.state = {
            hogs: porkers_data,
            greasy: "All",
            sort: "None"
        }
    }

    handleGreasy =(e)=> {
        this.setState({
            greasy: e.target.value
        })
    }

    filterGreasy =()=> {
        if (this.state.greasy == "Non-Greasy") {
            return this.state.hogs.filter( hog => { 
                if (!hog.greased)
                return true
            })
        } else if (this.state.greasy == "Greasy") {
            return this.state.hogs.filter( hog => {
                if (hog.greased)
                return true
            })
        } else {
            return this.state.hogs
        }
    }

    sortHogs =()=> {
        if (this.state.sort === "Name") {
            return this.state.hogs.sort((a, b) => {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }
                return 0
        })
        } else if (this.state.sort === "Weight") {
        return this.state.hogs.sort((a, b)=>{
            let key = "weight"
            return a[key] - b[key];
        })
        } else {
            return this.state.hogs
        }
    }

    handleSort =(e)=> {
        this.setState({
            sort: e.target.value
        })
    }

    displayHogs =()=> {
        
    }

    render() {
        return (
            <div>
                <div align="center">
                    Sort by:{' '}
                    <select value={this.state.sort} onChange={this.handleSort}>
                        <option>None</option>
                        <option>Name</option>
                        <option>Weight</option>
                    </select>
                    {'     '}
                    Greasy: {' '}
                    <select value={this.state.greasy} onChange={this.handleGreasy}>
                        <option>All</option>
                        <option>Greasy</option>
                        <option>Non-Greasy</option>
                    </select>
                </div>
                    <br></br>
                <div align="center" className="ui grid container">
                    {this.filterGreasy(this.sortHogs()).map( hog => {
                        return <HogCard hog={hog} />
                    })}
                </div>
            </div>
        )
    }
}