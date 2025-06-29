import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../About";

test("Should load About page", async () => {
  render(<About />);
  const heading = screen.getByRole("heading", { name: /About Us/i });
  // Check if the main heading is present
  expect(heading).toBeInTheDocument();
});