import React, { useState } from "react";
import { Modal } from "antd";

const Practice = () => {
  const [open, setOpenner] = useState(false);

  const openButton = () => {
    setOpenner(true);
  };

  const closeButton = () => {
    setOpenner(false);
  };

  return (
    <div className="container mx-auto text-5xl py-5 text-center cursor-pointer w-[400px] hover:bg-blue-100 ">
      <div>
        <h1 onClick={setOpenner}>Hello World</h1>
      </div>
      <Modal open={open} centered onCancel={closeButton}>
        What a beautiful day right ?
      </Modal>
    </div>
  );
};

export default Practice;
