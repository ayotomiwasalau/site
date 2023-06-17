import React from "react";
import faceimg from '../media/facebook-48.png'
import twittimg from '../media/twitter48.png'
import instaimg from '../media/instagram-94.png'
import youimg from '../media/youtube-48.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ContactSec(){
    return (
        <div class="contact">
            <div class="contacts">
                <div class="contactf">
                    <h3>Access</h3><br class="brs" />
                    <p> Our access section serves as your gateway to all things basketball. 
                    With a diverse array of articles, analysis, tutorials, and features,
                     we aim to cater to the diverse interests and passions of the basketball community. </p>
                    <p class="cont">At WhiteLion Basketball Academy, our Content section is the ultimate destination for basketball enthusiasts seeking a
                     wealth of engaging and informative material.</p>
                </div>
                <div class="contactflex">
                    <h3>About</h3><br class="brs" />
                    <a class="nav-link" href="#">Home</a><br />
                    <a class="nav-link" href="#">Programme</a><br />
                    <a class="nav-link" href="#">Gallery</a><br />
                    <a class="nav-link" href="#">Contact</a><br />
                </div>
                <div class="quick">
                    <h3>Address</h3><br class="brs" />
                    <p>Lagos Nigeria</p>
                    <p>10 Lambo Iasunwo firstgate opp. Laspotech Ikorodu North Lagos NG, 100001, Ikorodu.</p>
                </div>
                <div class="icons">
                    <h3>Follow Us</h3>
                    <a href="#"><img src={faceimg} className="faceimg" /></a>
                    <a href="#"><img src={twittimg} className="twittimg" /></a>
                    <a href="#"><img src={instaimg} className="instaimg" /></a>
                    <a href="#"><img src={youimg} className="youimg" /></a>
                </div>
            </div>
            <div class="copyright">
                <footer>©2023 whiteLions Basketball Academy</footer>
            </div>
        </div>    
    );
}

export default ContactSec;