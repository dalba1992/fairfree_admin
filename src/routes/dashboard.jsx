import Dashboard from "views/Dashboard/Dashboard.jsx";
import Buttons from "views/Components/Buttons.jsx";
import GridSystem from "views/Components/GridSystem.jsx";
import Panels from "views/Components/Panels.jsx";
import SweetAlert from "views/Components/SweetAlertPage.jsx";
import Notifications from "views/Components/Notifications.jsx";
import Icons from "views/Components/Icons.jsx";
import Typography from "views/Components/Typography.jsx";
import RegularForms from "views/Forms/RegularForms.jsx";
import ExtendedForms from "views/Forms/ExtendedForms.jsx";
import ValidationForms from "views/Forms/ValidationForms.jsx";
import Wizard from "views/Forms/Wizard/Wizard.jsx";
import RegularTables from "views/Tables/RegularTables.jsx";
import ExtendedTables from "views/Tables/ExtendedTables.jsx";
import ReactTable from "views/Tables/ReactTable.jsx";
import GoogleMaps from "views/Maps/GoogleMaps.jsx";
import FullScreenMap from "views/Maps/FullScreenMap.jsx";
import VectorMap from "views/Maps/VectorMap.jsx";
import Charts from "views/Charts/Charts.jsx";
import Calendar from "views/Calendar/Calendar.jsx";
import Widgets from "views/Widgets/Widgets.jsx";
import UserPage from "views/Pages/UserPage.jsx";
import TimelinePage from "views/Pages/TimelinePage.jsx";

import pagesRoutes from "./pages.jsx";

var Events = [
  {
    path: "/timeline-page",
    name: "Create Event",
    mini: "CE",
    component: TimelinePage
  },
  {
    path: "/user-page",
    name: "Manage Events",
    mini: "ME",
    component: UserPage
  }
];
var Users = [
  {
    path: "/timeline-page",
    name: "Create User",
    mini: "CU",
    component: TimelinePage
  },
  {
    path: "/user-page",
    name: "Manage Users",
    mini: "MU",
    component: UserPage
  }
];
var dashRoutes = [ 
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard
  },
  {
    collapse: true,
    path: "/events",
    name: "Event Management",
    state: "openEvents",
    icon: "shopping_cart-simple",
    views: Events
  },
  {
    collapse: true,
    path: "/events",
    name: "User Management",
    state: "openUsers",
    icon: "users_circle-08",
    views: Users
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
