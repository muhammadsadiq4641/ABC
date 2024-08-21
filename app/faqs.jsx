"use client";
import { FaqData } from "@/components/data";
import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleClick = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="container mx-auto px-4">
        <h1 className="text-[80px] text-center text-[#504F4F]">FAQs</h1>
        <div>
          {FaqData.map((item, index) => (
            <div
              className="border-b-2 border-[#5299EC] border-opacity-40 border-dashed py-4"
              key={item.id}
            >
              <div
                onClick={() => handleToggle(index)}
                className="flex justify-between  items-center cursor-pointer relative z-10 mt-10"
              >
                <h5 className="lg:text-[34px] sm:text-[24px]">
                  {index + 1}.{item.question}
                </h5>
                <div
                  className={`sm:w-[70px] w-[40px] h-[40px] sm:h-[70px]  rounded-full cursor-pointer border
                             border-[#5A5958] border-opacity-50 flex justify-center 
                             items-center ${
                               activeIndex === index &&
                               "bg-[#5299EC] border-none"
                             } `}
                >
                  {activeIndex === index ? (
                    <FiMinus className="text-3xl text-white" />
                  ) : (
                    <IoAdd className="text-3xl text-[#5a5958a8]" />
                  )}
                </div>
              </div>
              {activeIndex === index && (
                <h5 className="lg:text-[24px] sm:text-[16px] text-[10px]">
                  {item.answer}
                </h5>
              )}
            </div>
          ))}
        </div>
        <div
          className="flex justify-center text-white text-3xl hover:text-black items-center ms-auto my-5 bg-[#5299EC] rounded-full sm:w-[80px] w-[50px] h-[50px] sm:h-[80px] "
          onClick={handleClick}
        >
          <span>
            <IoIosArrowUp className="transition-all " />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
