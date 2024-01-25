import { CDN_URL, swiggy_api_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard"
import {useEffect, useState} from "react";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";

function filterData(searchText,restaurants){
    const filterData=restaurants.filter((restaurants)=>
        restaurants?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}


const Body=()=>{

    const [allRestaurants, setallRestaurants]=useState(restaurantList);
    const [filteredRestaurants, setfilteredRestaurants]=useState(restaurantList);
    const [searchText, setSearchText]=useState("");
    // console.log("alakd;f");
    useEffect(()=>{
        getRestorents();
    },[]);
    async function getRestorents(){
        try{
            const data=await fetch(swiggy_api_URL);
            const jsonData=await data.json();
            setallRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setfilteredRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch (error) {
            console.error("Unable to fetch data from API:", error);
        }
    }
    console.log("render");
    if(!allRestaurants || !filteredRestaurants)return null;
    
        return (allRestaurants?.length==0)?<Shimmer/>:(
        // return (
            <div className="body">
                <div className="filter_and_search">
                    <div className="search-container">
                        <input 
                            type="text" 
                            className="search-input" 
                            id="search-bar" 
                            placeholder="Search"  
                            value={searchText} 
                            onChange={(e)=>{
                                setSearchText(e?.target?.value);
                                // const data = filterData(searchText, allRestaurants);
                                // setfilteredRestaurants(data);
                            }} 
                        />
                        <button 
                            className="search-button" 
                            onClick={()=>{
                                // const filteredList = allRestaurants.filter((res) => {
                                //     const restaurantName = res.info.name.toLowerCase();
                                //     const searchTextLowerCase = searchText.toLowerCase();
                                //     return restaurantName.includes(searchTextLowerCase);
                                // });
                                // setfilteredRestaurants(filteredList);

                                const data = filterData(searchText, allRestaurants);
                                setfilteredRestaurants(data);
                            }}
                        >Search</button>
                    </div>
                    <div className="filter">
                        <button 
                            className="filter_btn"
                            onClick={()=>{
                                const filteredList=allRestaurants.filter((res)=> res.info.avgRating>4.2 );
                                setfilteredRestaurants(filteredList);
                            }}
                        > Top Rated Restaurants </button>
                    </div>
                </div>
                <div className="restaurant-containser">
                {filteredRestaurants?.length === 0 && allRestaurants?.length !== 0 ? (
                        <h1>No restaurant matches your filter!!</h1>
                    ) : (
                        filteredRestaurants.map((restaurant) => {
                            const { name, avgRating, cuisines, locality, cloudinaryImageId } = restaurant.info;
                            const rating = avgRating + " Stars";
                            const src = CDN_URL + cloudinaryImageId;
                            return (
                                <RestaurantCard
                                    key={restaurant.info.id}
                                    hotelName={name}
                                    rating={rating}
                                    time={restaurant.info.sla.slaString}
                                    area={cuisines.join(", ")}
                                    address={locality}
                                    imagelinek={src}
                                />
                            );
                        })
                    )}
                </div>
            </div>
        )
}

export default Body;






