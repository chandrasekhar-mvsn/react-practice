import { useState, useEffect } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import resData from "../../utils/mockdata";
// import "./../app.css";
//Normal js variable
// let restaurantList = resData.card.gridElements.infoWithStyle.restaurants;
//State variable
const Body = () => {
  // const [restaurantList, setRestaurantList] = useState(
  //   resData.card.gridElements.infoWithStyle.restaurants
  // );
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    // This is a side effect, like fetching data from an API
    // console.log("Component mounted or updated");
    // You can also perform cleanup here if needed
    console.log("Component mounted");
    fetchData();
    return () => {
      // Cleanup code if needed
      // console.log("Component unmounted");
    };
  }, []);
  const fetchData = async () => {
    // Simulating an API call
    // In a real application, you would use fetch or axios to get data from an API
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const restaurants =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantList(restaurants);
    setFilteredList(restaurants);
  };
  const filterTopRated = () => {
    const initialData = JSON.parse(JSON.stringify(restaurantList))
    const topRatedRestaurants =
      initialData.filter(
        (restaurant) => restaurant.info.avgRating >= 4.5
      );
    setFilteredList(topRatedRestaurants);
  };
  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" value={searchText}onChange={(e) => {setSearchText(e.target.value)}}placeholder="Search Restaurants..." />
        <button className="search-btn" onClick={()=> {
          const filteredList = restaurantList.filter((restaurant) => {
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
          })
          filteredList && filteredList?.length > 0 && setFilteredList(filteredList);
        }}>Search</button>
        <button className="reset-btn" onClick={() => {
          setSearchText("");
          fetchData();
        }}>Reset</button>
      </div>
      <div className="filter-options">
        <button
          className="filter-btn"
          onClick={() => {
            filterTopRated();
          }}
        >
          Top Rated Restaurants
        </button>
        {/* <button className="sort-btn">Sort</button>
        <button className="offers-btn">Offers</button>
        <button className="rating-btn">Rating</button>
        <button className="delivery-btn">Delivery Time</button>
        <button className="price-btn">Price</button> */}
      </div>
      <div className="restaurant-list">
        {/* Render restaurant cards dynamically */}
        {filteredList &&
          filteredList?.length > 0 ? (
          filteredList?.map((restaurant) => (
            restaurant.info.aggregatedDiscountInfoV3?.discountTag ? (
              <PromotedRestaurantCard
                key={restaurant.info.id}
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines}
                cloudinaryImageId={restaurant.info.cloudinaryImageId}
                lastMileTravelString={restaurant.info.sla.lastMileTravelString}
                resId={restaurant.info.id}
                discountTag={restaurant.info.aggregatedDiscountInfoV3.discountTag}
              />
            ) : (
            <RestaurantCard
              key={restaurant.info.id}
              name={restaurant.info.name}
              cuisines={restaurant.info.cuisines}
              cloudinaryImageId={restaurant.info.cloudinaryImageId}
              lastMileTravelString={restaurant.info.sla.lastMileTravelString}
              resId={restaurant.info.id}
            />
            )
          ))) : (
            <Shimmer />
          )}
      </div>
    </div>
  );
};

export default Body;
