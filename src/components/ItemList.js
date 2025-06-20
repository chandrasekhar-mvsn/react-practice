import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { CID_URL } from "../../utils/constants";
import { toRupees } from "../../utils/commonUtils";
const ItemList = ({ itemInfo }) => {
const { price, description, id, name, imageId } = itemInfo || {};
   const dispatch = useDispatch();
  // Function to add an item to the cart
  const addItem = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <ul className="px-4 py-2 bg-white rounded-b-xl border-t">
      <li className="py-2 border-b last:border-b-0">
        <div className="flex flex-row items-start justify-between gap-4">
          {/* Left: Name and Description */}
          <div className="flex-1">
            <div className="font-medium text-gray-800">{name || ""}</div>
            <div className="text-gray-500 text-sm mt-1">
              {description || ""}
            </div>
          </div>
          {/* Right: Image, Price, Add Button */}
          <div className="flex flex-col items-center min-w-[120px] relative">
            <img
              className="restaurant-image w-24 h-24 object-cover rounded"
              src={`${CID_URL}${imageId}`}
              alt={name}
            />
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-row gap-18">
              <span className="bg-white bg-opacity-80 px-2 py-1 rounded text-green-600 font-semibold shadow">
                {price ? `₹${toRupees(price)}` : ""}
              </span>
              <button
                className="text-green-700 text-xml font-semibold bg-green-100 px-2 py-1 rounded-md hover:bg-green-200 transition-colors cursor-pointer shadow"
                onClick={() => addItem(itemInfo || {})}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};
export default ItemList;
