// BannerItem.jsx
"use client";
import React from "react";
import FeatureBanner from "./FeatureBanner";
import { icon1, icon2, icon3, icon4, icon5, icon6 } from "../../assets";

const BannerItem = () => {
  return (
    <div className="bg-[#1C272E]">
      <h3 className="text-white text-4xl font-bold text-center pt-20">
        Check all features
      </h3>

      <div className=" grid grid-cols-3 gap-4 mx-auto pr-20 py-16">
        <FeatureBanner
          icon={icon1}
          heading="Diverse Hackathons"
          text="Uncover a spectrum of challenges tailored to your expertise. Find hackathons that resonate with your skills and passions."
        />

        <FeatureBanner
          icon={icon2}
          heading="Global Collaboration Hub"
          text=" Connect with innovators from around the world. Build dynamic teams, exchange ideas, and collaborate seamlessly to tackle challenges that transcend borders."
        />
        <FeatureBanner
          icon={icon3}
          heading="Global Collaboration Hub"
          text=" Connect with innovators from around the world. Build dynamic teams, exchange ideas, and collaborate seamlessly to tackle challenges that transcend borders."
        />
        <FeatureBanner
          icon={icon4}
          heading="Effortless Hosting for Organizations"
          text=" Post and manage hackathons with intuitive tools, reaching a global audience and tapping into a diverse pool of talent."
        />

        <FeatureBanner
          icon={icon5}
          heading="Secure Intellectual Property"
          text=" Our platform prioritizes the security and confidentiality of all users, ensuring a safe space for creativity to flourish."
        />
        <FeatureBanner
          icon={icon6}
          heading=" Continuous Support and Resources"
          text="  Access a wealth of resources, mentorship opportunities, and a dedicated support team to ensure a smooth experience for both participants and organizations."
        />
      </div>
    </div>
  );
};

export default BannerItem;
