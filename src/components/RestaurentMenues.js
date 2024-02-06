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
  const [menuHeaderData, setMenuHeaderData] = useState(null);
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
      console.log(data);
      setRestaurants(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[3]?.card?.info);
      setMenuHeaderData(data?.data?.cards[0]?.card?.card?.info);
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // } finally {
      setLoading(false);
    // }
  }

  if (loading) {
    return <Shimmer />;
  }

  if (!restaurants || !menuHeaderData) {
    return <div>Error loading restaurant data</div>;
  }

  return (
    <div id="restaurant_menue_body">
      <div id="restaurant_menues">
        <MenuTopHeader menueItem={menuHeaderData} />
        <RestaurantMenueCard menueItem={restaurants} />
      </div>
    </div>
  );
};

export default RestaurantMenues;



