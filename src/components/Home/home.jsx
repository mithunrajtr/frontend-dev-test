import React from 'react'
import close from "../../assets/close.svg";
import banner from "../../assets/banner.jpg";
import maskOne from "../../assets/Mask group (2).jpg";
import maskTwo from "../../assets/Mask group.jpg";
import maskThree from "../../assets/Mask group (1).jpg";

import "./home.css";
const Home = () => {
  return (
    <div className="home">
        <div className="header">
           <img title="close" src={close} alt="close icon"/>
        </div>
        <div className="topbardes">
          <p>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</p>
        </div>
        <div className="bannersection">
          <div className="bannerImg">
            <img alt="banner" src={banner}/>
          </div>
        </div>
        <div className="bannderdes">
          <p>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
        </div>
        <div className="primaryBtn">
          <a href="#" title="Visit Website">
           <span> Visit Website</span>
          </a>
        </div>
        <div className="cardBox">
          <div className="cardBoxItem">
            <div className="cardImg">
              <img alt="image" src={maskOne}/>
            </div>
            <div className="cardDes">
              <p>Explore large, destructible environments where no two games are ever the same.</p>
            </div>
          </div>
          <div className="cardBoxItem">
            <div className="cardImg">
              <img alt="image" src={maskTwo}/>
            </div>
            <div className="cardDes">
              <p>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
            </div>
          </div>
          <div className="cardBoxItem">
            <div className="cardImg">
              <img alt="image" src={maskThree}/>
            </div>
            <div className="cardDes">
              <p>Discover even more ways to play across thousands of creator-made game genres</p>
            </div>
          </div>
        </div>
        <div className="sectionContrib">
          <div className="box">
              <div className="title">Our Contribution</div>
              <p>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
            </div>
        </div>
        <div className="sectionInfo">
          <div className="infoBox">
            <div className="infoItem">
              <span className="title">5M</span>
              <span className="info">Daily User Engagements</span>
            </div>
            <div className="infoItem">
              <span className="title">$500K</span>
              <span className="info">Revenue Surge for an Platform</span>
            </div>
            <div className="infoItem">
              <span className="title">10x</span>
              <span className="info">ROAS on all our marketing campaigns</span>
            </div>
          </div>
        </div>
        <div className="bottomsection">
          <div className="bottominfo">
            <div className="title">Interested in delving deeper into the project?</div>
            <div className="des">
              <p>
              If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. 
              You can reach out to us via email at {` `}
              <a className='mail' href='mailto:hello@abc.com'>hello@abc.com</a> or give us a call at {` `}
              <a className='contact' href='tel:091 480 20802730'>+91 480 20802730</a>.
              </p>
            </div>
            <div className="contactBox">
                <button>Ring us on Skype</button>
                <button>Contact Us</button>
            </div>
          </div>
        </div>
        <div className="footer">
          <span>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</span>
        </div>
    </div>
  )
}

export default Home