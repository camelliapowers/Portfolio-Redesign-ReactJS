import * as React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import "./Footer.scss";

let currentYear = new Date().getFullYear();

export class Footer extends React.Component {
    render() {
        return ( 
            <section className="footer">
            <FontAwesomeIcon size="3x" icon={["fas", "envelope"]} />
            <h2>Contact</h2>
            <p className="mail_me">powerscamellia@gmail.com</p>
                <a target="_blank" href="https://github.com/camelliapowers">
                <span className="sr-only">Go to my Github</span>
                <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/camellia-powers/">
                <span className="sr-only">Go to my linkedIn</span>
                <FontAwesomeIcon size="2x" icon={["fab", "linkedin-in"]} />
                 </a>
            <p>&#169;{currentYear} Camellia Powers</p>
            </section>
        );
    }
}