import React from "react";
const HackathonMedia = ({ cover_image_url, avatar_url }) => {
  const containerStyle = {
    position: "relative",
    width: "250 px",
    height: "200 px",
  };

  const coverStyle = {
    width: "250px",
    height: "200px",
  };

  const avatarStyle = {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "50px",
    height: "50px",
    borderRadius: "20px",
  };

  return (
    <div style={containerStyle}>
      <img src={cover_image_url} alt="Cover image" style={coverStyle} />
      <img src={avatar_url} alt="Avatar image" style={avatarStyle} />
    </div>
  );
};
export default HackathonMedia;
