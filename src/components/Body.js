import { CDN_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard"
import {useState} from "react";
import restaurantList from "../utils/mockData";

const Body=()=>{
    const [ListOfrestaurants, setListOfRestaurants]=useState(restaurantList);
    return (
        <div className="body">
            <div className="filter_and_search">
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search..." id="search-bar"/>
                    <button className="search-button" onclick="performSearch()">Search</button>
                </div>
                <div className="filter">
                    <button 
                        className="filter_btn"
                        onClick={()=>{
                            const filteredList=ListOfrestaurants.filter((res)=> res.data.avgRating>4.2 );
                            console.log(ListOfrestaurants);
                            setListOfRestaurants(filteredList);
                            console.log(ListOfrestaurants);
                        }}
                    > Top Rated Restaurants </button>
                </div>
            </div>
            <div className="restaurant-containser">
                {ListOfrestaurants.map((restaurant) => {
                    const { name, avgRating, slaString, cuisines,locality, cloudinaryImageId } = restaurant.data;
                    const rating = avgRating + " Stars";
                    const src = CDN_URL +cloudinaryImageId;

                    return (
                        <RestaurantCard
                            key={restaurant.data.id}
                            hotelName={name}
                            rating={rating}
                            time={slaString}
                            area={cuisines.join(", ")}
                            address={locality}
                            imagelinek={src}
                        />
                    );
                })}

                
                <RestaurantCard hotelName="Andra Gunpowder" rating="4.3" time="12 min" area="Burger america" address="Sanjay Nagar" imagelinek="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r3ybrbwebno0gth3cgus"/>
                <RestaurantCard hotelName="KFC" rating="4.3" time="25 min" area="barkely desert" address="MarathaHalli" imagelinek="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"/>
                <RestaurantCard hotelName="McDonald's" rating="3.8" time="14 min" area="Bangali biryani" address="Whitefiesl" imagelinek="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cd832b6167eb9f88aeb1ccdebf38d942"/>
                <RestaurantCard hotelName="phulke ghar ka" rating="4.5" time="32 min" area="sween snacks" address="MarathaHalli" imagelinek="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yfyo8aklppbwdplv7ofp"/>
                <RestaurantCard hotelName="Asha tifin" rating="4.1" time="23 min" area="Bangali chainese" address="Mahadevpur" imagelinek="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/405645b3118d83e89db4c65361e43733"/>
                <RestaurantCard hotelName="Mani's dum biryani" rating="4.0" time="34 min" area="marathi misal" address="Broughtfill" imagelinek="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/um3dvxiaqru2q1iynexk"/>
                <RestaurantCard hotelName="Nandana place" rating="3.7" time="43 min" area="pizza italian" address="Sanjay nager" imagelinek="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r08nbmwgi1pmj01hr9yh"/>
                <RestaurantCard hotelName="Tuffle" rating="4.5" time="13 min" area="Barkery" address="Bellendur" imagelinek="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0adee855c65fa947a256764a87a55658"/>
                <RestaurantCard hotelName="wikingo" rating="4.2" time="23 min" area="maxian salad" address=""kabudisanahil imagelinek="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f5xayoro0vcaj3k5c7ze"/>
                <RestaurantCard hotelName="phulke ghar ka" rating="4.5" time="32 min" area="sween snacks" address="MarathaHalli" imagelinek="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p9b6me3vhnrf8pn6q8yz"/>
                <RestaurantCard hotelName="Asha tifin" rating="4.1" time="23 min" area="Bangali chainese" address="Mahadevpur" imagelinek="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d96267738c19ec62acb5390e52faba41"/>
            </div>
        </div>
    )
}

export default Body;