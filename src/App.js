import { React, useState, useEffect } from "react";
// resources
import images from "./Images.js";
// info logos
import hexc4infologo from "./favicons/hexc4-info-50.png";
import hex33infologo from "./favicons/hex33-info-50.png";
// components
import Header from "./Header.js";
import Loop from "./Loop.js";
import Footer from "./Footer.js";
// styling
import "./App.css";
import InfoBubble from "./InfoBubble.js";

/* 
TODO:
- sync up the loading of the images
- project timeline page

BIG GOALS:
- add a recipes page to hold all of my recipes
  - build a json file to go with it
  - use json file to generate recipes based off ingredients that I have
- finish songcrostics and incoporate?
- concert recommender for friends
- rpe calculator and max calculator
*/

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showPopup, setShowPopup] = useState(false);

  const imagesList = [
    {
      id: 0,
      src: images.powerlifting,
      alt: "Powerlifting meet with Coach Alec",
    },
    { id: 1, src: images.running, alt: "Turket trot with family" },
    { id: 2, src: images.skiing, alt: "Skiing on big pond" },
    {
      id: 3,
      src: images.dwgConcert,
      alt: "Del Water Gap concert with friends",
    },
    { id: 4, src: images.familyDinner, alt: "Dinner with family" },
    // { id: 5, src: images.cousinPosing, alt: 'Me and my cousin Ella'},
    // { id: 6, src: images.bananaMeal, alt: 'Eating a banana'},
    { id: 7, src: images.hiking, alt: "Hiking with my sister Hailey" },
    { id: 8, src: images.planting, alt: "Planting trees in Costa Rica" },
    // { id: 9, src: images.canoeing, alt: 'Dog Keji and canoe'},
    // { id: 10, src: images.biking, alt: 'Biking'},
    { id: 11, src: images.patrolChairlift, alt: "Ski patrol on chairlift" },
    { id: 12, src: images.vermontViews, alt: "Vermont views" },
    { id: 13, src: images.bostonViews, alt: "Boston views" },
    { id: 14, src: images.hotpot, alt: "Hotpot in boston" },
    { id: 15, src: images.soccerSolo, alt: "Soccer" },
    { id: 16, src: images.revereBeach, alt: "Revere Beach" },
    { id: 17, src: images.bostonHacks, alt: "Speaking at BostonHacks" },
    // add more as needed
  ];

  const captionsList = [
    "I am the VT 90kg Collegiate Raw record holder for bench press, squat, and deadlift.",
    "I am a half-marathon runner!",
    "I am an intrepid skier, and have been since I could walk.",
    "I am an avid indie concert goer; check out my Spotify!",
    "I am a brother, son, grandson, nephew, and cousin. My family is everything to me.",
    // "I am a cousin. Did I mention I am a cousin?",
    // "I am a frequent consumer of bananas, especially in bread form.",
    "I am a hiker. This was my longest at around 20 miles.",
    "I am fighting for the climate. My team planted over 1,200 trees in Costa Rica.",
    // "I am a dog dad and we love to canoe together.",
    // "I am a biker",
    "I am a former ski patroller and now a ski instructor.",
    "I am from Vermont. I love Vermont. I LOVE LOVE LOVE VERMONT!",
    "I am falling in love with Boston and my life there.",
    "I am always excited to try new things, especially food.",
    "I am an *almost* retired soccer player.",
    "I am so much happier outside and in the sun!",
    "I am a member of BostonHacks; a student org that orchestrates BU's largest annual hackathon!",
  ];

  const showInfo = () => {
    setShowPopup(true);
  };

  const hideInfo = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    // Update window width when the component mounts
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Define JSX based on the window width
  let content;
  if (windowWidth >= 768) {
    // big screen content (row form)
    content = (
      <div className="App">
        <button onClick={showInfo}>
          <img className="ilogo" src={hexc4infologo} alt="More info" />
        </button>
        {showPopup && <InfoBubble hideInfo={hideInfo} />}
        <div className="left-col">
          <Header bigWindow={true} />
          <Footer />
        </div>
        <div className="right-col">
          <Loop imagesList={imagesList} captionsList={captionsList} />{" "}
          {/* perhaps change data structure so that the images line up with the captions better */}
        </div>
      </div>
    );
  } else {
    content = (
      // small screen content (column form)
      <div className="App">
        <button onClick={showInfo}>
          <img className="ilogo" src={hex33infologo} alt="More info" />
        </button>
        {showPopup && <InfoBubble hideInfo={hideInfo} />}
        <div className="left-col">
          <Header bigWindow={false} />
        </div>
        <div className="right-col">
          <Loop imagesList={imagesList} captionsList={captionsList} />{" "}
          {/* perhaps change data structure so that the images line up with the captions better */}
        </div>
        <div className="left-col">
          <Footer />
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default App;
