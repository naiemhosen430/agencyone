import React from "react";

export default function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="footer_div one_box">
          <h1>Trustency</h1>
          <p>Lorem, ipsum dolor sit amet consectetur ab</p>
          <div class="search_box">
            <input type="search" placeholder="Enter your email...." />
            <button>Subcribe</button>
          </div>
          <div class="image_box flex">
            <img src="image/icons/linkedin-in-brands.svg" alt="" />
            <img src="image/icons/twitter-brands.svg" alt="" />
            <img src="image/icons/facebook-f-brands.svg" alt="" />
            <img src="image/icons/instagram-brands.svg" alt="" />
          </div>
        </div>
        <div class="footer_div">
          <h1>About</h1>
          <ul>
            <li>About</li>
            <li>Submit an issue</li>
            <li>GitHub Repo</li>
            <li>Stack</li>
          </ul>
        </div>
        <div class="footer_div">
          <h1>Getting started</h1>
          <ul>
            <li>Introduction</li>
            <li>Usage</li>
            <li>Globals</li>
            <li>Elements</li>
            <li>Collection</li>
          </ul>
        </div>
        <div class="footer_div">
          <h1>Resources</h1>
          <ul>
            <li>Monitoring Grader</li>
            <li>Video Tuturial</li>
            <li>Term & Service</li>
            <li>Marketplace</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
