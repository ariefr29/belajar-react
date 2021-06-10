import {Showcase, Blog } from "../pages";

const route = [
  {
    name: "Showcase",
    path: "/",
    exact: true,
    component: Showcase 
  },
  {
    name: "Blog",
    path: "/blog",
    exact: true,
    component: Blog
  }
]

export default route; 