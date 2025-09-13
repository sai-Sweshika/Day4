import React from "react";
import ProfileCard from "./Components/profile";
import profileImg from "./assets/vk.jpg";
import '../src/index.css'

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ProfileCard
        name="Virat Kohli"
        bio="Born: November 5, 1988, in Delhi, India.
            He is one of the greatest modern-day cricketers and a former captain of the Indian cricket team. Known for his aggressive batting style, sharp cricketing mind, and fitness discipline, he has redefined consistency in international cricket."
        image={profileImg}
      />
    </div>
  );
};

export default App;
