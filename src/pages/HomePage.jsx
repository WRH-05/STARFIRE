import React from 'react';
import './HomePage.css';
import thumbnail from '../assets/thumbnail.png';
import ribon from '../assets/ribon.png'; 

function HomePage() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h2>Breast Cancer Awareness</h2>
        <p>Together, we are a powerful force. Each step we take brings us closer to hope, healing, and a world without breast cancer.
           Let's join hands in courage, compassion, and awareness, transforming lives and igniting change.
        <p></p> Together, we can empower each other, share stories, and light the path toward a brighter future. Stand with us, and let’s make every moment count in the fight against breast cancer!</p>
        <a href="#join" className="join-btn">Join Us Now</a>
      </div>
      <div className="home-banner">
        <img src={thumbnail} alt="thumb" className="thumb-image" />
      </div>
      <img src={ribon} alt="ribon" className="ribon-image" />
    </section>
  );
}

export default HomePage;
