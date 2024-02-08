import React from 'react';
import "./RestaurantMenusStyle.css";
import RestaurantMenuCard from "./RestaurentMenueCard";

const RestaurantContainer = ({ catagory }) => {
    const menueCategories=catagory?.categories;
    const menueItemCards=catagory?.itemCards;
    const title=catagory?.title;
  return (
    <div className="restaurant-container">
        <span className="restaurant-container_title_box">
            <span>{title+(menueItemCards?(" ("+menueItemCards.length+")"):(""))}</span>
            {/* <span>▲▼</span> */}
        </span>
        <div className='restaurant-container_menueCards'>
    
            {menueItemCards ?
                menueItemCards.map((item, index) => (
                    <RestaurantMenuCard key={index} menueItem={item?.card?.info} />
                ))   
                :
                menueCategories.map((item, index) => (
                    <div>
                        <div>
                            <div className='menue_catagory_title-length'>
                                <div className='menue_catagory_item'>{item?.title}</div>
                                <div className='menue_catagory_item'>{" ("+item?.itemCards?.length+")"}</div>
                            </div>
                            {/* <div>
                                
                            </div> */}
                        </div>
                        <div>
                            {item?.itemCards.map((item, index) => (
                                <RestaurantMenuCard key={index} menueItem={item?.card?.info} />
                            ))}
                        </div>
                    </div>
                    
                ))
            }
        </div>
    </div>
  );
};

export default RestaurantContainer;
