import * as React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import "./Header.scss";

export class Header extends React.Component {
    render() {
        return ( 
            <section className="header" >
                <div className="avatar"></div>
                <h1>Camellia Powers</h1>
                <h2>Front-End Developer</h2>
                <h3>Seattle, WA</h3>
                <div className="intro">
                    <p>Hi, I'm Camellia Powers. I'm a front-end developer based in Seattle, WA. I'm always interested in new technology, design
                    trends, animation, color, space, and new ways to build engaging web and mobile products. For over 7 years,
                    I've been working on projects of many shapes and sizes, turning ideas into exceptional online experiences.</p>
                    <div className="social-links">
                    <a className="secondary_btn social" href="https://github.com/camelliapowers" target="blank">
                        <FontAwesomeIcon size="1x" icon={["fab", "github"]} />  GitHub</a>
                    <a className="secondary_btn social" href="https://www.linkedin.com/in/camellia-powers/" target="blank"> 
                    <FontAwesomeIcon size="1x" icon={["fab", "linkedin-in"]} />  Linkedin</a>
                    </div>
                </div>
            </section>
        );
    }

}