import { useEffect, useState } from "react"


const useRestaurant = (resId) => {

    const [restaurant,setRestaurant] = useState(null);

    useEffect( ()=>{
        
        getRestaurant( resId );
    },[]);

    async function getRestaurant( resId ) {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.366893297739587&lng=85.33701281994581&restaurantId="+resId+"&submitAction=ENTER"
        );
        const restInfo = await data.json();
        setRestaurant(restInfo);
      }
    
     return restaurant;

}

export default useRestaurant;