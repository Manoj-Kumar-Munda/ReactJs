import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    console.log("menu effect");
    getMenu(resId);
  },[]);

  async function getMenu( resId ) {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.366893297739587&lng=85.33701281994581&restaurantId="+resId+"&submitAction=ENTER");
    const info = await data.json();
    const menu = await info?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1)[0].card.card;
    setResMenu(menu);
  }
  return resMenu;
};

export default useRestaurantMenu;
