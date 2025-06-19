// import React from "react";
import { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import "./app.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
// import About from "./components/About";
import Errorpage from "./components/Errorpage";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from '../utils/UserContext';
// const app = React.createElement('div', null, 'Hello, React!');
// console.log(app);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(app);

// Lazy loading the About component to optimize performance
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("Guest");
  useEffect(() => {
    // Simulating a user login after 2 seconds
    const timer = setTimeout(() => {
      setUserName("Guest");
    }, 2000);
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
   <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>     
    <div className="app-layout">
      <Header />
      <Outlet />
      {/* Outlet is a placeholder for the child routes */}
      <Footer />
    </div>
    </UserContext.Provider>
  );
};
// Create a browser router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "",
        element: <Body />,
      }, // / (index route)
      {
        path: "/about",
        element: <Suspense fallback={<h1>Lazy Loading...</h1>}><About /></Suspense>,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the AppLayout component with out Router
// root.render(<AppLayout />);
// Render the AppLayout component with Router
root.render(<RouterProvider router={appRouter} />);
