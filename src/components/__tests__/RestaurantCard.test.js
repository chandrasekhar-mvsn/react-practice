import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CID_URL } from "../../../utils/constants";
import RestaurantCard from "../RestaurantCard";
import { BrowserRouter } from "react-router";

it("should render the restaurant card with the correct props", () => {
  const mockProps = {
    name: "Test Restaurant",
    cuisines: ["Italian", "Pizza"],
    cloudinaryImageId: "test-image-id",
    lastMileTravelString: "5 km",
    deliveryTime: "30 mins",
    resId: "12345",
  };

  render(
    <BrowserRouter>
      <RestaurantCard {...mockProps} />
    </BrowserRouter>
  );

  expect(screen.getByText("Test Restaurant")).toBeInTheDocument();
  expect(screen.getByAltText("Test Restaurant")).toHaveAttribute(
    "src",
    `${CID_URL}${mockProps.cloudinaryImageId}`
  );
});
