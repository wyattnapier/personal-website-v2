/*
* TODO: adjust the ddealy after finish typing
* add a header with my name
* add more content: ski instructing or patrolling, hackathon, biking, family, overalls, concerts (link spotify on that one if possible), BU, CS
* styling: round images a little bit, change background color, link colors, add margin behind footer
*/
import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const ImagesComponent = ({ imagesList, captionsList }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [doneDeleting, setDoneDeleting] = useState(false);
  let deleteCount = 0;

  const handleSwitch = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesList.length);
    deleteCount = 0;
  };

  // each time you delete a character it increases the count
  // once you've deleted the entire string, switch images and index for captions
  // strings that are being typed (captions) will also be switched here
  const handleDelete = () => {
    deleteCount++;
    if(deleteCount == captionsList[currentImageIndex].length) {
      handleSwitch();
    }
  }

  return (
    <div>
      <img
        src={imagesList[currentImageIndex].src}
        alt={imagesList[currentImageIndex].alt}
      />
      <div></div>
      <p>
        I am {/* this comment is here just to get the spacing right */}
        <Typewriter
          words={[captionsList[currentImageIndex]]} // 
          loop={Infinity} // keep looping forever!
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          onDelete={handleDelete} // check if done deleting
        />
      </p>
    </div>
  );
};

export default ImagesComponent;