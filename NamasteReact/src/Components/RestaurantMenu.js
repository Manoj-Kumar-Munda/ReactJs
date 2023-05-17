import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "./useRestaurant";
import useRestaurantMenu from "./useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  const restaurantInfo = getResInfo(restaurant);
  const restaurantMenu = useRestaurantMenu(resId);

  function getResInfo(info) {
    const data =  info?.data?.cards[0]?.card?.card?.info;
    return data;
  }


  return (!restaurantInfo) ? (
    <Shimmer type="thumbnail" />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant Id : {resId}</h1>
        <h2>{restaurantInfo.name}</h2>
        <img src={CDN_URL + restaurantInfo?.cloudinaryImageId} />

        <h3>{restaurantInfo?.areaName}</h3>
        <h3>{restaurantInfo?.city}</h3>
        <h3>{restaurantInfo?.avgRating} stars</h3>
      </div>

      {
        (!restaurantMenu)?(<Shimmer type="thumbnail"/>) :
        (
          <div>
          <h2>Menu</h2>
          <h3>{restaurantMenu.title}</h3>

          <ul>
            {restaurantMenu.itemCards.map((item) => (
              <li key={item.card.info.id}>{item.card.info.name}</li>
            ))}
          </ul>
          <ul></ul>
        </div>
        )
      }
    </div>
  );
};

export default RestaurantMenu;