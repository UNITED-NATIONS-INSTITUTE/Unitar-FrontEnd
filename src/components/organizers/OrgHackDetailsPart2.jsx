import React from "react";

const OrgHackDetailsPart2 = () => {
  const texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  ];
  return (
    <div className="flex flex-col w-[500px]">
      <h1 className="mt-0 text-gray-600 font-bold  text-[20px]">
        Build4SDGs hackathon
      </h1>
      <p className="text-xs text-gray-600">
        Created by <span className="text-black font-semibold">IBM careers</span>
      </p>
      <div>
        <p className="text-sm  font-semibold mt-5">Highlights</p>
        <p className="text-xs mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <div>
        <p className="text-sm  font-semibold mt-5">Description</p>
        <p className="text-xs mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          convallis ultrices nisi, ac pellentesque tortor aliquet ut. Sed eget
          imperdiet orci. Donec metus est, euismod quis metus vel, pretium
          elementum dolor. Donec id risus nec enim consectetur dictum non at
          dolor. Ut fermentum, nulla sed malesuada rhoncus, ipsum libero lacinia
          dolor, ut cursus sapien ipsum in risus. Donec eu erat a lorem
          facilisis rutrum
        </p>
      </div>
      <div>
        <p className="text-sm  font-semibold mt-5">Deliverables</p>
        <p className="text-xs mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          convallis ultrices nisi, ac pellentesque tortor aliquet ut. Sed eget
          imperdiet orci. Donec metus est, euismod quis metus vel, pretium
          elementum dolor. Donec id risus nec enim consectetur dictum non at
          dolor. Ut fermentum, nulla sed malesuada rhoncus, ipsum libero lacinia
          dolor, ut cursus sapien ipsum in risus. Donec eu erat a lorem
          facilisis rutrum
        </p>
      </div>
      <div>
        <p className="text-sm font-semibold mt-5">Goals</p>
        {texts.map((text, index) => (
          <ol>
            <li className=" text-xs mt-5" key={index}>
              {text}
            </li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default OrgHackDetailsPart2;
