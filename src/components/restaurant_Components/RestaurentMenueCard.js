// RestaurantMenuCard.jsx
import React from 'react';
import "./RestaurantMenusStyle.css";

const RestaurantMenuCard = ({ menueItem }) => {
    console.log("the menu items are :-   ", menueItem);

    const {
        name,
        price,
        isVeg,
        inStock,
        description,
        imageId,
    } = menueItem;

    const imageUrl = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${imageId}`;

    return (
        <div className="menu-card">
            <div className="menu-details">
            <div className="icon-container">
                {isVeg ? <span className="veg-icon">Veg</span> : <span className="non-veg-icon">Non-Veg</span>}
            </div>
            <div className="info-container">
                <h3>{name}</h3>
                <p>Price: ₹{price / 100}</p>
                {inStock ? (
                <button className="add-to-cart">Add to Cart</button>
                ) : (
                <p className="unavailable-message">Available tomorrow at 5 am</p>
                )}
            </div>
            </div>
            <div className="image-container">
            <img src={imageUrl} alt={name} />
            </div>
        </div>
    );
};

export default RestaurantMenuCard;
