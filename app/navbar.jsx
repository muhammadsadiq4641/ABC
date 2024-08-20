import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto ">
      <div className="py-4 flex justify-between items-center">
        <div>
          <Image
            src="/assets/sigma33-logo.png"
            alt="sigma logo"
            width={45}
            height={65}
          />
        </div>
        <div className="flex gap-1">
          <button className="button-t text-xl text-[#504F4F border-2 border-[#C5CBCB] px-3 hover:text-white hover:bg-[#5299EC]  hover:border-[#5299EC]  rounded-3xl">
            Litepaper
          </button>
          <button className="button-t text-xl text-white bg-[#5299EC] border-2 border-[#5299EC] px-3 rounded-3xl hover:text-[#504F4F] hover:bg-transparent hover:border-[#C5CBCB]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
