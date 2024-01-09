import logo from './logo.svg';
import './App.css';
import {React, useState} from 'react';
import image1 from './images/powerlifting.jpg'; // powerlifting
import image2 from './images/turkeytrot.jpg'; // running
import Loop from './Loop.js';
// import useState from 'react';

function App() {
  // const [currComponent, setCurrComponent] = useState("education");
  // const pages = ["education", "lifting", "family", "hiking", "kayaking", "biking"]

  // wait for a bit then loop this shit
  // const index = Math.floor(Math.random() * length(pages))
  // setCurrComponent(pages[index])

  const imagesList = [
    { id: 1, src: image1, alt: 'Powerlifter', size: 12},
    { id: 2, src: image2, alt: 'Runner', size: 12}
    // add more as needed
  ]

  const captionsList = [
    "the Vermont 90kg Collegiate Raw record holder for bench press, squat, and deadlift",
    "a runner!"
  ]

  return (
    <div className="App">
      <Loop imagesList={imagesList} captionsList={captionsList}/>

      {/* put the footer in here 
            should have contact info (linkedIn and email)
            resume linked there too
      */}
    </div>
  );
}

export default App;
