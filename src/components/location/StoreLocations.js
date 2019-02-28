import React, { Component } from 'react'


export default class StoreLocations extends Component {
    render() {
        return (
            <section className="storeLocations">
                <h1>Store Locations</h1>
                {
                    this.props.stores.map(store =>
                        <div key={store.id}>
                            name: {store.name} <br></br>
                            address: {store.address}
                        </div>
                    )
                }
            </section>
        );
    }
}