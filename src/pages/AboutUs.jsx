import React from "react";
import "./AboutUs.css";
import aboutImage from "../assets/about-image.png"; 
function AboutUs() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
  We are a passionate group of students from USTHB University, united through our commitment to raising awareness and providing support for breast cancer. Our mission is to educate and empower individuals, creating a nurturing environment for those affected by this disease.
</p>
<p>
  Through a variety of initiatives, events, and resources, we strive to make a meaningful impact in the lives of individuals and families touched by breast cancer. Our participation in the 2nd edition of the Pinktober hackathon has fueled our determination to develop this website as a platform for sharing knowledge, resources, and stories that inspire hope and resilience.
</p>

        </div>
        <img src={aboutImage} alt="About Us" className="about-image" />
      </div>
    </section>
  );
}

export default AboutUs;
