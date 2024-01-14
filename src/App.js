import {React, useState, useEffect} from 'react';
// resources
import powerliftingimage from './images/powerlifting.jpg'; // powerlifting
import runningimage from './images/turkeytrot.jpg'; // running
import skiingimage from './images/skiing.jpg'; // skiing
import dwgimage from './images/dwgconcert.jpg'; // dwg concert
import famimage from './images/family.jpg'; // family dinner
import cousinimage from './images/cousin.jpg' // posing w/ ella
import bananaimage from './images/banana.jpg'; // banana meal
import hikingimage from './images/hiking.jpg'; // hiking
import plantingimage from './images/planting.jpg'; // ctwk planting in costa rica
import kejicanoeimage from './images/kejicanoe.jpg'; // canoeing
import vermontimage from './images/vermont.jpg'; // VT views
import bostonimage from './images/boston.jpg'; // Boston views
import patrolimage from './images/wyattchairlift.jpg'; // patrol on chairlift
import hotpotimage from './images/hotpot.jpg'; // hotpot
import soccersoloimage from './images/soccersolo.jpg'; // soccer solo
import bhacksimage from './images/bhacks_2.jpg'; // bostonhacks
import bikingimage from './images/biking.jpg'; // biking
import breadimage from './images/bread.jpg'; // bread meal
import cheffingimage from './images/cheffing.jpg'; // cheffing
import growthimage from './images/growth.jpg'; // growth
import miamibeachimage from './images/miamibeach.jpg'; // miami beach
import mumsimage from './images/mums.jpg'; // son
import reverebeachimage from './images/reverebeach.jpg'; // revere beach
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
    // { id: 5, src: cousinimage, alt: 'Me and my cousin Ella'},
    // { id: 6, src: bananaimage, alt: 'Eating a banana'},
    { id: 7, src: hikingimage, alt: 'Hiking with my sister Hailey'},
    { id: 8, src: plantingimage, alt: 'Planting trees in Costa Rica'},
    // { id: 9, src: kejicanoeimage, alt: 'Dog Keji and canoe'},
    // { id: 10, src: bikingimage, alt: 'Biking'},
    { id: 11, src: patrolimage, alt: 'Ski patrol on chairlift'},
    { id: 12, src: vermontimage, alt: 'Vermont views'},
    { id: 13, src: bostonimage, alt: 'Boston views'},
    { id: 14, src: hotpotimage, alt: 'Hotpot in boston'},
    { id: 15, src: soccersoloimage, alt: 'Soccer'},
    { id: 16, src: reverebeachimage, alt: 'Revere Beach'},
    { id: 17, src: bhacksimage, alt: 'Speaking at BostonHacks'}
    // add more as needed
  ]

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
    "I am a member of BostonHacks; a student org that orchestrates BU's largest annual hackathon!"
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
  if (windowWidth >= 768) {
    // big screen content
    content =  
    <div className="App">
      <div className="left-col">
        <Header bigWindow={true}/>
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
        <Header bigWindow={false}/>
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
