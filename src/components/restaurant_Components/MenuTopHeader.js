import React from 'react';
import "./RestaurantMenusStyle.css";

const MenuTopHeader = ({ menueItem }) => {
    const {
        id,
        cloudinaryImageId,
        name,
        cuisines,
        locality,
        costForTwoMessage,
        avgRating,
        totalRatingsString,
        sla: {slaString,lastMileTravelString},
    } = menueItem;
    console.log("the menu items are :-----   ", menueItem, id , name);
    
    const imageUrl = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`;

    return (
        <div className="menu-top-header">
            <img
                className="menu-top-header-img"
                src={imageUrl}
                alt={name}
            />
            <div className="menu-top-header-details">
                <h2 className="menu-top-header-title">{name}</h2>
                <p className="menu-top-header-cuisines">{cuisines?.join(", ")}</p>
                <div className='menu-top-header-locality'>{locality}, {lastMileTravelString}</div>
                <div className='menu-top-header-distance'>{lastMileTravelString}</div>
            </div>
            <div className='menu-top-header-rating'>
                <div className='menu-top-header-avg-rating'>{avgRating}</div>
                <div className='menu-top-header-total-ratings'>{totalRatingsString}</div>
            </div>
        </div>
    );
};

export default MenuTopHeader;
