import NewsInfo from "../component/news/NewsInfo";
import ProductInfo from "../component/product/ProductInfo";
import UserInfo from "../component/user/UserInfo";
import NewsAdd from "../component/news/NewsAdd";
import NewsList from "../component/news/NewsList";
import Home from "../component/Home";
import ProductList from "../component/product/ProductList";
import ProductAdd from "../component/product/ProductAdd";
import UserList from "../component/user/UserList";
import UserAdd from "../component/user/UserAdd";
//路由配置
const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/productInfo/",
        component: ProductInfo,
        routes: [
            {
                path: "/productInfo",
                component: ProductList,
                exact: true
            },
            {
                path: "/productInfo/productAdd",
                component: ProductAdd
            }
        ]
    },
    {
        path: "/userInfo/",
        component: UserInfo,
        routes: [
            {
                path: "/userInfo",
                component: UserList,
                exact: true
            },
            {
                path: "/userInfo/userAdd",
                component: UserAdd
            }
        ]
    },
    {
        path: "/newsInfo/",
        component: NewsInfo,
        routes: [
            {
                path: "/newsInfo",
                component: NewsList,
                exact: true
            },
            {
                path: "/newsInfo/newsAdd",
                component: NewsAdd
            }
        ]
    }
];
export default routes;