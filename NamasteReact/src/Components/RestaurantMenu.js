import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.366893297739587&lng=85.33701281994581&restaurantId="+resId+"&submitAction=ENTER"
    );
    const restInfo = await data.json();
    const resInfo =   await getResInfo(restInfo);
    const resMenu =   await getResMenu(restInfo);
    console.log(resInfo);
    console.log(resMenu);
    setRestaurantInfo(resInfo);
    setRestaurantMenu(resMenu);
  }

  function getResInfo(info) {
    const data =  info?.data?.cards[0]?.card?.card?.info;
    return data;
  }

  async function getResMenu(info) {
    const data = await info?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1)[0].card.card;
    return data;
  }

  return !restaurantInfo ? (
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

      {(!restaurantMenu) ? (
        <Shimmer type="thumbnail" />
      ) : (
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
      )}
    </div>
  );
};

export default RestaurantMenu;
