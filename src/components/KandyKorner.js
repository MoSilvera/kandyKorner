import "./KandyKorner.css"
import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./KandyKorner.css"
import "bootstrap/dist/css/bootstrap.min.css"


class KandyKorner extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default KandyKorner