import Pages from "layouts/Pages/Pages.jsx";
import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Login from "layouts/Login/Login.jsx";

var indexRoutes = [
  { path: '/', name: 'Login', component: Login },
  { path: "/pages", name: "Pages", component: Pages },
  { path: "/dashboard", name: "Home", component: Dashboard },
];

export default indexRoutes;
