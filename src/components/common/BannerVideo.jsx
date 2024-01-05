import React from "react";

const BannerVideo = () => {
  return (
    <div className="banner-video-container">
      <video className="banner-video" autoPlay loop muted>
        <source src="/assets/unitar.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BannerVideo;
