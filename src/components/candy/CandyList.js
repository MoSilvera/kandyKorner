import React, { Component } from 'react'
import IndividualCandies from "./IndividualCandies"
import "./candy.css"
class CandyList extends Component {
    render() {
        return (
            <div>
                <h1 className="title">candies</h1>
                <section className="candyList">
                    {
                        this.props.candyTypes.map(type =>
                            <div className="oneCandy" key={type.id}>
                                <h3>{type.name}</h3>
                                <IndividualCandies
                                    candyDelete={this.props.candyDelete}
                                    candy={
                                        this.props.candies
                                            .filter(candy => type.id === candy.typeId)

                                    } />
                            </div>
                        )
                    }
                </section>
            </div>
        )
    }
}

export default CandyList