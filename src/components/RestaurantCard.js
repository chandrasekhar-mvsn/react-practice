import {CID_URL} from "../../utils/constants";
import { useNavigate } from "react-router";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  deliveryTime,
  resId
}) => {
  const navigate = useNavigate();
  return (
    <div className="restaurant-card" onClick={() => navigate(`/restaurant/${resId}`)}>
      <img
        src={CID_URL+cloudinaryImageId}
        alt={name}
      />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>Delivery Time: {deliveryTime}</p>
        <p>Distance: {lastMileTravelString}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="promoted-label">
        <WrappedComponent {...props} />
        <span className="discount-label">{props.discountTag}</span>
      </div>
    );
  }
};
export default RestaurantCard;