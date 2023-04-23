import React from "react";
import faceimg from '../media/facebook-48.png'
import twittimg from '../media/twitter48.png'
import instaimg from '../media/instagram-94.png'
import youimg from '../media/youtube-48.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ExperienceSec(){
    return (
        <div class="contact">
            <div class="contacts">
                <div class="contactUs">
                    <h3 class="text tex">Contact US</h3>
                </div>
                <div class="contactf divs">
                    <h3 class="text tex">Content</h3><br class="brs" />
                    <p class="Parag">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nulla dolores soluta tenetur omnis.</p>
                    <p class="cont Parag">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maiores! Vero reprehenderit tempora aperiam accusantium nihil earum qui, quasi aspernatur, dignissimos culpa quidem corporis, odio id mollitia aliquid pariatur voluptatibus!</p>
                </div>
                <div class="contactflex divs">
                    <h3 class="text tex">About</h3><br class="brs" />
                    <a class="nav-link" href="#">Home</a><br />
                    <a class="nav-link" href="#">Programme</a><br />
                    <a class="nav-link" href="#">Gallery</a><br />
                    <a class="nav-link" href="#">Contact</a><br />
                </div>
                <div class="quick divs">
                    <h3 class="text tex">Address</h3><br class="brs" />
                    <p class="Parag">Lagos Nigeria <br />
                    10 Lambo Iasunwo firstgate opp. Laspotech Ikorodu North Lagos NG, 100001, Ikorodu.</p>
                </div>
                <div class="icons divs">
                    <h3 class="text tex">Follow Us</h3>
                    <a href="#"><img src={faceimg} className="faceimg" /></a>
                    <a href="#"><img src={twittimg} className="twittimg" /></a>
                    <a href="#"><img src={instaimg} className="instaimg" /></a>
                    <a href="#"><img src={youimg} className="youimg" /></a>
                </div>
            </div>
            <div class="copyright">
                <p>©2023 whiteLions Basketball Academy</p>
            </div>
        </div>    
    );
}

export default ExperienceSec;