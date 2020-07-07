import React from "react"
import "./cards.css"

const Cards = ({ details }) => {
    return(
        <div className="col-md-6"> 
            <div className="card mb-6 box-shadow thumbnail">
                 <label className="universal-font">{details.repository}</label>
                <img className="card-img-top" src={details.image} alt="Thumbnail"></img>
                    <div className="card-body">
                        <p className="universal-font text-center">{details.description}</p>
                        <a className="universal-font text-center" href={details.link}>{details.repository}</a>
                        <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
            </div>
        </div>
    )


}

export default Cards;