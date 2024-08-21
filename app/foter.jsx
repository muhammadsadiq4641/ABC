import { Modal } from "antd";
import React, { useState } from "react";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="bg-[#5299EC]">
      <div className="flex justify-center gap-6 py-4">
        <img
          className="cursor-pointer h-[30px]"
          src="./assets/footer-unity.png"
        />
        <img id="footer" onClick={showModal}
          className="cursor-pointer h-[30px]"
          src="./assets/footer-twitter.png"
        />
        <img
          className="cursor-pointer h-[30px]"
          src="./assets/footer-telegram.png"
        />
      </div>
      <Modal open={open} centered onCancel={handleCancel}>
        hello world
      </Modal>
      ;
    </div>
  );
};

export default Footer;
