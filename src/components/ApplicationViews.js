import React, { Component } from "react"
import { Route } from 'react-router-dom'
import StoreLocations from "./location/StoreLocations"
import Employees from './employee/Employees';
import CandyList from './candy/CandyList';
import CandyManager from '../modules/CandyManager'
import EmployeeManager from '../modules/EmployeeManager'
import StoreManager from '../modules/StoreManager'
import CandyTypeManager from '../modules/CanyTypeManager'
export default class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    candyDelete = (id) => {
        CandyManager.deleteOne(id)
        .then(CandyManager.getAll)
    .then(candies => this.setState({candies: candies}))


    }

    componentDidMount() {
        const newState = {}

        CandyManager.getAll().then(candies => {
            this.setState({candies: candies})})
            .then(() => EmployeeManager.getAll())
            .then(employees => {this.setState({employees: employees})})
            .then(() => CandyTypeManager.getAll())
            .then(candyTypes => {this.setState({candyTypes: candyTypes})})
            .then(() => StoreManager.getAll())
            .then(stores => {this.setState({stores: stores})})
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