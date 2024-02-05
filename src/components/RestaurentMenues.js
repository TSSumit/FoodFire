import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"; 
import {menue_api_URL} from "../utils/constants"

import RestaurantMenusStyle from "./restaurant_Components/RestaurantMenusStyle.css";
import MenuTopHeader from './restaurant_Components/MenuTopHeader';
import RestaurantContainer from './restaurant_Components/RestaurantContainer';
import RestaurantOffers from './restaurant_Components/RestaurantOffers';
import RestaurantWrapper from './restaurant_Components/RestaurantWrapper';
import RestaurantFooterAddress from './restaurant_Components/RestaurantFooterAddress';
import RestaurantMenueCard from "./restaurant_Components/RestaurentMenueCard";
import RestaurentMenueBlock from "./restaurant_Components/RestaurentMenueBlock";

const RestaurantMenues = () => {
  const parameters = useParams();
  const { resId } = parameters;
  const [restaurants, setRestaurants] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    // try {
      const response = await fetch(
        menue_api_URL+resId
      );
      const data = await response.json();
      console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
      setRestaurants(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card?.card?.itemCards[1]?.card?.info);
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // } finally {
      setLoading(false);
    // }
  }

  if (loading) {
    return <Shimmer />;
  }

  if (!restaurants) {
    return <div>Error loading restaurant data</div>;
  }

  return (
    <div>
      <h1>Restaurant Id: {resId} </h1>
      <h2>This is the restaurant menu page</h2>
      <h3>{restaurants?.name}</h3>
      {console.log(restaurants)}
      <RestaurantMenueCard menueItem={restaurants} />
    </div>
  );
};

export default RestaurantMenues;



