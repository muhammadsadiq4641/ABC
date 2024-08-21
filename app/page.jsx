"use client";

import Navbar from "./navbar";
import Heroo from "./hero";
import Introduction from "./introduction";
import BuyNow from "./buyNow";
import Faqs from "./faqs";
import Footer from "./foter";
import Practice from "./prractice";

export default function Home() {
  return (
    <>
      <Navbar />
      <Heroo />
      <Introduction />
      <BuyNow />
      <Faqs />
      <Footer />
      {/* <Practice /> */}
      
    </>
  );
}
