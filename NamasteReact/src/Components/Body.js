import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import RestCardSkeleton from "./RestCardSkeleton";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "./useOnline";
import { RESTAURANT_LIST_URL } from "../utils/constants.js";

const Body = () => {
  //Local state variable
  const [restaurantList, setRestaurantList] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  function getList(list) {
    const restaurant = list?.data?.cards.filter(
      (res) => res?.cardType == "restaurant"
    );
    return restaurant;
  }

  function filterData(searchInput, restaurantList) {
    const data = restaurantList.filter((res) =>
      res?.data?.data?.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return data;
  }

  function filterTopRated(restaurantList) {
    const data = restaurantList.filter((res) => res?.data?.data?.avgRating > 4);
    return data;
  }

  useEffect(() => {
    //API call
    getAllRestaurants();
  }, []);

  async function getAllRestaurants() {
    const data = await fetch(RESTAURANT_LIST_URL);
    const json = await data.json();
    console.log(json);
    const restaurants = getList(json);
    setRestaurantList(restaurants);
    setFilteredRestaurant(restaurants);
  }

  const isOnline = useOnline();

  if(! isOnline ){
    return <h1>You are offline</h1>;
  }



  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filterTopRated(restaurantList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="search-bar">
        <input
          id="search-input"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //filter the resList as per the given input
            const data = filterData(searchInput, restaurantList);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {/* write the logic for no match found after searching for a restaurant */}
        {restaurantList.length === 0 ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <RestCardSkeleton key={n} />
          ))
        ) : filteredRestaurant.length === 0 ? (
          <h2>No match found</h2>
        ) : (
          filteredRestaurant.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.data.data.id}
              key={restaurant.data.data.id}
            >
              <RestaurantCard resData={restaurant.data.data} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
