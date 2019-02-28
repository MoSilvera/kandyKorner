import React, { Component } from 'react'


export default class Employees extends Component {
    render() {
        return (
            <section className="employees">
                <h1>Employees</h1>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            name: {employee.name}
                        </div>
                    )
                }
            </section>
        );
    }
}