/*
 * TODO:
 * add more content:  hackathon, biking, overalls, CS
 * maybe move resume into images foler and rename to 'resources' or 'assets'
 */
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

// from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  console.log("pre shuffle: ", array);
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  console.log("post shuffle: ", array);
  return array;
}

const ImagesComponent = ({ imagesList, captionsList }) => {
  const [indices, setIndices] = useState(
    shuffle([...Array(imagesList.length).keys()])
  ); // shuffled list of the indices of images/captions
  const [indicesIndex, setIndicesIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(
    indices[indicesIndex]
  );
  let deleteCount = 0;

  const handleSwitch = () => {
    let nextIndex = indicesIndex + 1;
    if (nextIndex >= indices.length) {
      setIndices(shuffle(indices));
      nextIndex = nextIndex % indices.length;
    }
    setIndicesIndex(nextIndex);
    setCurrentImageIndex(indices[nextIndex]);
  };

  // each time you delete a character it increases the count
  // once you've deleted the entire string, switch images and index for captions
  // strings that are being typed (captions) will also be switched here
  const handleDelete = () => {
    deleteCount++;
    if (deleteCount === captionsList[currentImageIndex].length) {
      handleSwitch();
    }
  };

  return (
    <div className="main-wrapper">
      <img
        src={imagesList[currentImageIndex].src}
        alt={imagesList[currentImageIndex].alt}
      />
      <div> </div>
      <p>
        <Typewriter
          words={[captionsList[currentImageIndex]]}
          loop={Infinity} // keep looping forever!
          cursor
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1800}
          onDelete={handleDelete} // check if done deleting
        />
      </p>
    </div>
  );
};

export default ImagesComponent;
