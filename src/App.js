import {React, useState} from 'react';
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
    "the VT 90kg Collegiate Raw record holder for bench press, squat, and deadlift.",
    "a half-marathon runner!",
    "an intrepid skier, and have been since I could walk.",
    "an avid indie concert goer, especially with friends!",
    "a brother, son, grandson, nephew, and cousin",
    "a cousin. Did I mention I am a cousin?",
    "a frequent consumer of bananas, especially in bread form."
  ]

  return (
    <div className="App">
      <div className="left-col">
        <Header />
        <Footer />
      </div>
      <div className="right-col">
        <Loop imagesList={imagesList} captionsList={captionsList}/> {/* perhaps change data structure so that the images line up with the captions better */}
      </div>
    </div>
  );
}

export default App;
