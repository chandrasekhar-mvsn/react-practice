import { CID_URL } from "../../utils/constants";
const RestaurantCategory = ({ categoryInfo }) => {
  const { itemCards, title } = categoryInfo || {};
  // Helper function to convert paise to rupees
  const toRupees = (amount) => {
    if (!amount) return "";
    return (amount / 100).toFixed(2);
  };
  return (
    // Accordion component to display restaurant categories
    <div className="w-full mx-auto bg-white shadow-md">
      <details className="group">
        <summary className="flex justify-between items-center cursor-pointer px-4 py-3 text-lg font-semibold bg-white-100 group-open:rounded-b-none hover:bg-gray-100 transition-colors">
          {title} {itemCards?.length > 0 ? `(${itemCards.length})` : ""}
          <span className="ml-2 transition-transform duration-200 group-open:rotate-180">
            {/* Animated chevron arrow */}
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </summary>
        {(itemCards || []).map((section, idx) => {
          const { category, price, description, id, name, imageId } =
            section?.card?.info || {};

          return (
            <ul
              className="px-4 py-2 bg-white rounded-b-xl border-t"
              key={id || idx}
            >
              <li className="py-2 border-b last:border-b-0">
                <div className="w-90 font-medium text-gray-800 flex items-center justify-between">
                  {name || ""}
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <div className="w-90 text-gray-500 text-sm mt-1">
                    {description || ""}
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      className="restaurant-image"
                      src={`${CID_URL}${imageId}`}
                      alt={name}
                    />
                    <span className="text-green-600 font-semibold">
                      {price ? `₹${toRupees(price)}` : ""}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          );
        })}
      </details>
    </div>
  );
};
export default RestaurantCategory;
