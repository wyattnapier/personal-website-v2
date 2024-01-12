/*
* TODO:
* add more content:  hackathon, biking, overalls, CS
* maybe move resume into images foler and rename to 'resources' or 'assets'
*/
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const updateIndices = (selected, indices, len) => {
  let newIndices;
  for (let i = 0; i < len; i++) {
    if (indices[i] === selected) {
      indices[i] = -1;
      newIndices = indices.filter(index => index !== -1);
      break;
    }
  }
  if(indices.length <= 1) {
    newIndices = [...Array(len).keys()];
  }
  return newIndices
}

const ImagesComponent = ({ imagesList, captionsList }) => {
  const [indices, setIndices] = useState([...Array(imagesList.length).keys()]);
  let contentLength = imagesList.length;
  const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random()*contentLength));
  updateIndices(currentImageIndex, indices, imagesList);
  let deleteCount = 0;

  const handleSwitch = () => {
    let nextIndex = currentImageIndex
    while (nextIndex === currentImageIndex) {
      nextIndex = indices[Math.floor(Math.random()*indices.length)];
    }
    setCurrentImageIndex(nextIndex);
    console.log("indices pre update: ", indices)
    console.log("selected to be removed: ", nextIndex);
    setIndices(updateIndices(nextIndex, indices, contentLength));
    console.log("indices post update: ", indices)
    deleteCount = 0;
  };

  // each time you delete a character it increases the count
  // once you've deleted the entire string, switch images and index for captions
  // strings that are being typed (captions) will also be switched here
  const handleDelete = () => {
    deleteCount++;
    if(deleteCount === captionsList[currentImageIndex].length) {
      handleSwitch();
    }
  }

  return (
    <div className="main-wrapper">
      <img
        src={imagesList[currentImageIndex].src} // should be currentImageIndex instead
        alt={imagesList[currentImageIndex].alt}
      />
      <div> </div>
      <p>
        <Typewriter
          words={[captionsList[currentImageIndex]]} // 
          loop={Infinity} // keep looping forever!
          cursor
          // cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={30}
          delaySpeed={1500}
          onDelete={handleDelete} // check if done deleting
        />
      </p>
    </div>
  );
};

export default ImagesComponent;