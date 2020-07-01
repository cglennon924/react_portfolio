import React from "react";
import Overlay from "../../components/overlay/overlay.js"
import Cards from "../../components/cards/cards.js"
import API from "../../utils/db.json";
import "./portfolio.css"

function Portfolio() {

    return(
        <header className="portfolio-background">
            <Overlay />
                <div role="main" className="container">
                    <div className="jumtron text-center">
                    <h1 className="jumtron-title">Portfolio</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {API.results.map(info => <Cards details={info}/>)}
                    </div>
                </div>
        </header>

    )

};

export default Portfolio;