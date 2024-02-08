import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"; 
import {menue_api_URL} from "../utils/constants"
import Error from "./Error";

// import RestaurantMenusStyle from "./restaurant_Components/RestaurantMenusStyle.css";
import MenuTopHeader from './restaurant_Components/MenuTopHeader';
import RestaurantOfferCard from './restaurant_Components/RestaurantOfferCard'
import RestaurantMenueCard from "./restaurant_Components/RestaurentMenueCard";
import RestaurantContainer from './restaurant_Components/RestaurantContainer';


const RestaurantMenues = () => {
  const parameters = useParams();
  const { resId } = parameters;
  const [menuHeaderData, setMenuHeaderData] = useState(null);
  const [offerCardData, setOfferCardData] = useState(null);
  const [catagoryData, setCatagoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(
        menue_api_URL+resId
      );
      const data = await response.json();
      console.log(data);
      setMenuHeaderData(data?.data?.cards[0]?.card?.card?.info);
      setOfferCardData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers);
      setCatagoryData(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Shimmer />;
  }

  if (!catagoryData  || !offerCardData || !menuHeaderData) {
    return <div>Error loading restaurant data</div>;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div id="restaurant_menue_body">
      <div id="restaurant_menues">
        <MenuTopHeader menueItem={menuHeaderData} />
        <div className="restaurant-offers styles_slider_offers">
          {offerCardData.map((offer) => (            
              <RestaurantOfferCard
                key={offer.info.offerIds[0]} // Using offerIds[0] as the key
                offer={offer.info}
              />
          ))}
          {offerCardData.map((offer) => (            
              <RestaurantOfferCard
                key={offer.info.offerIds[0]} // Using offerIds[0] as the key
                offer={offer.info}
              />
          ))}
        </div>
        <div id="restorant_menue_catagory">
          {catagoryData.map((item, index) => (
            (item.card?.card?.itemCards || item.card?.card?.categories) ? (
              <RestaurantContainer key={index} catagory={item?.card?.card} />
            ) : (
              null
            )
          ))}
        </div>

      </div>
    </div>
  );
};

export default RestaurantMenues;


