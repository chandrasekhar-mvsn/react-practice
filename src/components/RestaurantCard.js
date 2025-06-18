import {CID_URL} from "../../utils/constants";
import { useNavigate } from "react-router";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  resId
}) => {
  const navigate = useNavigate();
  return (
    <div className="restaurant-card" onClick={() => navigate(`/restaurant/${resId}`)}>
      <img
        src={CID_URL+cloudinaryImageId}
        alt={name}
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>Delivery Time: {lastMileTravelString}</p>
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