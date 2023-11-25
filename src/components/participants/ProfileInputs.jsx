import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const ProfileInputs = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col text-gray-500">
      <form className="flex flex-col">
        <label className="mt-5 mb-2 text-sm">Username</label>
        <input
          type="text"
          className="w-[300px] px-3 py-2 border border-grey-600 rounded text-xs"
          placeholder="Amisi"
        />
        <label className="mt-5 mb-2 text-sm">Email</label>
        <input
          type="email"
          className="w-[600px] px-3 py-2 border border-grey-600 rounded text-xs"
          placeholder="amisicaves@gmail.com"
        />
        <label className="mt-5 mb-2 text-sm">Phone number</label>
        <PhoneInput
          className="flex gap-10 w-[300px] text-md px-3 py-2 border border-grey-600 rounded-md"
          placeholder="702345645"
          value={value}
          onChange={setValue}
        />
        <div className="flex flex-row gap-5">
          <div className="flex flex-col">
            <label className="mt-5 mb-2 text-sm">Lives in</label>
            <input
              type="text"
              className="w-[300px] px-3 py-2 border border-grey-600 rounded text-xs"
              placeholder="Lagos,Nigeria"
            />
          </div>
          <div className="flex flex-col">
            <label className="mt-5 mb-2 text-sm">Street address</label>
            <input
              type="text"
              className="w-[280px] px-3 py-2 border border-grey-600 rounded text-xs"
              placeholder="Yoruba 45"
            />
          </div>
        </div>
        <label className="mt-5 mb-2 text-sm">Password</label>
        <input
          type="password"
          className="w-[600px] px-3 py-2 border border-grey-600 rounded text-xs"
          placeholder="**********"
        />
        <button
          type="submit"
          className="text-white font-semibold bg-custom-blue rounded-md p-2 w-[150px] mt-5"
        >
          Update profile
        </button>
      </form>
    </div>
  );
};

export default ProfileInputs;
