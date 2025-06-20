import ItemList from "./ItemList";
const RestaurantCategory = ({ categoryInfo }) => {
  const { itemCards, title } = categoryInfo || {};

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
          return <ItemList itemInfo={section?.card?.info || {}} key={idx + id}/>;
        })}
      </details>
    </div>
  );
};
export default RestaurantCategory;
