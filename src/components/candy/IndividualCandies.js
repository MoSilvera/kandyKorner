import React, { Component } from 'react'

export default class IndividualCandies extends Component {
    render() {

        return (
            <section className="candy">
                    { this.props.candy.map( candy =>
                    <div key={candy.id}>
                    {candy.name}
                    <button id={`candyDelete`}
                        onClick={ () => {this.props.candyDelete(candy.id)}}>Remove Candy</button>
                    </div>) }

            </section>
        )
    }
}

