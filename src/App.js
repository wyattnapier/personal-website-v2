import {React, useState} from 'react';
// resources
import powerliftingimage from './images/powerlifting.jpg'; // powerlifting
import runningimage from './images/turkeytrot.jpg'; // running
import skiingimage from './images/skiing.jpg'; // skiing
import dwgimage from './images/dwgconcert.jpg'; // dwg concert
// components
import Header from './Header.js';
import Loop from './Loop.js';
import Footer from './Footer.js';
import powerlifting from './images/powerlifting.jpg';
// styling
import './App.css';


function App() {

  const imagesList = [
    { id: 0, src: powerliftingimage, alt: 'Powerlifter'},
    { id: 1, src: runningimage, alt: 'Runner'},
    { id: 2, src: skiingimage, alt: 'Skier'},
    { id: 3, src: dwgimage, alt: 'Concert'}
    // add more as needed
  ]

  const captionsList = [
    "the Vermont 90kg Collegiate Raw record holder for bench press, squat, and deadlift.",
    "a half-marathon runner!",
    "a lifelong intrepid skier.",
    "an avid indie concert goer, especially with friends!"
  ]

  return (
    <div className="App">
      <Header />
      <Loop imagesList={imagesList} captionsList={captionsList}/> {/* perhaps change data structure so that the images line up with the captions better */}
      <Footer />
    </div>
  );
}

export default App;
