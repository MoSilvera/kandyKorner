import React, { Component } from "react"
import { Route } from 'react-router-dom'
import StoreLocations from "./location/StoreLocations"
import Employees from './employee/Employees';
import CandyList from './candy/CandyList';

export default class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    candyDelete = (id) => {fetch(`http://localhost:5002/candies/${id}`, {
        "method": "DELETE"
    })
    .then(r => r.json())
    .then(() => fetch("http://localhost:5002/candies")
    .then(r => r.json()))
    .then(candies => this.setState({candies: candies}))


    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/candies")
            .then(r => r.json())
            .then(candies => newState.candies = candies)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then( () => fetch
            ("http://localhost:5002/candyTypes")
            .then(r => r.json()))
            .then(candyTypes => newState.candyTypes = candyTypes)
            .then( () => fetch
            ("http://localhost:5002/stores")
            .then(r => r.json()))
            .then(stores => newState.stores = stores)
            .then(() => this.setState(newState))
    }
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreLocations stores={this.state.stores} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <Employees employees = {this.state.employees} />
                }} />
                <Route path="/candy" render={(props) => {
                    return <CandyList candies={this.state.candies} 
                    candyTypes={this.state.candyTypes} 
                    candyDelete={this.candyDelete}/>
                }} />

            </React.Fragment>
        )
    }
}