import { CDN_URL, swiggy_api_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard"
import {useEffect, useState} from "react";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
        const [errorMessage, setErrorMessage] = useState("");
        // console.log("alakd;f");
        useEffect(()=>{
            getRestorents();
        },[]);
        // async function getRestorents(){
        //     try{
        //         const data=await fetch(swiggy_api_URL);
        //         const jsonData=await data.json();
        //         console.log(jsonData);
        //         console.log(jsonData?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants.restaurants);
        //         setallRestaurants(jsonData?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants.restaurants);
        //         setfilteredRestaurants(jsonData?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants.restaurants);
        // }
        // catch (error) {
        //     console.error("Unable to fetch data from API:", error);
        // }
          // async function getRestaurant to fetch Swiggy API data
        async function getRestorents() {
            // handle the error using try... catch
            try {
            const response = await fetch(swiggy_api_URL);
            const json = await response.json();

            // initialize checkJsonData() function to check Swiggy Restaurant data
            async function checkJsonData(jsonData) {
                for (let i = 0; i < jsonData?.data?.cards.length; i++) {
                    // initialize checkData for Swiggy Restaurant data
                    let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                    // if checkData is not undefined then return it
                    if (checkData !== undefined) {
                        console.log(checkData);
                        return checkData;
                    }
                }
            }
            // call the checkJsonData() function which return Swiggy Restaurant data
            const resData = await checkJsonData(json);
            // update the state variable restaurants with Swiggy API data
            setallRestaurants(resData);
            setfilteredRestaurants(resData);
            } catch (error) {
            console.log(error);
            }
        }

        const searchData = (searchText, restaurants) => {
            if (searchText !== "") {
              const filteredData = filterData(searchText, restaurants);
              setfilteredRestaurants(filteredData);
              setErrorMessage("");
              if (filteredData?.length === 0) {
                setErrorMessage("No matches restaurant found");
              }
            } else {
              setErrorMessage("");
              setfilteredRestaurants(restaurants);
            }
        };

    console.log("render");
    if(!allRestaurants || !filteredRestaurants)return null;
    
        return (allRestaurants?.length==0)?<Shimmer/>:(
        // return (
            <div className="body">
                <div className="filter_and_search">
                    <div className="filter">
                        <button 
                            className="filter_btn filter_btn"
                            onClick={()=>{
                                const filteredList=allRestaurants.filter((res)=> res.info.avgRating>4.2 );
                                setfilteredRestaurants(filteredList);
                            }}
                        >Rating 4.2+</button>
                        <button 
                            className="pure_veg_btn filter_btn"
                            onClick={() => {
                                const filteredList = allRestaurants.filter((res) => res.info.veg);
                                setfilteredRestaurants(filteredList);
                            }}
                        >Pure Veg</button>

                        <button 
                            className="fast_delivery_btn filter_btn"
                            onClick={() => {
                                const sortedList = allRestaurants.slice().sort((a, b) => {
                                    return a.info.sla.deliveryTime - b.info.sla.deliveryTime;
                                });
                                setfilteredRestaurants(sortedList);
                            }}
                        >Fast Delivery</button>

                        <button 
                            className="300_600_btn filter_btn"
                            onClick={() => {
                                const filteredList = allRestaurants.filter((res) => {
                                    const costForTwo = parseInt(res.info.costForTwo.replace(/\D/g, ''), 10);
                                    return costForTwo >= 300 && costForTwo <= 500;
                                });
                                setfilteredRestaurants(filteredList);
                            }}
                        >Rs.300-Rs.500</button>

                        <button 
                            className="less_than_300 filter_btn"
                            onClick={() => {
                                const filteredList = allRestaurants.filter((res) => {
                                    const costForTwo = parseInt(res.info.costForTwo.replace(/\D/g, ''), 10);
                                    return costForTwo < 300;
                                });
                                setfilteredRestaurants(filteredList);
                            }}
                        >Less than Rs.300</button>
                    </div>

                    <div className="search-container">
                        <input 
                            type="text" 
                            className="search-input" 
                            id="search-bar" 
                            placeholder="Search a restaurant you want..."  
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

                                // const data = filterData(searchText, allRestaurants);
                                // setfilteredRestaurants(data);
                                searchData(searchText, allRestaurants);
                            }}
                        >Search</button>
                    </div>
                    {errorMessage && <div className="error-container">{errorMessage}</div>}
                </div>
                <div className="restaurant-containser">
                    {filteredRestaurants?.length === 0 && allRestaurants?.length !== 0 ? (
                            <h1>No restaurant matches your filter!!</h1>
                        ) : (
                            filteredRestaurants.map((restaurant) => {
                                const { name, avgRating, cuisines, locality, cloudinaryImageId } = restaurant.info;
                                const rating = avgRating + "  •  ";
                                const src = CDN_URL + cloudinaryImageId;
                                console.log(name+"    "+restaurant?.info?.id);
                                return (
                                    <Link to={`/restaurant/${restaurant?.info?.id}`} style={{ textDecoration: 'none' }}>
                                        <RestaurantCard
                                            key={restaurant?.info?.id}
                                            hotelName={name}
                                            rating={rating}
                                            time={restaurant?.info?.sla?.slaString}
                                            area={cuisines.join(", ")}
                                            address={locality}
                                            imagelinek={src}
                                        />
                                    </Link>
                                );
                            })
                        )
                    }
                </div>
            </div>
        )
}

export default Body;






