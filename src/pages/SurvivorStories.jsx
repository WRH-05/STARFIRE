import React, { useState } from "react";
import "./SurvivorStories.css";

function SurvivorStories() {
  const [stories] = useState([
    {
      id: "1",
      name: "Jane Doe",
      story: "I fought breast cancer and won! My journey was tough, but I never lost hope.",
    },
    {
      id: "2",
      name: "Alice Smith",
      story: "Early detection saved my life. I encourage everyone to get regular check-ups!",
    },
    {
      id: "3",
      name: "Mary Johnson",
      story: "With support from my family and friends, I was able to overcome breast cancer.",
    },
    {
      id: "4",
      name: "Linda Williams",
      story: "I found strength I never knew I had. Together, we can make a difference.",
    },
  ]);

  return (
    <section className="survivor-stories" id="survivor-stories">
      <h2>Survivor Stories</h2>
      <div className="stories-container">
        {stories.map((s) => (
          <div className="story-card" key={s.id}>
            <h3 className="story-name">{s.name}</h3>
            <p className="story-text">{s.story}</p>
          </div>
        ))}
      </div>
      <a href="#plans" className="examination-btn">Go to Examination Test</a>
    </section>
  );
}

export default SurvivorStories;
