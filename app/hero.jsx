import PropTypes from "prop-types";
import React, { Component } from "react";
import Marquee from "react-fast-marquee";

export class Heroo extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="h-calC100 ">
        <div>
          <Marquee
            direction="right"
            className="bg-[#5299EC] py-2 text-white text-2xl font-extralight tracking-widest"
          >
            Join Our Webinar on Blockchain and Finance - Register Now!{" "}
            <span className="ms-5"> &#9734;</span> Join Our Webinar on
            Blockchain and Finance - Register Now!{" "}
            <span className="ms-5"> &#9734;</span> Join Our Webinar on
            Blockchain and Finance - Register Now!{" "}
            <span className="ms-5"> &#9734;</span> Join Our Webinar on
            Blockchain and Finance - Register Now!{" "}
            <span className="ms-5"> &#9734;</span>{" "}
          </Marquee>
        </div>
        <div className="flex mt-10 lg:flex-row flex-col justify-between items-center container mx-auto">
          <div className="flex lg:flex-row flex-col flex-1 items-center 2xl:gap-20 gap-4 lg:pt-0 pt-4">
            <div className="flex lg:flex-col flex-row 2xl:gap-4 gap-2">
              <img className="w-9 cursor-pointer" src="/assets/xx-logo.png" />
              <img className="w-9 cursor-pointer" src="/assets/telegram-logo.png" />
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
            <h1 class="GFG 2xl:tracking-widest 2xl:text-9xl lg:text-8xl text-6xl ">
              Sigma33
            </h1>
          </div>
        </div>
        <div className="container mx-auto ">
          <div className="flex lg:flex-row flex-col lg:mt-10">
            <div className="lg:mx-0 mx-auto">
              <img
                className="lg:w-[450px] lg:h-[437px] h-[200px]"
                src="/assets/hero-bg.png"
              />
            </div>
            <div className="">
              <h1 className="2xl:text-[115px] lg:text-7xl sm:text-6xl text-3xl leading-tight  text-[#504F4F] font-extralight lg:text-start text-center">
                Your Gateway to <br /> the Future of <br />
                Finance
                <button className="text-2xl lg:mt-0 mt-8 px-4 py-2 items-center gap-3 text-white rounded-[56px] lg:inline-flex flex lg:mx-0 mx-auto bg-[#5299EC]">
                  Enter App
                  <img src="./assets/btn-img.png" />
                </button>
              </h1>
              <a href="#asd">
                <img
                  className="cursor-pointer fixed right-36 bottom-10"
                  src="./assets/scroll-down-img.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Heroo;
