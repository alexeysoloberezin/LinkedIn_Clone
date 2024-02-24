import React from "react";
import Home from "@/pages/home";
import Feed from "@/pages/feed";

const _routes = [
  {
    path: "/",
    element: <Feed />
  },
  {
    path: "/feed",
    element: <Feed />
  },
  {
    path: "/in/:id",
    element: <Home />
  },
];

export default _routes