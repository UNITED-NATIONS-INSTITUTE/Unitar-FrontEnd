// BannerItem.jsx
"use client";
import React from "react";
import FeatureBanner from "./FeatureBanner";
import { icon1, icon2, icon3, icon4, icon5, icon6 } from "../../assets";

const BannerItem = () => {
  return (
    <div className="bg-banner">
      <div className=" grid grid-cols-3 gap-4 mx-auto pr-20 py-16">
        <FeatureBanner
          icon="/assets/icon1.png"
          heading="Employment and Livelihoods Development"
          text="Foster solutions that contribute to the development of sustainable employment opportunities and the enhancement of livelihoods.

          "
        />

        <FeatureBanner
          icon="/assets/icon2.png"
          heading="Emerging Technologies"
          text=" Encourage the exploration and development of cutting-edge technologies that have the potential to transform industries."
        />
        <FeatureBanner
          icon="/assets/icon5.png"
          heading="Climate Change"
          text=" Foster solutions that contribute to mitigating the impact of climate change and promoting environmental sustainability.

          "
        />
        <FeatureBanner
          icon="/assets/icon3.png"
          heading="Accessibility and Inclusion"
          text=" Advocate for projects that prioritize accessibility and inclusion for all individuals, regardless of abilities."
        />

        <FeatureBanner
          icon="/assets/icon4.png"
          heading="Social Impact"
          text="Promote solutions that address social challenges and have a positive impact on communities."
        />
      </div>
    </div>
  );
};

export default BannerItem;
