import React, {Component} from "react";
import "./style.css";
import {Link} from "react-router-dom";

class Home extends Component {
    state = {
        page : window.location.pathname.split("/")[1]
    }

    render() {


        return (
            <div>
                <h1>Dark Souls</h1>
            </div>
        )
    }
}

export default Home;