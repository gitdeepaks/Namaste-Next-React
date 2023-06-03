import React, { useEffect, useState } from "react";
import RestaurantCart from "./RestaurantCart";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //Used to create the state variables

  const [searchinput, SetSearchInput] = useState(""); //Used to create the state variables

  //when ever state variable update mreact trigger a reconciliation cycle(re-render the component)
  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //Optional Chaining
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  //conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchinput}
            onChange={(e) => {
              SetSearchInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the UI and search text
              console.log(searchinput);

              const filterRes = listOfRestaurants.filter((res) => {
                res.data.name.toLowerCase().includes(searchinput.toLowerCase());
              });

              setListOfRestaurants(filterRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4.1
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCart key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
