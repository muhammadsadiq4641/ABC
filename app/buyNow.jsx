import React from "react";

const BuyNow = () => {
  return (
    <div id="asd" className="bg-ponnyImg bg-no-repeat lg:bg-right bg-right-top">
      <div className="container mx-auto ">
        <div>
          <h1 className="text-[80px] text-center text-[#504F4F]">Buy now</h1>
        </div>
        <div className="flex lg:flex-row flex-col-reverse gap-5 justify-between items-center ">
          <div>
            <img className="w-[771px]" src="./assets/buynow-img.png" />
          </div>
          <div className="mx-auto block">
            <img src="./assets/buynow-second.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
