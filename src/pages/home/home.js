import React from "react";
import Overlay from "../../components/overlay/overlay.js"
import "./home.css"
import ProfilePic from "../../images/profile_pic.png"


const Home = () => {
    return (
        <header className="about-me-background">
            <Overlay />
            <div role="main" className="container">
                <div className="jumtron text-center">
                <h1 className="jumtron-title">About Me</h1>
                </div>
                <div className="container about-me-container">
                    <img src="./public/images/profile_pic.png" alt="profile pic" title="Christopher Glennon" className="about-me-profile-img"></img>
                    <p className="universal-font"> I am an aspiring Junior Full Stack Web Developer.I am a hardworking individual who is a quick learner and works well with others! </p>
                </div>
            </div>
        </header>


    )
}

export default Home;