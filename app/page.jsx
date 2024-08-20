"use client";

import Navbar from "./navbar";
import Heroo from "./hero";
import Introduction from "./introduction";
import BuyNow from "./buyNow";

export default function Home() {
  return (
    <>
      <Navbar />
      <Heroo />
      <Introduction />
      <BuyNow />

      <div className="overflow-x-hidden bg-red-300"></div>
    </>
  );
}
