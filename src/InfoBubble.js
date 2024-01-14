import cancellogo from './favicons/cancel-50.png';

function InfoBubble ({hideInfo}) {
  return (
    <div className="infobubble-wrapper">
      <div className="infobubble-content">
        <p>I was inspired to make this project by a digital pictureframe that my siblings and I gave my mom for Christmas.
         It loops through photos we send to it via an app and I thought it showed the multi-dimensionality of our family.</p>
        <p>I would like to thank <a href="https://www.linkedin.com/in/morgan-myers-18368724a/">Morgan Myers</a> for advising the styling of this website. I also want to credit <a href="https://icons8.com/">Icons8</a> and <a href="https://favicon.io/">Favicon</a> for the icons.</p>
        <button onClick={hideInfo} ><img className="cancel-logo" src={cancellogo} alt="Close popup"/></button>
      </div>
    </div>
  )
}

export default InfoBubble;