import React from 'react';
import loadingGif from '../Asset/Loading/Loading7.gif';
import "../components/Loading.css"
const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loadingGif} alt="Loading..." className="loading-gif" />
    </div>
  );
};

export default Loading;