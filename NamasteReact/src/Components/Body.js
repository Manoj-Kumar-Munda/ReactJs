
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";



const Body = () => {

  //Local state variable
  const [restaurantList, setRestaurantList] = useState( resList );

  const [searchInput, setSearchInput ] = useState("");


  //Normal JS variable
  let restaurantListJS = [
    {
      data: {
        data: {
          id: "84458",
          name: "Sensex The Tea Point",
          uuid: "3c72d04c-5bc1-4822-9cc2-8d5fb59a87f0",
          cloudinaryImageId: "nzma6kl7rfizwtcfc3vy",
          cuisines: [
            "North Indian",
            "Continental",
            "Biryani",
          ],
  
          "avgRating": "3.8"
        },
      },
    },
    {
      data: {    
        data: {
          id: "84455",
          name: "Kaveri",
          uuid: "3c72d04c-5bc1-4822-9cc2-8d5fb59a87f0",
          cloudinaryImageId: "19ce20eb68d3abef762ebce33b535640",
          cuisines: [
            "North Indian",
          ],
          "avgRating": "4.1"
        },
      },
    }
  ];

  return (
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
        <h2>{searchInput}</h2>
        <button 
          className="search-btn"
          onClick={ () => {
            //filter the resList as per the given input
            const matchedRes = resList.filter(
              (res) => res.data.data.name.toLowerCase().includes(searchInput)
            );
            setRestaurantList(matchedRes);
            console.log(matchedRes);

          }}
        >
          Search
        </button>

      </div>
      <div className="res-container">
        { restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.data.id}
            resData={restaurant.data.data}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
