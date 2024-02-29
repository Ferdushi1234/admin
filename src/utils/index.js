import { BiLeaf } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import {
    MdHome,
    MdOutlineShoppingCart,
    MdTask,
    MdStackedBarChart,
    MdViewKanban,
    MdAddShoppingCart,
  } from "react-icons/md";
  
  export const routes = [
    {
      name: "Dashboard",
      layout: "/dashboard",
      icon: <MdHome className="h-6 w-6" />,
    },
    {
      name: "Products",
      layout: "/products",
      icon: <MdAddShoppingCart className="h-6 w-6" />,

    },
    {
      name: "Categories",
      layout: "/categories",
      icon: <BiLeaf className="h-6 w-6" />,

    },
    {
      name: "Users",
      layout: "/users",
      icon: <FaUser className="h-6 w-6" />,

    },
    {
      name: "Reports",
      layout: "/reports",
      icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    },
    {
      name: "Tasks",
      layout: "/tasks",
      icon: <MdTask className="h-6 w-6" />,
    },
    {
      name: "Kanban",
      layout: "/kanban",
      icon: <MdViewKanban className="h-6 w-6" />,
    },
    {
      name: "Charts",
      layout: "/charts",
      icon: <MdStackedBarChart className="h-6 w-6" />,
    },
  ];
  