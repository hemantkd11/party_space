import React from "react";
import Place1 from "../Images/place1.webp";
import Place3 from "../Images/place3.jpg";
// import { useNavigate } from "react-router-dom";
import On_space_place1 from "../Images/on_space_place1.jpg";
// import On_space_place3 from "../Images/on_space_place3.jpg";
// import onSpace_meeting from "../Images/onSpace_meeting.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Place1 from "../Images/place1.webp";
// import Place1 from "../Images/place1.webp";
import Card from "../Components/Card";
import into_onspace from "../Images/into_onspace.webp";
// import { Carousel } from "react-responsive-carousel";
import Slide_Show from "../Components/Slide";
const Home = () => {
  // const Navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-banner">
          <Slide_Show/>
          {/* <span className="span-baneer-title">Find Your Perfect Place To Enjoy With Friends & Family</span> */}          
          {/* <img src={Place1} alt='Banner' width="1100px"/> */}
          {/* <div className="banner-text">
            <div className="heading-home-onpace">
              <h1 style={{ color: "rgb(162, 212, 237)" }}>
                Find Your Perfect Place To Enjoy With Friends & Family
              </h1>
            </div>
            <div className="banner-btn">
              <button onClick={() => Navigate("/onspalce/places")}>
                Find Your Space
              </button>
            </div>
          </div> */}
          {/* <div className="slider-show"> */}
            {/* <Carousel
              className="carousel-style"
              infiniteLoop
              autoPlay
              showThumbs={false}
              
            >
              <div className="banner">
                <img src={On_space_place1} alt="onspace" />
              </div>
              <div className="banner">
                <img src={Place1} alt="onspace" />
              </div>
              <div className="banner">
                <img src={Place3} alt="onspace" />
              </div>
            </Carousel> */}
          {/* </div> */}
        </div>
      </div>

      <div className="home-intro-container">
        <Box />
      </div>
      <div className="services-main-container">
        <Services />
      </div>
    </div>
  );
};

export default Home;

const Box = () => {
  return (
    <div className="home-intro-wrapper">
      <div className="home-intro-main-box">
        <div className="intro-header">
          <div className="intro-header-heading">Introduction</div>
        </div>
        <div className="home-intro-box-text-logo column-reverse">
          <div className="home-intro-text">
            On-Space is a place were you find complete solution for your perfect
            party place, Here you just have to search for your location where
            you want to do party and enjoy with your love once.
            <br />
            {/* This app will not only give you space for party but also for your
            office meeting and other small funtions and all. */}
          </div>
          <div className="home-into-img">
            <img src={into_onspace} alt="onspace" />
          </div>
        </div>
        <div className="home-intro-box-text-logo">
          <div className="home-into-img">
            <img src={Place3} alt="onspace" />
          </div>
          <div className="home-intro-text">
            On-Space is a place were you find complete solution for your perfect
            party place, Here you just have to search for your location where
            you want to do party and enjoy with your love once.
            <br />
            {/* This app will not only give you space for party but also for your
            office meeting and other small funtions and all. */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services-container-box">
      <div className="services-wrapper">
        <div className="services-heading">Services</div>
        <div className="services-containt-box">
          <div className="services-contant-part1">
            <Card
              image={Place1}
              text_head="Fun Place"
              text="Place Where you can enjoy with your kids and friends. Through this app you can book place which near to you and you can also search place which comes under to your budget."
            />
            <Card
              image={On_space_place1}
              text_head="Party Place"
              text="Place Where you can enjoy with your kids and friends. Through this app you can book place which near to you and you can also search place which comes under to your budget."
            />
            <Card
              image={Place3}
              text_head="Enjoy With Family"
              text="Place Where you can enjoy with your kids and friends. Through this app you can book place which near to you and you can also search place which comes under to your budget."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
