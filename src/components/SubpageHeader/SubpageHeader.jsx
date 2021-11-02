import * as React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

import "./SubpageHeader.scss";

export class SubpageHeader extends React.Component {
    render() {
        return ( 
            <section className="subpage_header" >
                <header>
                <Link to="/">
                    <div className="avatar"></div>
                    <div className="title">
                        <h1>Camellia Powers</h1>
                        <h2>Product Designer / Front-End Dev</h2>
                    </div>
                </Link>
            
                <button className="secondary_btn"><a href="https://github.com/camelliapowers" target="blank">
                        <FontAwesomeIcon size="1x" icon={["fab", "github"]} /></a></button> 
                        <button className="secondary_btn"><a href="https://www.linkedin.com/in/camellia-powers/" target="blank"> 
                    <FontAwesomeIcon size="1x" icon={["fab", "linkedin-in"]} /></a></button> 
                </header>
            </section>
        );
    }

}