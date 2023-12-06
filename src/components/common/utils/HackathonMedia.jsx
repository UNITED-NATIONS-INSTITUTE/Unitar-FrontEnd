import React from "react";
const HackathonMedia = ({ cover_image_url, avatar_url }) => {
  const containerStyle = {
    position: "relative",
    width: "200 px",
    height: "150 px",
  };

  const coverStyle = {
    width: "300px",
    height: "200px",
    borderRadius: "20px",
  };

  const avatarStyle = {
    position: "absolute",
    right: "10px",
    top: "100px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "3px solid #fff",
  };

  return (
    <div style={containerStyle}>
      <img src={cover_image_url} alt="Cover image" style={coverStyle} />
      <img src={avatar_url} alt="Avatar image" style={avatarStyle} />
    </div>
  );
};
export default HackathonMedia;
