import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureimg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-70 py-20 px-36 pt-12">
        <div>
          <img src={featureimg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20,2029</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            quisquam maiores nostrum dignissimos! Minus atque facere recusandae
            perspiciatis nesciunt beatae architecto soluta autem magni fugiat!
            Asperiores fugit ad distinctio molestiae.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
