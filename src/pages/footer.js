import React from 'react';
import Lin from '../photos/linkedin_355994.png';
import './body.css';  // Import the CSS file where we'll define the animation styles

const Footer = () => {
  return (
    <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
      <div className="container text-center">
        <p>
          Notice: This website is not officially associated with Youtube. It does not host or copyrighted content on its server and all uploaded videos are directly saved from their CDN servers.
        </p>
        <br />
        <p>
          contact <br />
          <a href='https://www.linkedin.com/in/k-prem-kumar-019858271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noopener noreferrer" className="linkedin-link">
            <img src={Lin} alt="LinkedIn Profile" className="linkedin-icon" />
            Visit my LinkedIn profile
          </a>
        </p>
        <small>Copyright &copy; YOUTUBE VIDEO DOWNLOADER</small>
    <br/>
 <a href="https://beta.publishers.adsterra.com/referral/fwc7jaH51h">  <img alt="banner" src="https://landings-cdn.adsterratech.com/referralBanners/png/728%20x%2090%20px.png" />
      </div>
    </footer>
  );
};

export default Footer;
