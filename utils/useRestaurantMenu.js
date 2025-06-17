import { useState, useEffect } from 'react';
import { RESTAURANT_MENU_API } from "./constants";
const useRestaurantMenu = (restaurantId) => {
  const [restaurantData, setRestaurantData] = useState(null);  

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    try {
      // Make sure resId is defined or replace with a valid value
      const response = await fetch(RESTAURANT_MENU_API + restaurantId);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRestaurantData(data.data);
    } catch (error) {
      console.error("Failed to fetch restaurant menu:", error);
    }
  };

  return restaurantData;
};
export default useRestaurantMenu;
