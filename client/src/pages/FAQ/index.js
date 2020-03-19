import React, {Component} from "react";
import "./style.css";
import {Link} from "react-router-dom";

function FAQ(props) {

    let content = [
        {
            q: "What IS Genericorp?",
            a: "We're glad you asked! Genericorp is America's #1 stop for content analysis and production! " +
                "We're dedicated to our employees, the community, the environment, but, most importantly, our customers! " +
                "Our products help our customers with maintenance, upkeep, SEO, testing, fitness, scheduling, consulting, guinea pigs, career advice, printer ink, line dancing, lion taming, lifeguarding, and so much more!"
        },
        {
            q: "What do you provide that other companies don't?",
            a: "Our competitors are held back by outdated technologies and practices like AMTRON and LLO-89. At Genericorp, we've obliterated the need for RT-655-based encoding and therefore, don't need AMTRON or LLO-89 to manage our content delivery, maintenance, and production."
        },
        {
            q: "What is your mission statement?",
            a: "We're glad you asked! Genericorp is America's #1 stop for content analysis and production! " +
                "We're dedicated to our employees, the community, the environment, but, most importantly, our customers! " +
                "Our products help our customers with maintenance, upkeep, SEO, testing, fitness, scheduling, consulting, guinea pigs, career advice, printer ink, line dancing, lion taming, lifeguarding, and so much more!"
        }
    ]
    return (
        <div>
            <div id = "faq-article">
                <h2>Frequently Asked Questions</h2>
                <hr />
                {content.map(item => {
                    return(
                        <div className = "faq-box">
                            <p className = "question">{item.q}</p>
                            <p className = "answer">{item.a}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FAQ;