import React from "react";
import img from "./Assets/icon _developer mode_.svg";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import AllGames from "./Components/AllGames";
import Platforms from "./Components/Platforms";
import Strore from "./Components/Strore";
import Developers from "./Components/Developers";
import Publisher from "./Components/Publisher";
import GameDetails from "./Components/Details Components/GameDetails";
const App = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          index: true,
          element: <AllGames />,
        },
        {
          path: "/platforms",
          element: <Platforms />,
        },
        {
          path: "/stores",
          element: <Strore />,
        },
        {
          path: "/developers",
          element: <Developers />,
        },
        {
          path: "/publisher",
          element: <Publisher />,
        },
      ],
    },
    {
      path: "/gamedetails/:id",
      element: <GameDetails />,
    },
  ]);
  return <RouterProvider router={Router}></RouterProvider>;
};

export default App;
