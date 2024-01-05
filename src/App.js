import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import Error from "./Components/Error";
import ResMenu from "./Components/ResMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import userStore from "./utils/userStore";
import CartData from "./Components/CartData";

const Instamart = lazy(() => import("./Components/Instamart"));

const App = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Vishal Jadhav",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={userStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/resmenu/:resId",
        element: <ResMenu />,
      },
      {
        path: "/cart",
        element: <CartData />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>loading....</h1>}>
            {" "}
            <Instamart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
