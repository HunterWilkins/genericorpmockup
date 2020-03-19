import React, {Component} from "react";
import "./style.css";
import {Link} from "react-router-dom";

function Products(props){

    let products = [
        {
            name: "The Dongle-Doo",
            description: "The Dongle-Doo™ is the ultimate Genericorp product. " +
                        "With 4.5 Dongles, 18 doos, and a user score of 7/10™ on DongleCritic, it would be impossible not to recommend this incredible device for your home."
            
        },
        {
            name: "Blob 2.0",
            description: "Blob 2.0™ is our greatest Blob yet! Full HDO compatibility, half YMZ-O5 functionality, and entirely lion-proof™, you can't NOT have a Blob2.0™!"
        },
        {
            name: "Dumbell Cloud",
            description: "Is the gym packed? Is the commute too far? Well, look no further than Dumbell Cloud!™ " +
                        "Dumbbell Cloud™ is the first and only cloud-based excersize program! Just connect to Dumbbell Cloud™, " +
                        "pick up a CloudBell™, and get in shape!"
        }
    ]

    return (
        <div>
            <article>
                {products.map(item => {
                    return (
                        <div className = "product">
                            <h2 className = "name"><em>{item.name}</em><span className = "half-opacity">™</span></h2>
                            <p className = "cart">Add to Cart 🛒</p>
                            <hr />
                            <section>
                                <p className = "description">{item.description}</p>
                                {item.img ? <img src = {item.image}></img> : <img src = "/default.jpg"></img>}
                            </section>
                            
                        </div>
                    )
                })}
            </article>
        </div>
    )
}

export default Products;