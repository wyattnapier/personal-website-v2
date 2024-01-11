import {React, useState, useEffect} from 'react';
// resources
import powerliftingimage from './images/powerlifting.jpg'; // powerlifting
import runningimage from './images/turkeytrot.jpg'; // running
import skiingimage from './images/skiing.jpg'; // skiing
import dwgimage from './images/dwgconcert.jpg'; // dwg concert
import famimage from './images/family.jpg'; // family dinner
import cousinimage from './images/cousin.jpg' // posing w/ ella
import bananaimage from './images/banana.jpg'; // banana meal
// components
import Header from './Header.js';
import Loop from './Loop.js';
import Footer from './Footer.js';
// styling
import './App.css';


function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const imagesList = [
    { id: 0, src: powerliftingimage, alt: 'Powerlifting meet with Coach Alec'},
    { id: 1, src: runningimage, alt: 'Turket trot with family'},
    { id: 2, src: skiingimage, alt: 'Skiing on big pond'},
    { id: 3, src: dwgimage, alt: 'Del Water Gap concert with friends'},
    { id: 4, src: famimage, alt: 'Dinner with family'},
    { id: 5, src: cousinimage, alt: 'Me and my cousin Ella'},
    { id: 6, src: bananaimage, alt: 'Eating a banana'}
    // add more as needed
  ]

  const captionsList = [
    "I am the VT 90kg Collegiate Raw record holder for bench press, squat, and deadlift.",
    "I am a half-marathon runner!",
    "I am an intrepid skier, and have been since I could walk.",
    "I am an avid indie concert goer; check out my Spotify!",
    "I am a brother, son, grandson, nephew, and cousin.",
    "I am a cousin. Did I mention I am a cousin?",
    "I am a frequent consumer of bananas, especially in bread form."
  ]
  useEffect(() => {
    // Update window width when the component mounts
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Define JSX based on the window width
  let content;
  if (windowWidth > 600) {
    // big screen content
    content =  
    <div className="App">
      <div className="left-col">
        <Header />
        <Footer />
      </div>
      <div className="right-col">
        <Loop imagesList={imagesList} captionsList={captionsList}/> {/* perhaps change data structure so that the images line up with the captions better */}
      </div>
    </div>;
  } else {
    content =
    <div className="App">
      <div className="left-col">
        <Header />
      </div>
      <div className="right-col">
        <Loop imagesList={imagesList} captionsList={captionsList}/> {/* perhaps change data structure so that the images line up with the captions better */}
      </div>
      <div className="left-col">
        <Footer />
      </div>
    </div>;
  }

  return(
    <div>
      {content}
    </div>
    );
}

export default App;
