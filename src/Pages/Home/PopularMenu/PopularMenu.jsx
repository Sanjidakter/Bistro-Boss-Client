import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = UseMenu();
  const popular = menu.filter(item => item.category === 'popular');
  
  return (
    <section className="mb-12">
      <SectionTitle
        heading="From our menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 mb-6">
        {
            popular.map(item=><MenuItem
            key={item._id}
            item={item}
            ></MenuItem>)
        }
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-4 text-center x">View Full Menu</button>
    </section>
  );
};

export default PopularMenu;
