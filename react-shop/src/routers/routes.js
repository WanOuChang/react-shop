import React from "react";
import Loadable from "react-loadable";

function Loading(){
    return (
        <div>Loading...</div>
    )
}

const routes = [{
    path: "/login",
    component: Loadable({
        loader: () =>
            import ('@/views/login/'),
        loading: Loading,
    })
}, {
    path: "/registry",
    component: Loadable({
        loader: () =>
            import ('@/views/registry/'),
        loading: Loading,
    })
}, {
    path: "/citys",
    component: Loadable({
        loader: () =>
            import ('@/views/citys/'),
        loading: Loading,
    })
}, {
    path: "/shop",
    component: Loadable({
        loader: () =>
            import ('@/views/shop/'),
        loading: Loading,
    })
}, {
    path: "/my",
    component: Loadable({
        loader: () =>
            import ('@/views/my/'),
        loading: Loading,
    })
}, {
    path: "/detail",
    component: Loadable({
        loader: () =>
            import ('@/views/detail/'),
        loading: Loading,
    })
}, {
    path: "/order",
    component: Loadable({
        loader: () =>
            import ('@/views/order/'),
        loading: Loading,
    })
}, {
    path: "/write",
    component: Loadable({
        loader: () =>
            import ('@/views/write/'),
        loading: Loading,
    })
},{
    path:"/",
    redirect:"/login",
}]

export default routes;