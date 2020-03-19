import React, {Component} from "react";
import "./style.css";
import {Link} from "react-router-dom";

import Products from "../Products/index.js";
import FAQ from "../FAQ/index.js";
import News from "../News/index.js";

class Home extends Component {
    state = {
        page : window.location.pathname.split("/")[1]
    }

    componentDidMount = () => {
        this.loadPage(this.state.page);
    }

    loadPage = (page) => {
        this.setState({
            page: page
        });
        console.log(page);
    }

    render() {

        let currentPage = this.state.page;

        switch(this.state.page) {
            case "products":
                currentPage = <Products />;
                break;
            case "faq":
                currentPage = <FAQ />;
                break;
            case "news":
                currentPage = <News />;
                break;
            default: 
                break;
        }

        return (
            <div>
                <nav>
                    <div id = "logo">
                        <h1 className = "center-y">Genericorp</h1>
                    </div>

                    <div id = "navbar">
                        <Link to = "/products" onClick = {() => this.loadPage("products")}>Products</Link>
                        <Link to = "/faq" onClick = {() => this.loadPage("faq")}>FAQ</Link>
                        <Link to = "/faq" onClick = {() => this.loadPage("faq")}>Contact Us</Link>
                        <Link id = "news-link" to = "/news" onClick = {() => this.loadPage("news")}>News</Link>
                    </div>
                </nav>
                
                <main>
                    {currentPage}
                </main>

                <footer>

                </footer>
            </div>
        )
    }
}

export default Home;