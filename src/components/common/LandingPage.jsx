import React, { useState } from "react";
// import ForParticipants from "./ForParticipants";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import BasicModal from "./SignUpModal";
import BannerVideo from "./BannerVideo";
import ImageCarousel from "./ImageCarousel";
import BannerItem from "./BannerItem";
import Footer from "./Footer";
const LandingPage = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const openModal = () => setOpenSignUpModal(true);
  const closeModal = () => setOpenSignUpModal(false);
  const navigate = useNavigate();
  const orgSlides = [
    {
      image: "/assets/org1.jpg",
      title: " Tap into Talent",
      description: ` Discover the next generation of innovators. Post your hackathon
      on UNITAR and connect with a global pool of talent. Watch as
      diverse teams bring fresh perspectives to your challenges.`,
    },
    {
      image: "/assets/org2.jpg",
      title: " Drive Innovation",
      description: ` Challenge participants with real-world problems and witness
      groundbreaking solutions. Fuel innovation within your
      organization and be at the forefront of industry advancements.`,
    },
    {
      image: "/assets/img1.jpg",
      title: "Boost Your Brand",
      description: `   Associate your organization with innovation. Be a catalyst for
      change and join a community that values pushing the boundaries of
      what's possible.`,
    },
  ];
  const slides = [
    {
      image: "/assets/img3.jpg",
      title: " Unlock Your Potential",
      description: ` Dive into a world of endless possibilities. Browse through a
      diverse range of hackathons hosted by top-notch organizations.
      Whether you're a coding prodigy, a design virtuoso, or a
      problem-solving guru, there's a hackathon just for you.`,
    },
    {
      image: "/assets/img2.jpg",
      title: "Forge Connections",
      description: `Connect with diverse minds from around the globe. Form teams that
      blend expertise, creativity, and drive. Together, you'll redefine
      what's possible.`,
    },
    {
      image: "/assets/img1.jpg",
      title: "Fostering Diversity for Inclusive Solutions",
      description: `Explore the dynamic landscape of diversity in the tech industry, where varied perspectives drive innovation. Join us on a journey of building solutions that transcend barriers, creating meaningful impact for people around the globe. Together, let's shape a future where technology serves as a catalyst for positive change, improving the lives of individuals and communities worldwide.`,
    },
    {
      image: "/assets/img4.jpg",
      title: "Showcase Your Skills",
      description: ` Make your mark in the tech and innovation landscape. Showcase your
      talents through innovative solutions, and grab the attention of
      potential employers and collaborators.`,
    },
  ];

  return (
    <div>
      <Navbar openModal={openModal} />
      <BasicModal openModal={openSignUpModal} handleClose={closeModal} />
      <div className="w-full h-screen text-center  ">
        <div className="w-full h-screen text-center relative ">
          <div className=" mx-auto p-2 flex justify-center">
            <div className="mt-[60px]">
              <h1 className="animated-text text-[#000] items-center text-center  lg:text-6xl font-extrabold leading-11 tracking-wider  ">
                Unleashing Innovation, <br /> One Hackathon at a Time!
              </h1>
              <p className="text-center lg:w-[588px] mt-7 ml-20 font-normal text-[#4d4d4d]">
                Join a global community of thinkers, dreamers, and doers.
                Whether you're here to conquer challenges or host groundbreaking
                hackathons, this is where innovation takes center stage.
              </p>
            </div>
          </div>{" "}
          <div className="flex gap-10 items-center justify-center md:w-full mt-[100px]">
            <button
              onClick={() => navigate("/part-signup")}
              className="bg-[#089BD9] rounded   text-white py-4 px-[20px] lg:w-[239px]  transition-transform transform hover:-translate-y-1"
            >
              For Participants
            </button>

            <button
              onClick={() => navigate("/org-signup")}
              className="py-4 px-[20px] rounded  border-2 lg:w-[239px] border-[#089BD9]  transition-transform transform hover:-translate-y-1"
            >
              For Organisers
            </button>
          </div>
          <div className="absolute hidden lg:block rounded-full  filter bottom-[230px]  right-[180px]  ">
            <img
              src="/assets/image 1.jpeg"
              className="rounded-full hidden lg:block border-[#b71079] border-2   w-[100px] h-[100px] "
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="absolute hidden lg:block left-[150px]  bottom-[80px] ">
            <img
              src="/assets/image 2.jpeg"
              className="rounded-full hidden lg:block border-[#db3b14] border-2 4 w-[100px] h-[100px] "
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <BannerVideo />
        <div className="bg-custom-blue w-[600px] flex justify-center mt-5">
          {" "}
          <p className="text-center text-white  text-[32px] mt-5 font-bold tracking-wider">
            FOR PARTICIPANTS
          </p>
        </div>
        <div>
          {" "}
          <ImageCarousel slides={slides} />
        </div>
        <div className="bg-custom-blue w-[600px] flex justify-center mt-5">
          <p className="  text-white    text-[32px] mt-5 font-bold tracking-wider">
            FOR ORGANIZERS
          </p>
        </div>
        <div>
          <ImageCarousel slides={orgSlides} />
        </div>
        <div>
          <p className="  text-custom-blue text-[32px]  font-bold tracking-wider mb-10 mt-10">
            UNITAR HACKATHON THEMES
          </p>
        </div>
        <BannerItem />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
