import "./restaurant_menu.css";
import { useParams } from "react-router";
import { CID_URL } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantData = useRestaurantMenu(resId);

  if (!restaurantData) {
    return (
      <div className="restaurant-menu-shimmer">
        <div className="shimmer-info">
          <div className="shimmer-title shimmer"></div>
          <div className="shimmer-cuisines shimmer">
           <div className="shimmer-cost shimmer"></div>
          </div>
          <div className="shimmer-image shimmer"></div>
        </div>
        <div className="shimmer-menu">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="shimmer-menu-section">
              <div className="shimmer-category shimmer"></div>
              <div className="shimmer-item shimmer"></div>
              <div className="shimmer-item shimmer"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  const info = restaurantData?.cards?.[2]?.card?.card?.info || {};
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } = info;
  const  categories  =
    restaurantData.cards[4].groupedCard.cardGroupMap.REGULAR.cards?.filter(
      (card) => card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) || [];

  return (
    <div className="restaurant-menu-list">
      <div className="restaurant-info">
        <h2 className="restaurant-name">{name || ""}</h2>
        <div className="restaurant-cuisines">
          {cuisines?.join(", ") || ""}
          <div className="restaurant-cost">{costForTwoMessage || ""}</div>
        </div>
        {cloudinaryImageId && (
          <img
            className="restaurant-image"
            src={`${CID_URL}${cloudinaryImageId}`}
            alt={name}
          />
        )}
      </div>
      {categories && categories.length > 0 && (
        <div className="restaurant-categories">
          <h3 style={{color: 'grey'}}>Categories</h3>
          <ul className="category-list">
            {categories.map((item, index) => {
              const { itemCards } = item.card.card;
              return (
                <div key={index} className="category-item">
                  {/* <h3>Menu</h3> */}
                  <div className="restaurant-menu-sections">
                    {/* {(itemCards || []).map((section, idx) => {
                      const { id } = section?.card?.info || {}; */}
                      {/* return ( */}
                        {/* <div key={idx+id} className="menu-section">
                          <h4 className="menu-category">{category || ""}</h4>
                          <ul className="menu-items">
                            <li className="menu-item">
                              <div className="item-title">
                                {name || ""}{" "}
                                <span className="item-price">
                                  {price ? `₹${price}` : ""}
                                </span>
                              </div>
                              <div className="item-description">{description || ""}</div>
                            </li>
                          </ul>
                        </div> */ }                     
                        <RestaurantCategory categoryInfo={item.card.card} />
                      {/* ); */}
                    {/* })} */}
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
