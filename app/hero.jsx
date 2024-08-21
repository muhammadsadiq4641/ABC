import PropTypes from "prop-types";
import React, { Component } from "react";
import Marquee from "react-fast-marquee";

export class Heroo extends Component {
  static propTypes = {};

  render() {
    // const ToBottom = () => {
    //   window.scroll({ Bottom: 0, behavior: "smooth"})
    // }

    const ToBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    };

    return (
      <div className="h-calC100 relative">
        <div>
          <Marquee
            direction="right"
            className="bg-[#5299EC] py-2 text-white text-2xl font-extralight tracking-widest"
          >
            Join Our Webinar on Blockchain and Finance - Register Now!{" "}
            <span className="ms-5 font-Urbanist"> &#9734;</span> Join Our
            Webinar on Blockchain and Finance - Register Now!{" "}
            <span className="ms-5"> &#9734;</span> Join Our Webinar on
            Blockchain and Finance - Register Now!{" "}
            <span className="ms-5"> &#9734;</span> Join Our Webinar on
            Blockchain and Finance - Register Now!{" "}
            <span className="ms-5"> &#9734;</span>{" "}
          </Marquee>
        </div>
        <div className="flex lg:mt-10 lg:flex-row flex-col justify-between items-center container mx-auto">
          <div className="flex lg:flex-row flex-col flex-1 items-center 2xl:gap-20 gap-4 lg:pt-0 pt-4">
            <div className="flex lg:flex-col flex-row 2xl:gap-4 gap-2">
              <img className="w-9 cursor-pointer" src="/assets/xx-logo.png" />
              <img
                className="w-9 cursor-pointer"
                src="/assets/telegram-logo.png"
              />
              <img className="w-9 cursor-pointer" src="/assets/infi-logo.png" />
            </div>
            <div>
              <p className="sm:text-lg text-sm lg:text-start text-center word-spacing:-200px px-1">
                Sigma33 is a cutting-edge blockchain platform designed{" "}
                <br className="xl:block hidden" />
                to revolutionize the financial industry
              </p>
            </div>
          </div>
          <div className="flex-1 justify-end flex">
            <h1 class="GFG 2xl:tracking-widest 2xl:text-9xl lg:text-8xl font-Urbanist text-6xl font-bold">
              Sigma33
            </h1>
          </div>
        </div>
        <div className="container mx-auto ">
          <div className="flex lg:flex-row items-center flex-col lg:mt-10">
            <div className="lg:mx-0 mx-auto">
              <img
                className="lg:w-[450px] lg:h-[437px] h-[200px]"
                src="/assets/hero-bg.png"
              />
            </div>
            <div className="relative ">
              <div className="flex 2xl:flex-row flex-col 2xl:items-end justify-center ">
                <div>
                  <h1 className="2xl:text-[115px] font-Urbanist lg:text-7xl sm:text-6xl text-3xl leading-tight  text-[#504F4F] font-normal lg:text-start text-center">
                    Your Gateway to <br /> the Future of <br />
                    Finance
                  </h1>
                </div>
                <div className="flex justify-center lg:absolute 2xl:bottom-3 2xl:right-[200px] right-0 -bottom-5">
                  <button className="text-2xl lg:mt-0 px-4 py-2 items-center gap-3 text-white mb-16 rounded-[56px] flex bg-[#5299EC] ">
                    Enter App
                    <img src="./assets/btn-img.png" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img
          onClick={ToBottom}
          className="cursor-pointer sm:w-[100px] absolute 2xl:right-[300px] 2xl:bottom-[100px] sm:right-16 sm:bottom-16 right-0 w-[50px] h-[50px] sm:h-[100px] "
          src="./assets/scroll-down-img.png"
        />
        </div>
        
        
      </div>
    );
  }
}

export default Heroo;
