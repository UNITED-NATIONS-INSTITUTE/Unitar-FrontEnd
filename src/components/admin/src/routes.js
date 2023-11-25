
import Dashboard from "views/Dashboard.js";
import Pickupagent from "views/Pickupagent";
import Orders from "views/Orders";
import Customers from "views/Customers";
import Vehicles from "views/Vehicles";
import Pickupstore from "views/Pickupstore";
import Riders from "views/Riders.js";
// import Profile from "pages/Profile";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-layout-11",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "nc-icon nc-basket",
    component: Orders,
    layout: "/admin"
  },
  {
    path: "/pickupstores",
    name: "Pickup Stores",
    icon: "nc-icon nc-shop",
    component: Pickupstore,
    layout: "/admin"
  },
  {
    path: "/pickupagents",
    name: "Pickup Agents",
    icon: "nc-icon nc-user-run",
    component: Pickupagent,
    layout: "/admin"
  },
  {
    path: "/riders",
    name: "Riders",
    icon: "nc-icon nc-circle-10",
    component: Riders,
    layout: "/admin"
  },
  {
    path: "/vehicles",
    name: "Vehicles",
    icon: "nc-icon nc-delivery-fast",
    component: Vehicles,
    layout: "/admin"
  },
  {
    path: "/customers",
    name: "Customers",
    icon: "nc-icon nc-badge",
    component: Customers,
    layout: "/admin"
  },
  // {
  //   path: "/profile",
  //   name: "Customers",
  //   icon: "nc-icon nc-badge",
  //   component: Profile,
  //   layout: "/admin"
  // },

];
export default routes;
