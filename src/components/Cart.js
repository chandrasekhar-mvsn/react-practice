import { useSelector, useDispatch } from "react-redux";
import { toRupees } from "../../utils/commonUtils";
import { clearCart } from "../redux/slices/cartSlice"; // Import the clearCart action

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  // Function to clear the cart
  const clearCartData = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>
      {cartItems?.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {cartItems.map((item) => {
            const { price, description, id, name, imageId, quantity } =
              item || {};
            return (
              <li key={id} className="flex items-center justify-between py-4">
                <div>
                  <span className="font-medium text-gray-700">{name}</span>
                  <span className="block text-sm text-gray-500">
                    Qty: {quantity || 1}
                  </span>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  {price ? `₹${toRupees(price)}` : ""}
                </span>
              </li>
            );
          })}
          <li className="flex justify-end pt-4">
            <button
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition duration-200 cursor-pointer"
              onClick={() => {
                clearCartData(); // Call the function to clear the cart
              }}
            >
              Clear Cart
            </button>
          </li>
        </ul>
      ) : (
        <p className="text-gray-500 text-center">Your Cart is empty</p>
      )}
    </div>
  );
};
export default Cart;
