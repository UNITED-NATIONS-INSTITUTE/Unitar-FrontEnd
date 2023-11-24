import React from "react";
import Avatars from "../common/Avatars";

const Hackathons = () => {
  const images = [
    { name: "project #1", url: "image1.svg", description: "" },
    { name: "project #2", url: "image2.png" },
    { name: "project #3", url: "image3.png" },
    { name: "project #4", url: "image4.png" },
  ];
  return (
    <div className="flex space-x-4 mt-5 ml-4">
      {images.map((image, index) => (
        <div key={index} className="flex flex-col iems-center mb-4">
          <img
            key={index}
            src={`/assets/${image.url}`}
            alt={`image ${index + 1}`}
            width="250"
            height="200"
          />
          <p className="mt-2 text-sm text-gray-500">{image.name}</p>
          <p className="mt-2 text-sm  font-bold">Build4SDGs</p>
          <p className="mt-2 text-xs text-gray-500">
            Build4SDGs is a sustainable development startup based in africa
            working torwards SDGs
          </p>
          <div className="flex gap-5">
            <button className="border border-blue-500 rounded-md text-blue-500 w-1/2 text-xs mt-4 py-1">
              View project
            </button>
            <Avatars />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Hackathons;
