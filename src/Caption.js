import React, {useState} from 'react';
import { Typewriter } from 'react-simple-typewriter'; // https://www.npmjs.com/package/react-simple-typewriter

///// calculate the speed that you need to write and delete the captino based off of the length of the word
// allow for a constant number of ms for the delay
// delete should be some factor faster than typing

function Caption ({dataIndex, captionsList}) {

  return (
    <div> {/* this wrapper is just for safekeeping */}
      <h1 style={{padding: "2vw", margin: 'auto 0', fontWeight: 'normal' }}>
        I am {' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>

          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['', captionsList[dataIndex]]}
            loop={Infinity} // Infinity before
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  )
}

export default Caption;