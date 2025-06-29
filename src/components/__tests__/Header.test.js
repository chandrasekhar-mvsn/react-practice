import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../redux/appStore";
import UserContext from "../../../utils/UserContext";

it("Should render the header with the login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: /Login/i });
  expect(loginButton).toBeInTheDocument();
});

it("Should change button text to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider
          value={{ loggedInUser: "Guest", setUserName: jest.fn() }}
        >
          <Header />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: /Login/i });
  fireEvent.click(loginButton);
  const updatedLoginButton = screen.getByRole("button", { name: /Logout/i });
  expect(updatedLoginButton).toHaveTextContent("Logout");
});
