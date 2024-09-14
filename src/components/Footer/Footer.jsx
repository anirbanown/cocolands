import React from "react";
import logo from "../../asset/BharatSe_logo2.png";

import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <div className="app__footer-content">
        <div className="app__footer-content-1">
          <div className="logo">
            <img className="h-full w-full object-cover" src={logo}></img>
          </div>
          <p className="p__font1 mb-5">
            Your Not-A-Regular E-Commerce Site. An Unique Solution to Transform
            the world of Logistics. Pushing culture and India Post to new
            heights. Connecting bridges between Diaspora and Local Artisans in a
            Decentralised, Secure and Seamless way.
          </p>
          <ul>
            <li>
              <a href="#">
                <AiFillFacebook className="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillInstagram className="insta" />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillTwitterCircle className="twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillLinkedin className="linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <div className="app__footer-content-2">
          <h2 className="h2__font1">Market Place</h2>
          <ul>
            <li>
              <a href="#">All NFTs</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Art</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
            <li>
              <a href="#">Utility</a>
            </li>
            <li>
              <a href="#">Music</a>
            </li>
            <li>
              <a href="#">Domain Name</a>
            </li>
          </ul>
        </div>
        <div className="app__footer-content-2">
          <h2 className="h2__font1">My Account</h2>
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Favorite</a>
            </li>
            <li>
              <a href="#">My Collections</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </div>
        <div className="app__footer-content-3">
          <h2 className="h2__font1">Stay in The Loop</h2>
          <p className="p__font1">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>
          <div className="app__footer-input">
            <input
              className="input_1"
              type="email"
              placeholder="Enter your email "
            />
            <input className="input_2" type="submit" value="Subscribe Now" />
          </div>
        </div>
      </div>
      <span className="p__font1">Copyright © 2024 - DEVx AVES & Co.</span>
    </div>
  );
};

export default Footer;
