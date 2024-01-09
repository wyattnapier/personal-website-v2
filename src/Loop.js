import React, {useState, useEffect} from 'react';
import Caption from './Caption.js'

function Loop ({imagesList, captionsList}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentImageIndex + 1) % imagesList.length;
      setCurrentImageIndex(nextIndex);
    }, 8000); // 20 seconds delay = 20000

    return () => clearTimeout(timer);
  }, [currentImageIndex, imagesList.length]);

  return (
    <div>
      <img src={imagesList[currentImageIndex].src} alt={imagesList[currentImageIndex].alt} />
      <Caption dataIndex={currentImageIndex} captionsList={captionsList}/>
    </div>
  );
}

export default Loop;