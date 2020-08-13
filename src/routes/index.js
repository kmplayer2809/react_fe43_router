import AdminLayout from "../containers/Admin";
import AddUserPage from "../containers/Admin/AddUserPage";
import DashboardPage from "../containers/Admin/Dashboard";
import DetailPage from "../containers/DetailPage";

const { default: HomeLayout } = require("../containers/Home");
const { default: AboutPage } = require("../containers/Home/AboutPage");
const { default: HomePage } = require("../containers/Home/HomePage");
const { default: ListMovie } = require("../containers/Home/ListMovie");

const routesHome = [
    {
        exact:true,
        path:"/",
        component: HomeLayout
    },
    {
        exact:false,
        path:"/home",
        component: HomePage
    },
    {
        exact:false,
        path:"/about",
        component: AboutPage
    },
    {
        exact:false,
        path:"/list-movie",
        component: ListMovie
    },
    {
        exact:false,
        path:"/detail/:id",
        component: DetailPage
    }
];

const routesAdmin = [
    {
        exact:false,
        path:"/admin",
        component: AdminLayout
    },
    {
        exact:false,
        path:"/dashboard",
        component: DashboardPage
    },
    {
        exact:false,
        path:"/add-user",
        component: AddUserPage
    }
];

export {routesHome, routesAdmin};