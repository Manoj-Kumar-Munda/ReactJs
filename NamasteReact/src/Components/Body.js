
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";




const Body = () => {

  //Local state variable
  const [restaurantList, setRestaurantList] = useState( [] );

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchInput, setSearchInput ] = useState("");

  function getList( list ){
    const restaurant = list?.data?.cards.filter( (res) => res?.cardType == 'restaurant');
    return restaurant;

  }

  function filterData( searchInput, restaurantList){
    const data = restaurantList.filter( (res) => res?.data?.data?.name.toLowerCase().includes(searchInput.toLowerCase()));
    return data;
  }

  useEffect( () => {
    //API call
    getAllRestaurants();
  }
  ,[])

  async function getAllRestaurants(){
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&lat=23.3440997&lng=85.309562&carousel=true&third_party_vendor=1");
    const json = await data.json();
    const restaurants = getList(json);
    setRestaurantList(restaurants);
    setFilteredRestaurant(restaurants);
  }


  //Normal JS variable
  console.log("render");

  //Conditional rendering
  //if restaurant is empty => shimmer UI
  // if restaurant has data => actual data UI

  if( !restaurantList){
    return null;
  }
/*
  if( filteredRestaurant?.length === 0){
    return <h2>No match found</h2>;
  }
  */

  return ( restaurantList?.length === 0) ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              ( res ) => res.data.data.avgRating > 3.5
            );
            setRestaurantList(filteredList);
          }
        }
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="search-bar">
        <input 
        id="search-input" 
        placeholder="search"
        value={searchInput} 
        onChange={ (e) => {
          setSearchInput(e.target.value);
        }

        }/>
        <button 
          className="search-btn"
          onClick={ () => {
            //filter the resList as per the given input
            const data = filterData( searchInput, restaurantList);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>

      </div>
      <div className="res-container">
        {/* write the logic for no match found after searching for a restaurant */}
        {
          (filteredRestaurant.length === 0)?( <h2>No match found</h2>):filteredRestaurant.map((restaurant) => (
            <RestaurantCard
              key={restaurant.data.data.id}
              resData={restaurant.data.data}
            />
          ))
        }
        
      </div>
    </div>
  );
};

export default Body;
