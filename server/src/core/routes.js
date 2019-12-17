import getUsers from "../controller/test";

const routes = [
    {path: "/", controller: getUsers},
    {path: "/test", controller: getUsers},
];

export default routes;
