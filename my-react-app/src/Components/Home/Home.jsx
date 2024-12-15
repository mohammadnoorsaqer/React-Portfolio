import React from "react";
import mohammadNoorImage from "../images/image-removebg-preview.png"; // Import the image

const Home = () => {
  return (
    <div className="container">
      <div className="home" id="home">
        <div className="left">
          <div className="text">
            <h4>
              Mohammadnoor is a <span className="primary">web designer</span> and <br />
              <span className="primary">front-end developer</span>
            </h4>
            <pre>
              He crafts responsive websites where technologies 
              meet creativity
            </pre>
            <div className="btn">
              <button>
                <a href="mailto:mnoorsaqer@gmail.com" className="email-button">Contact me!!</a>
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="img">
            <div className="parent">
              <img
                src={mohammadNoorImage} // Use the imported image
                alt="mohammadnoor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
