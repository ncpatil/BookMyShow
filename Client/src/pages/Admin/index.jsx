import React from "react";
import { Tabs } from "antd";
import MovieList from "./MovieList.jsx";
import TheatreList from "./TheatreList.jsx";

function Admin() {
  const tabsItems = [
    {
      key: "1",
      label: "movies",
      children: <MovieList />,
    },
    {
      key: "2",
      label: "TheatreList",
      children: <TheatreList />,
    },
  ];
  return <Tabs items={tabsItems} />;
}

export default Admin;
