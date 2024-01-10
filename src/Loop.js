// import React, {useState, useEffect} from 'react';
// import Caption from './Caption.js'

// function Loop ({imagesList, captionsList}) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const nextIndex = (currentImageIndex + 1) % imagesList.length;
//       setCurrentImageIndex(nextIndex);
//     }, 15000); // 15 seconds delay = 15000

//     return () => clearTimeout(timer);
//   }, [currentImageIndex, imagesList.length]);

//   return (
//     <div>
//       <img src={imagesList[currentImageIndex].src} alt={imagesList[currentImageIndex].alt} />
//       <Caption dataIndex={currentImageIndex} captionsList={captionsList}/>
//     </div>
//   );
// }

// export default Loop;


//// working suggestion - timing needs work ////
import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const ImagesComponent = ({ imagesList, captionsList }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [doneDeleting, setDoneDeleting] = useState(false);
  // const [deleteCount, setDeleteCount] = useState(0);
  let deleteCount = 0;

  const handleSwitch = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesList.length);
    // setDeleteCount(0);
    deleteCount = 0;
    // setDoneDeleting(false);
  };

  const handleDelete = () => {
    // setDeleteCount(deleteCount++);
    deleteCount++;
    if(deleteCount == captionsList[currentImageIndex].length) {
      // setDoneDeleting(true)
      handleSwitch();
    }
  }

  // const handleDone = () => {
  //   setDoneDeleting(true);
  // };

  return (
    <div>
      <img
        src={imagesList[currentImageIndex].src}
        alt={imagesList[currentImageIndex].alt}
      />
      <div></div>
      <Typewriter
        words={[captionsList[currentImageIndex]]}
        loop={Infinity} // Set loop to 1 to manually control looping
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        onDelete={handleDelete} // Switch image when typing ends
      />
    </div>
  );
};

export default ImagesComponent;

/////////////
// import React, { useEffect, useState } from 'react';
// import { Typewriter } from 'react-simple-typewriter';

// const ImagesComponent = ({ imagesList, captionsList }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(true);

//   const switchImage = () => {
//     const nextIndex = (currentImageIndex + 1) % imagesList.length;
//     setCurrentImageIndex(nextIndex);
//     setIsTyping(true); // Set back to true to allow typing to start for the next caption
//   };

//   const handleTypingStart = () => {
//     // Disable typing while it's ongoing
//     setIsTyping(false);
//   };

//   return (
//     <div>
//       <img
//         src={imagesList[currentImageIndex].src}
//         alt={imagesList[currentImageIndex].alt}
//       />
//       <Typewriter
//         words={captionsList}
//         loop={1} // Set loop to 1 to manually control looping
//         cursor
//         cursorStyle='_'
//         typeSpeed={70}
//         deleteSpeed={50}
//         delaySpeed={1000}
//         onTypingStart={handleTypingStart}
//         onTypingEnd={isTyping ? undefined : switchImage}
//       />
//     </div>
//   );
// };

// export default ImagesComponent;
