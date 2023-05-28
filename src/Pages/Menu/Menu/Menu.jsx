import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import PizzaImg from "../../../assets/menu/pizza-bg.jpg"
import SaladImg from "../../../assets/menu/salad-bg.jpg"
import SoupImg from "../../../assets/menu/soup-bg.jpg"
import UseMenu from '../../../hooks/UseMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import { useParams } from 'react-router-dom';

const Menu = () => {
    const [menu] = UseMenu();
    const {category} = useParams();
    console.log(category);
    // console.log(menu)
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'popular');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    const offered = menu.filter(item => item.category === 'offered');
  


    return (
        <div className='mt-8'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            {/* main cover */}
            <SectionTitle
            subHeading="Don't miss" heading="Today's Offer"
            ></SectionTitle>
            {/* offered meu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory
            items={dessert}
            title="dessert"
            img={dessertImg}
            ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory
            items={pizza}
            title="Pizza"
            img={PizzaImg}
            ></MenuCategory>
            <MenuCategory
            items={salad}
            title="salad"
            img={SaladImg}
            ></MenuCategory>
            <MenuCategory
            items={soup}
            title="soup"
            img={SoupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;