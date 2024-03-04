import React from 'react';
import "./ImageGrallery.css";

const ImageGrallery = ({ fetchData }) => {
  return (
    <div className="images-wrapper">
        {fetchData.map((data) => (
          <div className='image' key={data.id}>
              <a href={data.pageURL} target='_blank'>
            <img src={data.webformatURL} alt="" />
            </a>
          </div>
        ))}
    </div>
  );
};

export default ImageGrallery
