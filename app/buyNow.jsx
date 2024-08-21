import React from "react";

const BuyNow = () => {
  return (
    <div id="asd" className="bg-ponnyImg sm:mb-10 mb-4 bg-no-repeat lg:bg-right bg-right-top">
      <div className="container mx-auto ">
        <div className="sm:mb-14 mb-5">
          <h1 className="sm:text-[80px] text-4xl text-center text-[#504F4F]">Buy now</h1>
        </div>
        <div className="flex lg:flex-row flex-col-reverse gap-5 justify-between items-center ">
          <div>
            <img className="w-[771px] sm:px-0 px-4" src="./assets/buynow-img.png" />
          </div>
          <div className="mx-auto block sm:px-0 px-10">
            <img src="./assets/buynow-second.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
